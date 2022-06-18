

let data1= [{
    Image_url: "https://www.yoox.com/images/yoox80/banners/6824_1_Trendvacation_WM_Main.jpg?634485886869569819&impolicy=cropDefault&width=960&height=510",
}];

let data2=[{
    Image_url: "https://www.yoox.com/images/yoox80/banners/6824_5_FocusOnAccessories_W_HL.jpg?634485886869569819#width=430&height=600",
    name: "BEAT THE HEAT",
    tagline: "Stay cool with these accessories",
    shop: "SHOP NOW"
},

{Image_url:"https://www.yoox.com/images/yoox80/banners/5628_1_Multiform_HL.gif?634485886869569819#width=430&height=600",
name: "THE MULTI FORM* ARTISTS",
tagline: "Discover the exclusive designs",
shop: "SHOP NOW",},];

let data3=[{
    imageurl:"https://www.yoox.com/images/items/12/12793777DM_14_f.jpg?impolicy=crop&width=306&height=390",
    name:"SEE BY CHLOÉ",
    dresstype:"T-shirt",
    discount:"$ 00.00 0% OFF",
    price:"$ 375.00",
},
{imageurl:"https://www.yoox.com/images/items/13/13792883EJ_14_f.jpg?impolicy=crop&width=306&height=390",
name:"MISSONI",
dresstype:"Maxi Skirts",
discount:"$ 1,394.00 42% OFF",
price:"$ 796.00",
},
{
imageurl:"https://www.yoox.com/images/items/15/15212139WS_14_f.jpg?impolicy=crop&width=306&height=390",
name:"CHLOÉ",
dresstype:"Midi dresses",
discount:"$ 3,066.00 39% OFF",
price:"$ 1,861.00",
},
// {
//     imageurl:"https://www.yoox.com/images/items/17/17263907PT_14_f.jpg?impolicy=crop&width=306&height=390",
//     name:"MARNI",
//     dresstype:"Mules and clogs",
//     discount:"$ 780.00 33% OFF",
//     price:"$ 518.00",
// },
// {
//     imageurl:"https://www.yoox.com/images/items/15/15213058TM_14_f.jpg?impolicy=crop&width=306&height=390",
//     name:"VALENTINO",
//     dresstype:"Short dresses",
//     discount:"$ 3,550.00 42% OFF",
//     price:"$ 2,047.00",
// },
// {
//     imageurl:"https://www.yoox.com/images/items/45/45667221PI_14_f.jpg?impolicy=crop&width=306&height=390",
//     name:"DOLCE & GABBANA",
//     dresstype:"Handbags",
//     discount:"$ 2,563.00 42% OFF",
//     price:"$ 1,473.00",
// }
]

let data4=[{
image_url:"https://www.yoox.com/images/yoox80/banners/6825_1_Vans_Tris_WM.jpg?634485886869569819#width=387&height=540",
name:"VANS",
tag:"Iconic models and details",
},
{
image_url:"https://www.yoox.com/images/yoox80/banners/6825_5_Montblanc_W_Tris.jpg?634485886869569819#width=473&height=660",
name:"MONTBLANC",
tag:"Father's day find the perfect present",    
},
{
image_url:"https://www.yoox.com/images/yoox80/banners/6825_1_Artifact_Tris.jpg?634485886869569819#width=473&height=660",
name:"ARTIFACT BY SUPERGA",
tag:"The value of craftmanship",    
},]

let data5=[{
    imageurl:"https://www.yoox.com/images/items/12/12779290QW_14_f.jpg?impolicy=crop&width=306&height=390",
    name:"SELF-PORTRAIT",
dresstype:"Tops",
discount:"$ 690.0050% OFF",
price:"$ 342.00",
},
{
    imageurl:"https://www.yoox.com/images/items/15/15204227CD_14_f.jpg?impolicy=crop&width=306&height=390",
    name:"VERSACE",
dresstype:"Short dresses",
discount:"$ 2,906.0058% OFF",
price:"$ 1,200.00",   
},
{
    imageurl:"https://www.yoox.com/images/items/13/13780367GR_14_f.jpg?impolicy=crop&width=306&height=390",
    name:"PAUL & JOE",
dresstype:"Midi skirts",
discount:"$ 316.0048% OFF",
price:"$ 163.00",    
}]

let data6=[{
    imageurl:"https://www.yoox.com/images/yoox80/banners/6833_5_8byoox_SS22_Special.jpg?634485886869569819#width=930&height=660",
    }]

let data7=[{
    imageurl:"https://www.yoox.com/images/items/15/15204227CD_14_f.jpg?impolicy=crop&width=306&height=390",
    name:"VERSACE",
dresstype:"Short dresses",
discount:"$ 2,906.0058% OFF",
price:"$ 1,200.00", 
},
{
    imageurl:"https://www.yoox.com/images/items/12/12779290QW_14_f.jpg?impolicy=crop&width=306&height=390",
    name:"SELF-PORTRAIT",
dresstype:"Tops",
discount:"$ 690.0050% OFF",
price:"$ 342.00",   
},
{
    imageurl:"https://www.yoox.com/images/items/13/13780367GR_14_f.jpg?impolicy=crop&width=306&height=390",
    name:"PAUL & JOE",
dresstype:"Midi skirts",
discount:"$ 316.0048% OFF",
price:"$ 163.00",    
}]

//  let data8=[{
// image:"https://www.yoox.com/images/yoox80/banners/5460_1_Living_Bottom_WM.jpg?634485886869569819#width=690&height=637",
//  }];


displaydata1(data1);
function displaydata1(data1){
    data1.forEach(function(ele){
        let pic=document.createElement("img");
        pic.setAttribute("src" ,ele.Image_url)
       
        document.querySelector("#first").append(pic);
    })
    
   }

   displaydata2(data2);
   function displaydata2(data2){
    data2.forEach(function(ele){
        let box1=document.createElement("div");
        

        let pic= document.createElement("img");
        pic.setAttribute("src" , ele.Image_url)

        let name= document.createElement("h1");
        name.innerText=ele.name;

         name.addEventListener("click" , function(){
            if(addcart1(ele.name)==true){
              cart.push(ele)
              localStorage.setItem("UserCart" , JSON.stringify(cart))
            alert("Item Added Successfully");
          }  else{
              alert("Item Already Added")
          }
          })

        let tag= document.createElement("p");
        tag.innerText=ele.tagline;

        let shop=document.createElement("h2");
        shop.innerText=ele.shop;

        box1.append(pic,name,tag,shop);
        document.querySelector("#second").append(box1);
    })
   }
   let cart=JSON.parse(localStorage.getItem("UserCart")) || [];
   function addcart1(naam){
  for(let i=0;i<cart.length;i++){
    if(cart[i].name===naam){
        return false;
    }
  }return true;
}
   

   
   displaydata3(data3);
   function displaydata3(data3){
    data3.forEach(function(ele){
      let box=document.createElement("div");
 
      let pic=document.createElement("img");
      pic.setAttribute("src" , ele.imageurl);

      let name=document.createElement("h2");
      name.innerText=ele.name;

      name.addEventListener("click" , function(){
        if(addcart2(ele.name)==true){
          cart1.push(ele)
          localStorage.setItem("UserCart1" , JSON.stringify(cart1))
        alert("Item Added Successfully");
      }  else{
          alert("Item Already Added")
      }
      })

      let dress=document.createElement("p");
      dress.innerText=ele.dresstype;

      let disc=document.createElement("p");
      disc.innerText=ele.discount;
      disc.style.textDecoration="line-through"

      let price=document.createElement("h3");
      price.innerText=ele.price;
      document.querySelectorAll("button")
      
      box.append(pic,name,dress,disc,price);
      document.querySelector("#third").append(box)
    })
    
   }

   let cart1=JSON.parse(localStorage.getItem("UserCart1")) || [];
   function addcart2(naam){
  for(let i=0;i<cart1.length;i++){
    if(cart1[i].name===naam){
        return false;
    }
  }return true;
}

   displaydata4(data4);
   function displaydata4(data4){
    data4.forEach(function(ele){
    let box=document.createElement("div");

    let pic=document.createElement("img");
    pic.setAttribute("src" , ele.image_url);

    let name=document.createElement("h1");
    name.innerText=ele.name;

    let tagline=document.createElement("p");
    tagline.innerText=ele.tag;

    box.append(pic,name,tagline);
    document.querySelector("#fourth").append(box);
    })
   }

   displaydata5(data5);
   function displaydata5(data5){
    data5.forEach(function(ele){
        let box=document.createElement("div");
 
      

        let pic=document.createElement("img");
        pic.setAttribute("src" , ele.imageurl);
  
        let name=document.createElement("h2");
        name.innerText=ele.name;
  
        let dress=document.createElement("p");
        dress.innerText=ele.dresstype;
  
        let disc=document.createElement("p");
        disc.innerText=ele.discount;
        disc.style.textDecoration="line-through"
  
        let price=document.createElement("h3");
        price.innerText=ele.price;
        document.querySelectorAll("button")
        
        box.append(pic,name,dress,disc,price);
        document.querySelector("#fifth").append(box)  
    })
   }

   displaydata6(data6);
   function displaydata6(data6){
    data6.forEach(function(ele){
        let pic=document.createElement("img");
        pic.setAttribute("src" , ele.imageurl)
        document.querySelector("#seven").append(pic);
    })
   }

   displaydata(data7);
   function displaydata(data7){
    data7.forEach(function(ele){
        let box=document.createElement("div");
 
      

        let pic=document.createElement("img");
        pic.setAttribute("src" , ele.imageurl);
  
        let name=document.createElement("h2");
        name.innerText=ele.name;
  
        let dress=document.createElement("p");
        dress.innerText=ele.dresstype;
  
        let disc=document.createElement("p");
        disc.innerText=ele.discount;
        disc.style.textDecoration="line-through"
  
        let price=document.createElement("h3");
        price.innerText=ele.price;
        document.querySelectorAll("button")
        
        box.append(pic,name,dress,disc,price);
        document.querySelector("#eight").append(box)  
    })
   }

//   displaydata(data8);
//     function displaydata(data8) {
//     data8.forEach(function(ele){
//      let pic=document.createElement("img");
//     pic.setAttribute("src" , ele.image);
//     document.querySelector("#ninth").append(pic)    
//     })    
//     }
