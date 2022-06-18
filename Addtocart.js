let getdatafromLS= JSON.parse(localStorage.getItem("Orderlist")) || [];
console.log(getdatafromLS);
displayUserData(getdatafromLS);
function displayUserData(getdatafromLS){
 document.querySelector("#four").innerHTML="";   
getdatafromLS.forEach(function(ele){
    let box= document.createElement("div");

    let pic=document.createElement("img");
    pic.setAttribute("src" , ele.Image);
   
    let name=document.createElement("h2");
    name.innerText=ele.name
    
    let dresstype=document.createElement("p");
    dresstype.innerText=ele.type;

    let del=document.createElement("button");
    del.innerText="X REMOVE";
    del.addEventListener("click" , function(){
        removedata(ele.name)
    })

    let dis=document.createElement("p");
    dis.innerText=ele.discount;
    dis.style.textDecoration="line-through"

    let price=document.createElement("h3");
    price.innerText=ele.price;

    box.append(pic,name,dresstype,del,dis,price,);
 
 document.querySelector("#four").append(box)
})
}

function removedata(naam){
 let deleted=getdatafromLS.filter(function(ele){
    return ele.name!==naam;
 })   
 console.log(deleted)
 getdatafromLS=deleted
 localStorage.setItem("Orderlist" , JSON.stringify(getdatafromLS));
displayUserData(getdatafromLS);
}