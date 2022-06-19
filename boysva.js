
let data=JSON.parse(localStorage.getItem("Orderlist"))||[];
let obj1=[{Image:"https://www.yoox.com/images/items/12/12826937kt_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"MARCELO BURLON",type:"T-shirt",discount:"42% OFF",price:104.00},
    {Image:"https://www.yoox.com/images/items/49/49767439xt_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"NIKE",type:"B NSW TIE DYE TEE + SHORT SET",discount:"41% OFF",price:47.00},
    {Image:"https://www.yoox.com/images/items/17/17283325hr_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"ADDIDAS ORIGINALS",type:"Sneakers",discount:"27% OFF",price:60.00},
    {Image:"https://www.yoox.com/images/items/12/12478160kd_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"RALPH LAUREN",type:"Sweatshirts",discount:"27% OFF",price:64.00},
    {Image:"https://www.yoox.com/images/items/12/12826931fa_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"BANANA MOON",type:"T-shirts",discount:"43% OFF",price:79.00},
    {Image:"https://www.yoox.com/images/items/13/13788952en_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"CHIARA FERRAGNI",type:"Swim-shorts",discount:"56% OFF",price:55.00},
    {Image:"https://www.yoox.com/images/items/17/17257460qm_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"STELLA McCARTNEY KIDS",type:"Sneakers",discount:"34% OFF",price:271.00},
    {Image:"https://www.yoox.com/images/items/16/16127583jv_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"COLMAR",type:"Shell-jackets",discount:"27% OFF",price:189.00},
    {Image:"https://www.yoox.com/images/items/13/13801793jk_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"MSGM",type:"Trackpant",discount:"42% OFF",price:75.00},
    {Image:"https://www.yoox.com/images/items/46/46840728hb_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"GOLDEN GOOSE DELUXE BRAND",type:"Hats",discount:"27% OFF",price:212.00},
    {Image:"https://www.yoox.com/images/items/12/12826885so_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"BANANA MOON",type:"Sweatshirts",discount:"42% OFF",price:54.00},
    {Image:"https://www.yoox.com/images/items/17/17283466lf_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"RALPH LAUREN",type:"Shoes",discount:"32% OFF",price:104.00},
    {Image:"https://www.yoox.com/images/items/17/17283580mw_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"CHIARA FERRAGNI",type:"Shoes",discount:"37% OFF",price:126.00},
    {Image:"https://www.yoox.com/images/items/13/13792957oc_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"CHIARA FERRAGNI",type:"Swim-shorts",discount:"53% OFF",price:84.00},
    {Image:"https://www.yoox.com/images/items/46/46842083ne_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"STELLA McCARTNEY KIDS",type:"Cap",discount:"42% OFF",price:152.00},
    {Image:"https://www.yoox.com/images/items/13/13699520pm_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"BANANA MOON",type:"Pant",discount:"55% OFF",price:79.00},
    {Image:"https://www.yoox.com/images/items/12/12827003su_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"CROCS",type:"Jacket",discount:"27% OFF",price:61.00},
    {Image:"https://www.yoox.com/images/items/13/13793797th_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"CHIARA FERRAGNI",type:"Jeans",discount:"27% OFF",price:889.00},
    {Image:"https://www.yoox.com/images/items/14/14062789nr_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"STELLA McCARTNEY KIDS",type:"Sweat shirt",discount:"17% OFF",price:229.00},
    {Image:"https://www.yoox.com/images/items/17/17277226ch_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"IL GUFO",type:"Shoes",discount:"27% OFF",price:199.00},
    {Image:"https://www.yoox.com/images/items/13/13801853wn_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"NEW BALANCE",type:"Track-pant",discount:"29% OFF",price:79.00},
    {Image:"https://www.yoox.com/images/items/16/16132388vd_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"RALPH LAUREN",type:"Jacket",discount:"37% OFF",price:189.00},
    {Image:"https://www.yoox.com/images/items/17/17279964ci_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"STELLA McCARTNEY KIDS",type:"Crocs",discount:"27% OFF",price:119.00},
    {Image:"https://www.yoox.com/images/items/49/49767441sj_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"CHIARA FERRAGNI",type:"B NSW TIE DYE TEE + SHORT SET",discount:"22% OFF",price:129.00},
    {Image:"https://www.yoox.com/images/items/14/14236983pd_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",name:"GOLDEN GOOSE DELUXE BRAND",type:"Sweatshirts",discount:"57% OFF",price:809.00}

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
