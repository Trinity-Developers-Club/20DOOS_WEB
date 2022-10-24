#include <iostream>
#include <conio.h>
#include <stdio.h>
#include <string>
#include <iomanip>
using namespace std;
class Bill
{
    int bill_id, book_id;
    float Qty;
    char Bname[25];
    float SP;
    float Amount;
    float Discount;
    char Customer_Name[25];

public:
    void Set_Data(int i, int j, float q1, float sp, float amnt, char &Cname, char &name)
    {
        bill_id = i;
        book_id = j;
        Qty = q1;
        strcpy(Bname, &name);
        SP = sp;
        strcpy(Customer_Name, &Cname);
        Amount = amnt;
    }
    int getid()
    {
        return bill_id;
    }
    void Read_Bill_Data()
    {
        cout << "\n\t\t * ENTER DETAILS OF THE BILL * ";
        cout << endl;
        cout << "\n Enter the bill id : ";
        cin >> bill_id;
        cout << " Enter the book id : ";
        cin >> book_id;
        cout << " Enter the book name : ";
        gets(Bname);
        cout << " Enter the Quantity : ";
        cin >> Qty;
        cout << " Enter the Selling Price : ";
        cin >> SP;
        Amount = Qty * SP;
        cout << " Enter the Customer Name : ";
        gets(Customer_Name);
    }
    void Display_Bill_Data()
    {
        cout << "\n"
             << bill_id;
        cout << setw(12) << book_id;
        cout << setw(12) << Bname;
        cout << setw(10) << Qty;
        cout << setw(12) << SP;
        cout << setw(14) << Amount;
        cout << setw(12) << Customer_Name;
    }
};
void Display_Bill()
{
    clrscr();
    Bill b;
    ifstream f("Bill.DAT", ios::binary | ios::app);
    cout << "\n\n\n\t\t * DETAILS OF THE BILL * ";
    cout << "\n\n";
    cout << "Bill id" << setw(10) << "Book id" << setw(12) << "Book 
        name "<<setw(12)<<" Quantity "<<setw(16)<<" Selling Price "<<setw(8)<<" Amount "<<setw(14)<<" Customer Name ";
        while (!f.eof() && f.read((char *)&b, sizeof(b)))
    {
        b.Display_Bill_Data();
    }
    f.close();
    getch();
}
void Modify_Bill(int bid)
{
    clrscr();
    Bill b;
    ifstream f("Bill.DAT", ios::binary);
    ofstream f1("Temp.DAT", ios::binary);
    cout << "\n\n\n\t\t * DETAILS OF THE BILL TO BE MODIFIED * ";
    cout << "\n\n";
    cout << "Bill id" << setw(10) << "Book id" << setw(12) << "Book 
        name "<<setw(12)<<" Quantity "<<setw(16)<<" Selling Price "<<setw(8)<<" Amount "<<setw(14)<<" Customer Name ";
        while (!f.eof() && f.read((char *)&b, sizeof(b)))
    {
        if (b.getid() == bid)
        {
            b.Display_Bill_Data();
            cout << "\n\n Enter the details to be updated==> ";
            cout << "\n";
            b.Read_Bill_Data();
            cout << "\n These details will be updated! ";
            f1.write((char *)&b, sizeof(b));
        }
        else
            f1.write((char *)&b, sizeof(b));
    }
    f.close();
    f1.close();
    remove("Bill.DAT");
    rename("Temp.DAT", "Bill.DAT");
    getch();
}
void Delete_Bill(int Bid)
{
    clrscr();
    Bill b;
    ifstream f("Bill.DAT", ios::binary);
    ofstream f1("Temp.DAT", ios::binary);
    cout << "\n\n\n\t\t * DETAILS OF THE BILL * ";
    cout << "\n\n";
    cout << "Bill id" << setw(10) << "Book id" << setw(12) << "Book 
        name "<<setw(12)<<" Quantity "<<setw(16)<<" Selling Price "<<setw(8)<<" Amount "<<setw(14)<<" Customer Name ";
        while (!f.eof() && f.read((char *)&b, sizeof(b)))
    {
        if (b.getid() == Bid)
        {
            b.Display_Bill_Data();
            cout << "\n\n These details are to be deleted! ";
        }
        else
            f1.write((char *)&b, sizeof(b));
    }
    f.close();
    f1.close();
    remove("Bill.DAT");
    rename("Temp.DAT", "Bill.DAT");
    getch();
}
class Book
{
    int Book_id;
    char Book_Name[15];
    char Author_Name[20];
    char Book_Genre[10];
    float Quantity;
    float Selling_Price;
    float Book_Price;

public:
    int getid()
    {
        return Book_id;
    }
    int Book_qty()
    {
        return Quantity;
    }
    void Sell(int p)
    {
        Quantity = Quantity - p;
    }
    void Purchase(int q)
    {
        Quantity = Quantity + q;
    }
    char *get_title()
    {
        return Book_Name;
    }
    void DisplayData()
    {
        cout << "\n"
             << Book_id;
        cout << setw(16) << Book_Name;
        cout << setw(14) << Author_Name;
        cout << setw(16) << Book_Genre;
        cout << setw(12) << Quantity;
        cout << setw(14) << Book_Price;
    }
    void ReadData()
    {
        cout << "\n\t\t * ENTER DETAILS OF THE BOOK * ";
        cout << "\n\n";
        cout << " Enter Book Id : ";
        cin >> Book_id;
        cout << " Enter Book Name : ";
        gets(Book_Name);
        cout << " Enter Book Genre : ";
        gets(Book_Genre);
        cout << " Enter Author Name : ";
        gets(Author_Name);
        cout << " Enter Quantity : ";
        cin >> Quantity;
        cout << " Enter Book Price : ";
        cin >> Book_Price;
    }
    void MenuDetails()
    {
        cout << "\t\t\t********** ";
        cout << "\n\t\t\t GOODREADS BOOKSHOP ";
        cout << "\n\t\t\t********** " << endl;
        cout << "\n\t\t\t---------------------- ";
        cout << "\n\t\t\t BOOK OPTIONS: " << endl;
        cout << "\t\t\t----------------------";
        cout << "\n\t\t\t 1.ADD" << endl;
        cout << "\t\t\t 2.MODIFY" << endl;
        cout << "\t\t\t 3.DELETE" << endl;
        cout << "\t\t\t 4.DISPLAY" << endl;
        cout << "\t\t\t 5.SELL" << endl;
        cout << "\t\t\t 6.PURCHASE" << endl;
        cout << "\t\t\t----------------------- ";
        cout << "\n\t\t\t BILL OPTIONS: " << endl;
        cout << "\t\t\t----------------------- ";
        cout << "\n\t\t\t 7.DISPLAY " << endl;
        cout << "\t\t\t 8.MODIFY " << endl;
        cout << "\t\t\t 9.DELETE " << endl;
        cout << "\t\t\t10.EXIT" << endl;
    }
    void DiscountDetails()
    {
        cout << "\n**********";
        cout << "\n DISCOUNT COUPONS OPTIONS ";
        cout << "\n**********";
        cout << "\n\t1. 10% OFF";
        cout << "\n\t2. 20% OFF";
        cout << "\n\t3. 30% OFF";
    }
};
void Display()
{
    clrscr();
    Book B;
    ifstream fin("Book.DAT", ios::binary);
    cout << "\n\n\n\t\t * DETAILS OF THE BOOK * ";
    cout << "\n\n";
    cout << "Book id" << setw(12) << "Book name" << setw(16) << "Author name" << setw(16) << "Book 
        genre "<<setw(14)<<" Quantity "<<setw(14)<<" Book price ";
        while (!fin.eof() && fin.read((char *)&B, sizeof(B)))
    {
        B.DisplayData();
    }
    fin.close();
    getch();
}
void Add()
{
    clrscr();
    Book B;
    char ch = 'y', c;
    ofstream fout("Book.DAT", ios::binary | ios::app);
    do
    {
        clrscr();
        B.ReadData();
        fout.write((char *)&B, sizeof(B));
        cout << "Do you want to continue..??(y/n) ";
        cin >> ch;
    } while (ch == 'Y' || ch == 'y');
    fout.close();
}
void Modify(int Bid)
{
    clrscr();
    Book B;
    ifstream fin("Book.DAT", ios::binary);
    ofstream fout("Temp.DAT", ios::binary);
    cout << "\n\n\n\t\t * DETAILS OF THE BOOK TO BE MODIFIED * ";
    cout << "\n\n";
    cout << "Book id" << setw(14) << "Book name" << setw(14) << "Author name" << setw(16) << "Book 
        genre "<<setw(14)<<" Quantity "<<setw(14)<<" Book price ";
        while (!fin.eof() && fin.read((char *)&B, sizeof(B)))
    {
        if (B.getid() == Bid)
        {
            B.DisplayData();
            cout << "\n\n Enter the details to be updated==> ";
            cout << "\n";
            B.ReadData();
            cout << "\n These details will be updated! ";
            fout.write((char *)&B, sizeof(B));
        }
        else
            fout.write((char *)&B, sizeof(B));
    }
    fin.close();
    fout.close();
    remove("Book.DAT");
    rename("Temp.DAT", "Book.DAT");
    getch();
}
void Delete(int Bid)
{
    clrscr();
    Book B;
    ifstream fin("Book.DAT", ios::binary);
    ofstream fout("Temp.DAT", ios::binary);
    cout << "\n\n\n\t\t * DETAILS OF THE BOOK * ";
    cout << "\n\n";
    cout << "Book id" << setw(14) << "Book name" << setw(14) << "Author name" << setw(16) << "Book 
        genre "<<setw(14)<<" Quantity "<<setw(14)<<" Book price ";
        while (!fin.eof() && fin.read((char *)&B, sizeof(B)))
    {
        if (B.getid() == Bid)
        {
            B.DisplayData();
            cout << "\n\n These details are to be deleted! ";
        }
        else
            fout.write((char *)&B, sizeof(B));
    }
    fin.close();
    fout.close();
    remove("Book.DAT");
    rename("Temp.DAT", "Book.DAT");
    getch();
}
void sellBook(int Bid)
{
    clrscr();
    Book B;
    Bill b;
    float a, qty1, c, d, e, bid;
    char Cust_Name[25];
    int o, bno;
    char *bname;
    bname = B.get_title();
    ifstream fin("Book.DAT", ios::binary | ios::app);
    ofstream fout("Temp.DAT", ios::binary | ios::app);
    ofstream f("Bill.DAT", ios::binary | ios::app);
    while (!fin.eof() && fin.read((char *)&B, sizeof(B)))
    {
        if (B.getid() == Bid)
        {
            cout << "\n\n\n\t\t** DETAILS OF THE BOOK TO BE SOLD ** ";
            cout << "\n\n";
            cout << "Book id" << setw(14) << "Book name" << setw(14) << "Author name" << setw(16) << "Book 
                                                                                                     genre "<<setw(14)<<" Quantity "<<setw(14)<<" Book price ";
                                                                                                     B.DisplayData();
            qty1 = B.Book_qty();
            cout << "\n\n Available Quantity that can be sold : " << qty1;
            cout << "\n Enter the Selling Price of the Book : ";
            cin >> c;
            cout << " Enter the Customer Name : ";
            gets(Cust_Name);
            cout << " Enter the Quantity to be Sold : ";
            cin >> a;
            cout << " Enter the Bill ID : ";
            cin >> bid;
            if (qty1 >= a)
            {
                qty1 = qty1 - a;
                cout << "\n Does the buyer has a discount coupon? (0 for NO and 1 for YES) : ";
                cin >> d;
                if (d == 1)
                {
                    B.DiscountDetails();
                    cout << "\n Enter your option: ";
                    cin >> o;
                    switch (o)
                    {
                    case 1:
                        c = c - (10 * c) / 100;
                        break;
                    case 2:
                        c = c - (20 * c) / 100;
                        break;
                    case 3:
                        c = c - (30 * c) / 100;
                        break;
                    default:
                        cout << "\n Wrong option! ";
                    };
                    if (o == 1 || o == 2 || o == 3)
                    {
                        cout << "\n Discount coupon selected! ";
                    }
                    cout << "Proceed further to billing. ";
                    getch();
                }
                clrscr();
                cout << "\n\n\n***********";
                cout << "\n STOCK INFORMATION ";
                cout << "\n***********";
                cout << "\n Books Left: " << qty1;
                cout << "\n Book Sucessfully Sold! ";
                cout << "\n\n";
                cout << "\n***********";
                cout << "\n INVOICE ";
                cout << "\n***********";
                cout << "\n Quantity Sold : " << a;
                cout << "\n Selling Price per quantity : " << c;
                e = a * c;
                cout << "\n Total Amount : " << e;
                B.Sell(a);
                int id = B.getid();
                b.Set_Data(bid, id, a, c, e, *Cust_Name, *bname);
                cout << "\n\n";
                f.write((char *)&b, sizeof(b));
                getch();
            }
            else
            {
                cout << "\n Total Quantity: " << qty1 << "\n Not Enough Available! ";
            }
            fout.write((char *)&B, sizeof(B));
        }
        else
        {
            fout.write((char *)&B, sizeof(B));
        }
    }
    fin.close();
    fout.close();
    f.close();
    remove("Book.DAT");
    rename("Temp.DAT", "Book.DAT");
    getch();
}
void purchaseBook(int Bid)
{
    clrscr();
    Book B;
    float b, qty1, d;
    ifstream fin("Book.DAT", ios::binary);
    ofstream fout("Temp.DAT", ios::binary);
    while (!fin.eof() && fin.read((char *)&B, sizeof(B)))
    {
        if (B.getid() == Bid)
        {
            cout << "\n\n\n\t\t * DETAILS OF THE BOOK TO BE PURCHASED * ";
            cout << "\n\n";
            cout << "Book id" << setw(14) << "Book name" << setw(14) << "Author name" << setw(16) << "Book 
                                                                                                     genre "<<setw(14)<<" Quantity "<<setw(14)<<" Book price ";
                                                                                                     B.DisplayData();
            qty1 = B.Book_qty();
            cout << "\n\nEnter the quantity of the book to be purchased : ";
            cin >> b;
            cout << "Enter the purchasing price of the book : ";
            cin >> d;
            cout << "\n";
            cout << "\n***********";
            cout << "\n STOCK INFORMATION ";
            cout << "\n***********";
            cout << "\n Total Books : " << qty1 + b;
            cout << "\n Book Sucessfully Purchased! ";
            cout << "\n\n************";
            cout << "\n PURCHASE BILL";
            cout << "\n************";
            cout << "\n Quantity Purchased : " << b;
            cout << "\n Cost per quantity : " << d;
            cout << "\n Total Amount : " << b * d;
            B.Purchase(b);
            fout.write((char *)&B, sizeof(B));
        }
        else
        {
            fout.write((char *)&B, sizeof(B));
        }
    }
    fin.close();
    fout.close();
    remove("Book.DAT");
    rename("Temp.DAT", "Book.DAT");
    getch();
}
void main()
{
    Book B;
    Bill b;
    int opt;
    do
    {
        clrscr();
        int eid;
        B.MenuDetails();
        cout << "\n\t\t\tEnter the option: ";
        cin >> opt;
        switch (opt)
        {
        case 1:
            Add();
            break;
        case 2:
            cout << "\n Enter the ID of the book whose details are to be updated: ";
            cin >> eid;
            Modify(eid);
            break;
        case 3:
            cout << "\n Enter the ID of the book whose details are to be deleted: ";
            cin >> eid;
            Delete(eid);
            break;
        case 4:
            Display();
            break;
        case 5:
            cout << "\n Enter ID of the book which is to be sold: ";
            cin >> eid;
            sellBook(eid);
            break;
        case 6:
            cout << "\n Enter ID of the book which is to be purchased: ";
            cin >> eid;
            purchaseBook(eid);
            break;
        case 7:
            Display_Bill();
            getch();
            break;
        case 8:
            cout << "\n Enter ID of the Bill whose details are to be updated: ";
            cin >> eid;
            Modify_Bill(eid);
            break;
        case 9:
            cout << "\n Enter ID of the Bill whose details are to be deleted: ";
            cin >> eid;
            Delete_Bill(eid);
            break;
        case 10:
            cout << "\n Thank you! \n Exiting...";
            break;
        default:
            cout << "\n Wrong option! ";
            getch();
        };
    } while (opt != 10);
    getch();
}