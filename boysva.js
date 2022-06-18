
let data=JSON.parse(localStorage.getItem("boysvadata"))||[];
let obj1=[{image:"https://www.yoox.com/images/items/12/12826937kt_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"MARCELO BURLON",Catagory:"T-shirt",Discount:"42% OFF",Price:104.00},
    {image:"https://www.yoox.com/images/items/49/49767439xt_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"NIKE",Catagory:"B NSW TIE DYE TEE + SHORT SET",Discount:"41% OFF",Price:47.00},
    {image:"https://www.yoox.com/images/items/17/17283325hr_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"ADDIDAS ORIGINALS",Catagory:"Sneakers",Discount:"27% OFF",Price:60.00},
    {image:"https://www.yoox.com/images/items/12/12478160kd_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"RALPH LAUREN",Catagory:"Sweatshirts",Discount:"27% OFF",Price:64.00},
    {image:"https://www.yoox.com/images/items/12/12826931fa_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"BANANA MOON",Catagory:"T-shirts",Discount:"43% OFF",Price:79.00},
    {image:"https://www.yoox.com/images/items/13/13788952en_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"CHIARA FERRAGNI",Catagory:"Swim-shorts",Discount:"56% OFF",Price:55.00},
    {image:"https://www.yoox.com/images/items/17/17257460qm_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"STELLA McCARTNEY KIDS",Catagory:"Sneakers",Discount:"34% OFF",Price:271.00},
    {image:"https://www.yoox.com/images/items/16/16127583jv_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"COLMAR",Catagory:"Shell-jackets",Discount:"27% OFF",Price:189.00},
    {image:"https://www.yoox.com/images/items/13/13801793jk_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"MSGM",Catagory:"Trackpant",Discount:"42% OFF",Price:75.00},
    {image:"https://www.yoox.com/images/items/46/46840728hb_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"GOLDEN GOOSE DELUXE BRAND",Catagory:"Hats",Discount:"27% OFF",Price:212.00},
    {image:"https://www.yoox.com/images/items/12/12826885so_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"BANANA MOON",Catagory:"Sweatshirts",Discount:"42% OFF",Price:54.00},
    {image:"https://www.yoox.com/images/items/17/17283466lf_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"RALPH LAUREN",Catagory:"Shoes",Discount:"32% OFF",Price:104.00},
    {image:"https://www.yoox.com/images/items/17/17283580mw_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"CHIARA FERRAGNI",Catagory:"Shoes",Discount:"37% OFF",Price:126.00},
    {image:"https://www.yoox.com/images/items/13/13792957oc_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"CHIARA FERRAGNI",Catagory:"Swim-shorts",Discount:"53% OFF",Price:84.00},
    {image:"https://www.yoox.com/images/items/46/46842083ne_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"STELLA McCARTNEY KIDS",Catagory:"Cap",Discount:"42% OFF",Price:152.00},
    {image:"https://www.yoox.com/images/items/13/13699520pm_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"BANANA MOON",Catagory:"Pant",Discount:"55% OFF",Price:79.00},
    {image:"https://www.yoox.com/images/items/12/12827003su_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"CROCS",Catagory:"Jacket",Discount:"27% OFF",Price:61.00},
    {image:"https://www.yoox.com/images/items/13/13793797th_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"CHIARA FERRAGNI",Catagory:"Jeans",Discount:"27% OFF",Price:889.00},
    {image:"https://www.yoox.com/images/items/14/14062789nr_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"STELLA McCARTNEY KIDS",Catagory:"Sweat shirt",Discount:"17% OFF",Price:229.00},
    {image:"https://www.yoox.com/images/items/17/17277226ch_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"IL GUFO",Catagory:"Shoes",Discount:"27% OFF",Price:199.00},
    {image:"https://www.yoox.com/images/items/13/13801853wn_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"NEW BALANCE",Catagory:"Track-pant",Discount:"29% OFF",Price:79.00},
    {image:"https://www.yoox.com/images/items/16/16132388vd_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"RALPH LAUREN",Catagory:"Jacket",Discount:"37% OFF",Price:189.00},
    {image:"https://www.yoox.com/images/items/17/17279964ci_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"STELLA McCARTNEY KIDS",Catagory:"Crocs",Discount:"27% OFF",Price:119.00},
    {image:"https://www.yoox.com/images/items/49/49767441sj_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"CHIARA FERRAGNI",Catagory:"B NSW TIE DYE TEE + SHORT SET",Discount:"22% OFF",Price:129.00},
    {image:"https://www.yoox.com/images/items/14/14236983pd_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"GOLDEN GOOSE DELUXE BRAND",Catagory:"Sweatshirts",Discount:"57% OFF",Price:809.00}

 ]
function display(){
   document.querySelector(".sec52").innerHTML=""
   obj1.forEach(function(el){

      let mbox=document.createElement("div")
      mbox.setAttribute("class","sec1-p2p1")
      
  
      let pic=document.createElement("img")
      pic.setAttribute("src",el.image)
      pic.setAttribute("class","sec1-p2p1img")
      pic.style.width="200px"
      
      let hr=document.createElement("hr")
      hr.style.width="195px"
      hr.style.marginLeft="20px"
      
  
      let h3=document.createElement("h3")
      h3.innerText=el.Brand
      
      let h6=document.createElement("h6")
      h6.innerText=el.Catagory;
      
      let h61=document.createElement("h6")
      h61.innerText=el.Discount;
      
      let h62=document.createElement("h6")
      h62.innerText="$"+el.Price;
      
      mbox.addEventListener("click",function(){
         local(el)
      })
      mbox.append(pic,hr,h3,h6,h61,h62)
      document.querySelector(".sec52").append(mbox)
  
  
  
  });
  
}
display(obj1)
console.log(display(obj1))

function local(el){
   data.push(el)
   localStorage.setItem("boysvadata",JSON.stringify(data))
}

function handlefilter(){
  let selected= document.querySelector("#filter").value
if(selected== "All") {
   display(obj1)
   
}
else if(selected=="HP"){
   obj1.sort(function(a,b){
     return b.Price-a.Price
   
   })
   display(obj1)
  
}
else if(selected=="LP") {
   obj1.sort(function(a,b){
      return a.Price-b.Price
       
       })
       display(obj1)
       
}
   
}
