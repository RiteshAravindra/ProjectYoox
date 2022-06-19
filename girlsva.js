
let data=JSON.parse(localStorage.getItem("Orderlist"))||[];
let obj1=[{Image:"https://www.yoox.com/images/items/12/12772190KA_14_f.jpg?impolicy=crop&width=306&height=390",name:"OFF-WHITE KIDS",type:"T-shirt",discount:"42% OFF",price:132.00},
    {Image:"https://www.yoox.com/images/items/47/47307190BU_14_f.jpg?impolicy=crop&width=306&height=390",name:"BANANA MOON",type:"One-piece swimsuits",discount:"41% OFF",price:46.00},
    {Image:"https://www.yoox.com/images/items/15/15215382cq_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"STELLA McCARTNEY KIDS",type:"Dresses",discount:"27% OFF",price:129.00},
    {Image:"https://www.yoox.com/images/items/46/46839854qk_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"IL GUFO",type:"Hats",discount:"27% OFF",price:96.00},
    {Image:"https://www.yoox.com/images/items/47/47307181qt_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"BANANA MOON",type:"Bikinis",discount:"43% OFF",price:39.00},
    {Image:"https://www.yoox.com/images/items/12/12804747gr_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"CHIARA FERRAGNI",type:"T-shirts",discount:"56% OFF",price:55.00},
    {Image:"https://www.yoox.com/images/items/42/42832992pl_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"STELLA McCARTNEY KIDS",type:"Denim pants",discount:"34% OFF",price:79.00},
    {Image:"https://www.yoox.com/images/items/17/17283475sb_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"NEW BALANCE",type:"Sneakers",discount:"27% OFF",price:65.00},
    {Image:"https://www.yoox.com/images/items/47/47306944rs_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"MSGM",type:"One-piece swimsuits",discount:"42% OFF",price:75.00},
    {Image:"https://www.yoox.com/images/items/17/17278032wq_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"GOLDEN GOOSE DELUXE BRAND",type:"Sneakers",discount:"27% OFF",price:212.00},
    {Image:"https://www.yoox.com/images/items/47/47307187cv_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"BANANA MOON",type:"Bikinis",discount:"42% OFF",price:54.00},
    {Image:"https://www.yoox.com/images/items/14/14012345is_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"RALPH LAUREN",type:"Cardigans",discount:"32% OFF",price:104.00},
    {Image:"https://www.yoox.com/images/items/14/14229720ep_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"CHIARA FERRAGNI",type:"Sweaters",discount:"37% OFF",price:126.00},
    {Image:"https://www.yoox.com/images/items/13/13720018kc_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"CHIARA FERRAGNI",type:"Denim skirt",discount:"53% OFF",price:84.00},
    {Image:"https://www.yoox.com/images/items/54/54184849vn_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"STELLA McCARTNEY KIDS",type:"Jumpsits",discount:"42% OFF",price:152.00},
    {Image:"https://www.yoox.com/images/items/47/47307184nl_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"BANANA MOON",type:"One-piece swimsuits",discount:"55% OFF",price:79.00},
    {Image:"https://www.yoox.com/images/items/17/17279955mr_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"CROCS",type:"Sandals",discount:"27% OFF",price:61.00},
    {Image:"https://www.yoox.com/images/items/12/12804789da_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"CHIARA FERRAGNI",type:"Dresses",discount:"27% OFF",price:889.00},
    {Image:"https://www.yoox.com/images/items/47/47307783sl_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"STELLA McCARTNEY KIDS",type:"Dresses",discount:"17% OFF",price:229.00},
    {Image:"https://www.yoox.com/images/items/15/15218639dx_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"IL GUFO",type:"Dresses",discount:"27% OFF",price:199.00},
    {Image:"https://www.yoox.com/images/items/17/17283453rq_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"NEW BALANCE",type:"Dresses",discount:"29% OFF",price:79.00},
    {Image:"https://www.yoox.com/images/items/12/12822869al_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"RALPH LAUREN",type:"Dresses",discount:"37% OFF",price:189.00},
    {Image:"https://www.yoox.com/images/items/49/49767442en_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"STELLA McCARTNEY KIDS",type:"Dresses",discount:"27% OFF",price:119.00},
    {Image:"https://www.yoox.com/images/items/12/12822556bq_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"CHIARA FERRAGNI",type:"Dresses",discount:"22% OFF",price:129.00},
    {Image:"https://www.yoox.com/images/items/17/17278449ph_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"GOLDEN GOOSE DELUXE BRAND",type:"Dresses",discount:"57% OFF",price:109.00}

 ]
function display(){
   document.querySelector(".sec52").innerHTML=""
   obj1.forEach(function(el){

      let mbox=document.createElement("div")
      mbox.setAttribute("class","sec1-p2p1")
      
  
      let pic=document.createElement("img")
      pic.setAttribute("src",el.Image)
      pic.setAttribute("class","sec1-p2p1img")
      pic.style.width="200px"
      
      let hr=document.createElement("hr")
      hr.style.width="195px"
      hr.style.marginLeft="20px"
      
  
      let h3=document.createElement("h3")
      h3.innerText=el.name
      
      let h6=document.createElement("h6")
      h6.innerText=el.type;
      
      let h61=document.createElement("h6")
      h61.innerText=el.discount;
      
      let h62=document.createElement("h6")
      h62.innerText="$"+el.price;
      
      mbox.addEventListener("click",function(){
         if(addtocart(el.name)==true){
            datauser.push(el)
            localStorage.setItem("Orderlist" , JSON.stringify(datauser));
            alert("Item Added Successfully");
            window.location.href="Addtocart.html";
        }else{
            alert("Item Already Added");
            window.location.href="Addtocart.html";
        }
         
      })
      
      mbox.append(pic,hr,h3,h6,h61,h62)
      document.querySelector(".sec52").append(mbox)
  
  
  
  });
  
}
display(obj1)
console.log(display(obj1))

let datauser=JSON.parse(localStorage.getItem("Orderlist")) || []
function addtocart(naam){
for(let i=0;i<datauser.length;i++){
   if(datauser[i].name===naam){
      return false
   }
}return true
   
}

function local(el){
   data.push(el)
   localStorage.setItem("Orderlist",JSON.stringify(data))
}

function handlefilter(){
  let selected= document.querySelector("#filter").value
if(selected== "All") {
   display(obj1)
   
}
else if(selected=="HP"){
   obj1.sort(function(a,b){
     return b.price-a.price
   
   })
   display(obj1)
  
}
else if(selected=="LP") {
   obj1.sort(function(a,b){
      return a.price-b.price
       
       })
       display(obj1)
       
}
   
}
