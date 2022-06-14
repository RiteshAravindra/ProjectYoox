let data1= [{
    Image_url: "https://www.yoox.com/images/yoox80/banners/6824_1_Trendvacation_WM_Main.jpg?634485886869569819&impolicy=cropDefault&width=960&height=510",
}]

let data2=[{
    Image_url: "https://www.yoox.com/images/yoox80/banners/6824_5_FocusOnAccessories_W_HL.jpg?634485886869569819#width=430&height=600",
    name: "BEAT THE HEAT",
    tagline: "Stay cool with these accessories",
    shop: "SHOP NOW"
},
// {name: "DESIGNERS",
// designername: "DOLCE & GABBANA",
// designername: "ROBERTO CAVALLI",
// designername: "STELLA MCCARTNEY",
// designername: "MARNI",
// designername: "MAISON MARGIELA",
// designername: "VERSACE",
// designername: "CHLOÉ",
// designername: "BALENCIAGA",
// designername: "GUCCI",
// designername: "MIU MIU"
// },
{Image_url:"https://www.yoox.com/images/yoox80/banners/5628_1_Multiform_HL.gif?634485886869569819#width=430&height=600",
name: "THE MULTI FORM* ARTISTS",
tagline: "Discover the exclusive designs",
shop: "SHOP NOW",},];

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