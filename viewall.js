<<<<<<< HEAD
let viewdata1=[{
    Image:"https://www.yoox.com/images/yoox80/banners/6825_1_Montblanc_WM_TOPna_sx.jpg?634485886869569819",
},
{
    Image:"https://www.yoox.com/images/yoox80/banners/5351_2_8ByYoox_NewArrivals_W_TOP.jpg?634485886869569819",
}];

 let viewdata2=[{
    Image:"https://www.yoox.com/images/items/15/15115138gk_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name:"GUCCI",
    type:"Long Dresses",
    discount:"$ 13,575.0042% OFF",
    price:"$ 7,846.00",
},
{
    Image:"https://www.yoox.com/images/items/16/16129416px_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name:"BALMAIN",
    type:"Coats",
    discount:"$ 7,233.00 33% OFF",
    price:"$ 4,821.00",   
},
{
    Image:"https://www.yoox.com/images/items/54/54184322jj_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name:"TOM FORD",
    type:"Jumpsuits/one pieces",
    discount:"$ 6,552.00 39% OFF",
    price:"$ 3,977.00",
},
{
    Image:"https://www.yoox.com/images/items/45/45666440ol_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name:"MARNI",
    type:"Handbags",
    discount:"$ 4,717.00 41% OFF",
    price:"$ 2,783.00",
},
{
    Image:"https://www.yoox.com/images/items/50/50282133gp_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name:"BAUME & MERCIER RIVIERA",
    type:"Wrist watches",
    discount:"$ 00.00 0% OFF",
    price:"$ 2,537.00",
},
{
    Image:"https://www.yoox.com/images/items/15/15207884cu_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name:"VALENTINO",
    type:"Short dresses",
    discount:"$ 3,901.00 42% OFF",
    price:"$ 2,249.00",
},
{
    Image:"https://www.yoox.com/images/items/12/12806061rk_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name:"ONLY",
    type:"Tops",
    discount:"$ 00.00 0% OFF",
    price:"$ 29.00",
},
{
    Image:"https://www.yoox.com/images/items/50/50275072EL_14_f.jpg?impolicy=crop&width=387&height=490",
    name:"KURSHUNI",
    type:"Ear cuff or single earring",
    discount:"$00.00 0% OFF",
    price:"$ 32.00",
},
{
    Image:"https://www.yoox.com/images/items/15/15205699CD_14_f.jpg?impolicy=crop&width=387&height=490",
    name:"ONLY",
    type:"Short dresses",
    discount:"$ 00.00 0% OFF",
    price:"$ 35.00",
},
 
{
    Image:"https://www.yoox.com/images/items/13/13791533sm_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name:"KURSHUNI",
     type:"Jumpsuits/one pieces",
     discount:"$ 3,901.00 42% OFF",
     price:"$ 2,229.00",
 },
 {
     Image:"https://www.yoox.com/images/items/12/12811664hc_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name:"ONLY",
    type:"Fully Adore",
    discount:"$ 00.00 0% OFF",
     price:"$ 50.00",
 },
 {
     Image:"https://www.yoox.com/images/items/17/17248405sq_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
     name:"PIERRE HARDY",
    type:"Espadrilles",
    discount:"$ 883.0039% OFF",
     price:"$ 532.00",
 }
];


displayViewData1(viewdata1);
function displayViewData1(viewdata1){
viewdata1.forEach(function(ele) {
    let box=document.createElement("div");

    let pic=document.createElement("img");
    pic.setAttribute("src" , ele.Image);
 
    box.append(pic);
    document.querySelector("#ek").append(box)
});
}

displayViewData2(viewdata2);
function displayViewData2(viewdata2){
    viewdata2.forEach(function(ele){
       
let box= document.createElement("div");

 let pic=document.createElement("img");
 pic.setAttribute("src" , ele.Image);

 let name=document.createElement("h2");
 name.innerText=ele.name;
 name.addEventListener("click" , function(){
    if(addtocart(ele.name)==true){
        datauser.push(ele);
        localStorage.setItem("Orderlist" , JSON.stringify(datauser));
        alert("Item Added Successfully");
        window.location.href="file:///C:/Users/HP/Desktop/ProjectYoox/Addtocart.html";
    }else{
        alert("Item Already Added");
        window.location.href="file:///C:/Users/HP/Desktop/ProjectYoox/Addtocart.html";
    }
 })

let dresstype=document.createElement("p");
 dresstype.innerText=ele.type;

 let dis=document.createElement("p");
 dis.innerText=ele.discount;
 dis.style.textDecoration="line-through"

 let price=document.createElement("h3");
 price.innerText=ele.price;

 box.append(pic,name,dresstype,dis,price,);
 
 document.querySelector("#teen2>div").append(box)
    })
}

let datauser=JSON.parse(localStorage.getItem("Orderlist")) || [];
function addtocart(naam){
for(let i=0;i<datauser.length;i++){
    if(datauser[i].name===naam){
        return false;
    }
}return true;
=======
let viewdata1=[{
    Image:"https://www.yoox.com/images/yoox80/banners/6825_1_Montblanc_WM_TOPna_sx.jpg?634485886869569819",
},
{
    Image:"https://www.yoox.com/images/yoox80/banners/5351_2_8ByYoox_NewArrivals_W_TOP.jpg?634485886869569819",
}];

 let viewdata2=[{
    Image:"https://www.yoox.com/images/items/15/15115138gk_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name:"GUCCI",
    type:"Long Dresses",
    discount:"$ 13,575.0042% OFF",
    price: 7846.00,
},
{
    Image:"https://www.yoox.com/images/items/16/16129416px_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name:"BALMAIN",
    type:"Coats",
    discount:"$ 7,233.00 33% OFF",
    price: 4821.00 ,   
},
{
    Image:"https://www.yoox.com/images/items/54/54184322jj_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name:"TOM FORD",
    type:"Jumpsuits/one pieces",
    discount:"$ 6,552.00 39% OFF",
    price: 3977.00,
},
{
    Image:"https://www.yoox.com/images/items/45/45666440ol_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name:"MARNI",
    type:"Handbags",
    discount:"$ 4,717.00 41% OFF",
    price:2783.00,
},
{
    Image:"https://www.yoox.com/images/items/50/50282133gp_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name:"BAUME & MERCIER RIVIERA",
    type:"Wrist watches",
    discount:"$ 00.00 0% OFF",
    price:2537.00,
},
{
    Image:"https://www.yoox.com/images/items/15/15207884cu_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name:"VALENTINO",
    type:"Short dresses",
    discount:"$ 3,901.00 42% OFF",
    price: 2249.00,
},
{
    Image:"https://www.yoox.com/images/items/12/12806061rk_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name:"ONLY",
    type:"Tops",
    discount:"$ 00.00 0% OFF",
    price:29.00,
},
{
    Image:"https://www.yoox.com/images/items/50/50275072EL_14_f.jpg?impolicy=crop&width=387&height=490",
    name:"KURSHUNI",
    type:"Ear cuff or single earring",
    discount:"$00.00 0% OFF",
    price:32.00,
},
{
    Image:"https://www.yoox.com/images/items/15/15205699CD_14_f.jpg?impolicy=crop&width=387&height=490",
    name:"ONLY",
    type:"Short dresses",
    discount:"$ 00.00 0% OFF",
    price: 35.00,
},
 
{
    Image:"https://www.yoox.com/images/items/13/13791533sm_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name:"KURSHUNI",
     type:"Jumpsuits/one pieces",
     discount:"$ 3,901.00 42% OFF",
     price:2229.00,
 },
 {
     Image:"https://www.yoox.com/images/items/12/12811664hc_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name:"ONLY",
    type:"Fully Adore",
    discount:"$ 00.00 0% OFF",
     price:50.00,
 },
 {
     Image:"https://www.yoox.com/images/items/17/17248405sq_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
     name:"PIERRE HARDY",
    type:"Espadrilles",
    discount:"$ 883.0039% OFF",
     price:532.00,
 }
];


displayViewData1(viewdata1);
function displayViewData1(viewdata1){
viewdata1.forEach(function(ele) {
    let box=document.createElement("div");

    let pic=document.createElement("img");
    pic.setAttribute("src" , ele.Image);
 
    box.append(pic);
    document.querySelector("#ek").append(box)
});
}

displayViewData2(viewdata2);
function displayViewData2(viewdata2){
    document.querySelector("#teen2>div").innerHTML="";
    viewdata2.forEach(function(ele){
       
let box= document.createElement("div");

 let pic=document.createElement("img");
 pic.setAttribute("src" , ele.Image);

 let name=document.createElement("h2");
 name.innerText=ele.name;
 name.addEventListener("click" , function(){
    if(addtocart(ele.name)==true){
        datauser.push(ele);
        localStorage.setItem("Orderlist" , JSON.stringify(datauser));
        alert("Item Added Successfully");
        window.location.href="Addtocart.html";
    }else{
        alert("Item Already Added");
        window.location.href="Addtocart.html";
    }
 })

let dresstype=document.createElement("p");
 dresstype.innerText=ele.type;

 let dis=document.createElement("p");
 dis.innerText=ele.discount;
 dis.style.textDecoration="line-through"

 let price=document.createElement("h3");
 price.innerText="$"+ ele.price;

 box.append(pic,name,dresstype,dis,price,);
 
 document.querySelector("#teen2>div").append(box)
    })
}

let datauser=JSON.parse(localStorage.getItem("Orderlist")) || [];
function addtocart(naam){
for(let i=0;i<datauser.length;i++){
    if(datauser[i].name===naam){
        return false;
    }
}return true;
}


function sortarray(){
    let selected=document.querySelector("#select").value
    if(selected=="ALL"){
        displayViewData2(viewdata2);
        console.log(selected)
    }else if(selected=="HP"){
        viewdata2.sort(function(a,b){
            return b.price - a.price; 
        })
        displayViewData2(viewdata2);
        console.log(selected)
    }
    else if(selected=="LP"){
        viewdata2.sort(function(a,b){
            return a.price - b.price; 
        })
        displayViewData2(viewdata2);
        console.log(selected)
}
>>>>>>> 038300553b0224b8f599378f94a857182e7380d0
}