let getdatafromLS= JSON.parse(localStorage.getItem("Orderlist")) || [];
console.log(getdatafromLS);
displayUserData(getdatafromLS);

function displayUserData(getdatafromLS){
    let total1=0
   
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
    let price=document.createElement("h3");
    price.setAttribute('id','price1')
    price.innerText=ele.price
    total1=total1+ele.price
    let total=document.querySelectorAll('.fourteen>h3')
total[0].innerText=total1
total[1].innerText=total1

    // cart  funtction

    let qun=document.createElement('h5')
    qun.innerText=1
    let btn1=document.createElement('button')
    btn1.setAttribute('class',"qtn_btn")
    btn1.innerText="-"
    let counter2=1
    btn1.addEventListener('click', function(){
        counter2--
        if(counter2==0){
            counter2=1
        }
qun.innerText=counter2
price.innerText=Number(ele.price)*counter2
let sum1=Number(ele.price)*counter2
total3=0+sum1
total[0].innerText=total3
total[1].innerText=total3
    })
    let total2=0
    let btn2=document.createElement('button')
    btn2.setAttribute('class',"qtn_btn")
    btn2.innerText="+"
    btn2.addEventListener('click', function(){
         counter2++
        qun.innerText=counter2
        price.innerText=Number(ele.price)*counter2
        let sum2=Number(ele.price)*counter2
        total2=0+sum2
        total[0].innerText=total2
        total[1].innerText=total2
        console.log(total2)
   })        

    box.append(pic,name,dresstype,del,btn1,qun,btn2,price);
 
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



