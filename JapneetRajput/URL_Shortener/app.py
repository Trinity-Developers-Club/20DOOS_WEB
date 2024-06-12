from distutils.log import debug
from flask import Flask, render_template,request,session,redirect,url_for,g
from pyshorteners import *
import mysql.connector
from settings import DEBUG, SECRET_KEY, DB_PASSWORD

shortener = Shortener()

app = Flask(__name__)

app.secret_key=SECRET_KEY

def init():
    mydb=mysql.connector.connect(
        host="localhost",
        user="root",
        password=DB_PASSWORD,
        database="database_name"
    )
    mycursor = mydb.cursor()
    return mycursor, mydb 
mycursor, mydb = init()
    

@app.route('/', methods=['GET'])
def index():
    return render_template('pages/urlShortener.html')

@app.route('/beforeRegister')
def beforeLogin():
    return render_template('pages/login.html')

@app.route('/login',methods=['POST','GET'])
def login():
    if request.method=='POST':
        signup=request.form
        name = signup['name']
        username = signup['username']
        email = signup['email']
        passw = signup['pass']
        rpassw = signup['repass']
        # mycursor.execute("select * from users where Username='"+username+"'")
        # count=mycursor.rowcount
        # if count ==1:
        #     return "A user already exists with this username."
        # else:
        mycursor.execute("insert into users values(%s,%s,%s,%s,%s)",(name,username,email,passw,rpassw))
        mydb.commit()
        return render_template('pages/urlShortener.html')
    else:
        return render_template('pages/urlShortener.html')
    
    
@app.route('/urlShortener',methods=['POST','GET'])
def urlShortener():
    if request.method=='POST':
        signnup=request.form
        username = signnup['Username']
        session['username']=username
        passw = signnup['Password']
        # mycursor.execute("TRUNCATE TABLE  link")
        mycursor.execute("select * from users where Username='"+username+"' and Password='"+passw+"'")
        r=mycursor.fetchall()
        count=mycursor.rowcount
        if count ==1:
            return render_template('pages/url.html')
        else:
            return "You are not a member please <a href='/beforeRegister'>register</a>"
    else:
        return render_template('pages/url.html')
    
    
@app.route('/url',methods=['POST','GET'])
def url():
    if request.method=='POST':
        result=request.form.to_dict()
        urll = result['Url']
        x = shortener.tinyurl.short(urll)
        result['shortLink']=x
        shortLink = x
        longLink=urll
        username = session['username']
        linkCode = result['linkCode']
        mycursor.execute("insert into link values(%s,%s,%s,%s)",(longLink,shortLink,username,linkCode))
        mydb.commit()
        mycursor.close()
        return render_template('pages/urlResult.html',result=result)

@app.route('/history')
def history():
    username = session['username']
    mycursor.execute("select * from link where Username='"+username+"'")
    r=mycursor.fetchall()
    len1 = len(r)
    return render_template('pages/history.html',r=r,len1=len1,username=username)

@app.route('/beforeEditProfile')
def beforeEditProfile():
    return render_template('pages/editProfile.html')
    
@app.route('/profile')
def profile():
    username = session['username']
    mycursor.execute("select * from users where Username='"+username+"'")
    r=mycursor.fetchone()
    mydb.commit()
    mycursor.close()
    return render_template('pages/profile.html',r=r,username=username)

@app.route('/editProfile',methods=['POST','GET'])
def editProfile():
    usernamee = session['username']
    mycursor.execute("select * from users where Username='"+usernamee+"'")
    r=mycursor.fetchone()
    if request.method=='POST':
        signup=request.form
        name = signup['name']
        username = signup['username']
        email = signup['email']
        oldPassw = signup['oldPass']
        newPassw = signup['newPass']
        rpassw = signup['repass']
        if oldPassw==newPassw:
            if oldPassw == r[3]:
                mycursor.execute("UPDATE `users` SET `Name`=%s,`Username`=%s,`Email`=%s,`Password`=%s,`ConfirmPassword`=%s WHERE Username=%s",(name,username,email,newPassw,rpassw,usernamee))
                mydb.commit()
                session['username']=usernamee
                return render_template('pages/profile.html',r=r,username=username)
            else:
                return "<h1>Old Password entered is incorrect.</h1>"
        else:
            return "<h1>Passwords don't match.</h1>"
    return render_template('pages/profile.html',r=r,username=username)

@app.route('/logout', methods=['GET'])
def logout():
    return redirect(url_for('.index'))
    
if __name__ == "__main__":
    from waitress import serve
    serve(app, debug=DEBUG,host="127.0.0.1", port=5000)
         
        
