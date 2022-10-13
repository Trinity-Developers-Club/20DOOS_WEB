
const getImages=document.querySelector("form button")
const nasaImages=document.querySelector("#nasa-images")
var date = $("#datepicker").datepicker({ dateFormat: 'yy-mm-dd' });
getImages.addEventListener("click",(e)=>{
    e.preventDefault();
    if(date.val()=="")
    return alert("Please enter a date")
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + date.val() + "&api_key=NBlCLhD21Eud5RxMy1TjZoeJedDa1c1qbsnLMIG2")
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        if(data.photos.length==0)
        return alert("No photos available for this date")
        console.log(data)
data.photos.forEach(element => {
    var img=document.createElement("img")
    console.log(element.img_src)
    img.src=element.img_src;
    img.id=element.id
    img.alt=""
    nasaImages.appendChild(img);
    // console.log(element.id)
});
    })
    // console.log(date.val())
})
.catch()

