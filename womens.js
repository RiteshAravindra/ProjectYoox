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

        let tag= document.createElement("p");
        tag.innerText=ele.tagline;

        let shop=document.createElement("h2");
        shop.innerText=ele.shop;

        box1.append(pic,name,tag,shop);
        document.querySelector("#second").append(box1);
    })
   }

   displaydata3(data3);
   function displaydata3(data3){
    data3.forEach(function(ele){
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

      box.append(pic,name,dress,disc,price);
      document.querySelector("#third").append(box)
    })
   }