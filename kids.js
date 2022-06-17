let data=JSON.parse(localStorage.getItem("boyssdata"))||[];

let obj1=[{image:"https://www.yoox.com/images/items/12/12772190KA_14_f.jpg?impolicy=crop&width=306&height=390",Brand:"OFF-WHITE KIDS",Catagory:"T-shirt",Discount:"42% OFF",Price:"$ 132.00"},
{image:"https://www.yoox.com/images/items/47/47307190BU_14_f.jpg?impolicy=crop&width=306&height=390",Brand:"BANANA MOON",Catagory:"One-piece swimsuits",Discount:"41% OFF",Price:"$ 46.00"},
{image:"https://www.yoox.com/images/items/17/17276201JP_14_f.jpg?impolicy=crop&width=306&height=390",Brand:"DOLCE & GABBANA",Catagory:"Sandals",Discount:"45% OFF",Price:"$ 295.00"}]
 
function display(obj1){
    obj1.forEach(function(el){
        let mbox=document.createElement("div")
        mbox.setAttribute("class","sec1-p2p1")
        
    
        let pic=document.createElement("img")
        pic.setAttribute("src",el.image)
        pic.setAttribute("class","sec1-p2p1img")
        let h3=document.createElement("h3")
        h3.innerText=el.Brand
        let h6=document.createElement("h6")
        h6.innerText=el.Catagory;
        let h61=document.createElement("h6")
        h61.innerText=el.Discount;
        let h62=document.createElement("h6")
        h62.innerText=el.Price;
        mbox.addEventListener("click",function(){
            local(el)
         });
        mbox.append(pic,h3,h6,h61,h62)
        document.querySelector(".sec1-p2").append(mbox)
    
    });
}

display(obj1)

let obj2=[{image:"https://www.yoox.com/images/items/12/12826937KT_14_f.jpg?impolicy=crop&width=306&height=390" ,Brand:"MARCELO BURLON",Catagory:"T-shirt",Discount:"44% OFF",Price:"$ 104.00"},
{image:"https://www.yoox.com/images/items/49/49767439XT_14_f.jpg?impolicy=crop&width=306&height=390",Brand:"NIKE",Catagory:"Outfits",Price:"$ 47.00"},
{image:"https://www.yoox.com/images/items/17/17283325HR_14_f.jpg?impolicy=crop&width=306&height=390",Brand:"ADIDAS ORIGINALS",Catagory:"Sandals",Price:"$ 60.00"}]
         
obj2.forEach(function(el){
    let box=document.createElement("div")
    box.setAttribute("class","sec2-p2p1")
    

    let pic=document.createElement("img")
    pic.setAttribute("src",el.image)
    pic.setAttribute("class","sec1-p2p1img")
    let h3=document.createElement("h3")
    h3.innerText=el.Brand
    let h6=document.createElement("h6")
    h6.innerText=el.Catagory;
    let h61=document.createElement("h6")
    h61.innerText=el.Discount;
    let h62=document.createElement("h6")
    h62.innerText=el.Price;
    box.addEventListener("click",function(){
        localee(el)
    })

    box.append(pic,h3,h6,h61,h62)
   
    document.querySelector(".sec2-p2").append(box)



});


let obj3=[{image:"https://www.yoox.com/images/items/12/12826937KT_14_f.jpg?impolicy=crop&width=306&height=390" ,Brand:"MARCELO BURLON",Catagory:"T-shirt",Discount:"44% OFF",Price:"$ 104.00"},
{image:"https://www.yoox.com/images/items/47/47307190BU_14_f.jpg?impolicy=crop&width=306&height=390",Brand:"BANANA MOON",Catagory:"One-piece swimsuits",Discount:"41% OFF",Price:"$ 46.00"},
{image:"https://www.yoox.com/images/items/17/17283325HR_14_f.jpg?impolicy=crop&width=306&height=390",Brand:"ADIDAS ORIGINALS",Catagory:"Sandals",Price:"$ 60.00"}]

obj3.forEach(function(el){
    let box=document.createElement("div")
    box.setAttribute("class","sec6-p2p1")
    

    let pic=document.createElement("img")
    pic.setAttribute("src",el.image)
    pic.setAttribute("class","sec1-p2p1img")
    let h3=document.createElement("h3")
    h3.innerText=el.Brand
    let h6=document.createElement("h6")
    h6.innerText=el.Catagory;
    let h61=document.createElement("h6")
    h61.innerText=el.Discount;
    let h62=document.createElement("h6")
    h62.innerText=el.Price;

    box.append(pic,h3,h6,h61,h62)
    document.querySelector(".sec6-p2").append(box)



});


function local(el){
    data.push(el)
    localStorage.setItem("girlssdata",JSON.stringify(data))
    console.log(el)
}

function localee(el){
    data.push(el)
    localStorage.setItem("boyssdata",JSON.stringify(data))
    console.log(el)
}