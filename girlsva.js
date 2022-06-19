
let data=JSON.parse(localStorage.getItem("Orderlist"))||[];
let obj1=[{image:"https://www.yoox.com/images/items/12/12772190KA_14_f.jpg?impolicy=crop&width=306&height=390",Brand:"OFF-WHITE KIDS",Catagory:"T-shirt",Discount:"42% OFF",Price:132.00},
    {image:"https://www.yoox.com/images/items/47/47307190BU_14_f.jpg?impolicy=crop&width=306&height=390",Brand:"BANANA MOON",Catagory:"One-piece swimsuits",Discount:"41% OFF",Price:46.00},
    {image:"https://www.yoox.com/images/items/15/15215382cq_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"STELLA McCARTNEY KIDS",Catagory:"Dresses",Discount:"27% OFF",Price:129.00},
    {image:"https://www.yoox.com/images/items/46/46839854qk_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"IL GUFO",Catagory:"Hats",Discount:"27% OFF",Price:96.00},
    {image:"https://www.yoox.com/images/items/47/47307181qt_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"BANANA MOON",Catagory:"Bikinis",Discount:"43% OFF",Price:39.00},
    {image:"https://www.yoox.com/images/items/12/12804747gr_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"CHIARA FERRAGNI",Catagory:"T-shirts",Discount:"56% OFF",Price:55.00},
    {image:"https://www.yoox.com/images/items/42/42832992pl_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"STELLA McCARTNEY KIDS",Catagory:"Denim pants",Discount:"34% OFF",Price:79.00},
    {image:"https://www.yoox.com/images/items/17/17283475sb_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"NEW BALANCE",Catagory:"Sneakers",Discount:"27% OFF",Price:65.00},
    {image:"https://www.yoox.com/images/items/47/47306944rs_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"MSGM",Catagory:"One-piece swimsuits",Discount:"42% OFF",Price:75.00},
    {image:"https://www.yoox.com/images/items/17/17278032wq_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"GOLDEN GOOSE DELUXE BRAND",Catagory:"Sneakers",Discount:"27% OFF",Price:212.00},
    {image:"https://www.yoox.com/images/items/47/47307187cv_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"BANANA MOON",Catagory:"Bikinis",Discount:"42% OFF",Price:54.00},
    {image:"https://www.yoox.com/images/items/14/14012345is_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"RALPH LAUREN",Catagory:"Cardigans",Discount:"32% OFF",Price:104.00},
    {image:"https://www.yoox.com/images/items/14/14229720ep_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"CHIARA FERRAGNI",Catagory:"Sweaters",Discount:"37% OFF",Price:126.00},
    {image:"https://www.yoox.com/images/items/13/13720018kc_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"CHIARA FERRAGNI",Catagory:"Denim skirt",Discount:"53% OFF",Price:84.00},
    {image:"https://www.yoox.com/images/items/54/54184849vn_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"STELLA McCARTNEY KIDS",Catagory:"Jumpsits",Discount:"42% OFF",Price:152.00},
    {image:"https://www.yoox.com/images/items/47/47307184nl_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"BANANA MOON",Catagory:"One-piece swimsuits",Discount:"55% OFF",Price:79.00},
    {image:"https://www.yoox.com/images/items/17/17279955mr_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"CROCS",Catagory:"Sandals",Discount:"27% OFF",Price:61.00},
    {image:"https://www.yoox.com/images/items/12/12804789da_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"CHIARA FERRAGNI",Catagory:"Dresses",Discount:"27% OFF",Price:889.00},
    {image:"https://www.yoox.com/images/items/47/47307783sl_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"STELLA McCARTNEY KIDS",Catagory:"Dresses",Discount:"17% OFF",Price:229.00},
    {image:"https://www.yoox.com/images/items/15/15218639dx_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"IL GUFO",Catagory:"Dresses",Discount:"27% OFF",Price:199.00},
    {image:"https://www.yoox.com/images/items/17/17283453rq_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"NEW BALANCE",Catagory:"Dresses",Discount:"29% OFF",Price:79.00},
    {image:"https://www.yoox.com/images/items/12/12822869al_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"RALPH LAUREN",Catagory:"Dresses",Discount:"37% OFF",Price:189.00},
    {image:"https://www.yoox.com/images/items/49/49767442en_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"STELLA McCARTNEY KIDS",Catagory:"Dresses",Discount:"27% OFF",Price:119.00},
    {image:"https://www.yoox.com/images/items/12/12822556bq_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"CHIARA FERRAGNI",Catagory:"Dresses",Discount:"22% OFF",Price:129.00},
    {image:"https://www.yoox.com/images/items/17/17278449ph_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",Brand:"GOLDEN GOOSE DELUXE BRAND",Catagory:"Dresses",Discount:"57% OFF",Price:109.00}

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
   localStorage.setItem("Orderlist",JSON.stringify(data))
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
