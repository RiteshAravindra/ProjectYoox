// top banner part
let topImage=document.createElement('img')
topImage.src="https://www.yoox.com/images/yoox80/banners/6895_1_Pride_Main_WM.jpg?634485886601286852#width=1380&height=637"
let topdiv=document.createElement('div')
let topdiv1=document.createElement('div')
topdiv.setAttribute('id',"topdiv")
let divh3=document.createElement('h2')
divh3.innerText="JUST LOVE YOURSELF"
let divp1=document.createElement('p')
divp1.innerText="Share Your Pride"

let a = document.createElement('a');
let link = document.createTextNode("RIGHT THIS WAY >");
        a.appendChild(link);
     a.href = "google.com"; 
topdiv.append(divh3,divp1,a)
topdiv1.append(topImage,topdiv)
document.querySelector('#topbanner').append(topdiv1)

// middle part
let midData1=[
    {
        img:"https://www.yoox.com/images/yoox80/banners/6862_1_HL_DM_UK.png?634485886601286852#width=430&height=600",
        h3:"UP TO 80% OFF",
        p:"Prices as marked."
    },
    {
        img:"https://www.yoox.com/images/yoox80/banners/5628_1_SpotonFrenchBrand_HL_M.jpg?634485886601286852#width=430&height=600",
        h3:"UP TO 80% OFF FROM FRENCH BRANDS",
        p:"Balenciaga, Maison Kitsuné, Jacquemus and more"
    }
]
midData1.forEach(function(elem){
    let middiv1=document.createElement('div')
    let midimgdiv=document.createElement('div')
    let midImg=document.createElement('img')
    midImg.src=elem.img
    let midH3=document.createElement('h1')
    midH3.innerText=elem.h3
    let midP=document.createElement('p')
    midP.innerText=elem.p
    midimgdiv.append(midImg)
    middiv1.append(midimgdiv,midH3,midP)
    document.querySelector('#midDiv1').append(middiv1)
})

// new arrvial part
let newarrivalData=[
    {
        img:"https://www.yoox.com/images/items/12/12802961WT_14_f.jpg?impolicy=crop&width=306&height=390",
        h2:"PALM ANGLES",
        p:"T-shirt",
        mainPrice:"US$ 456,0021% OFF",
        offerprice:"US$ 360,00"
    },
    {
        img:"https://www.yoox.com/images/items/45/45664620KQ_14_f.jpg?impolicy=crop&width=387&height=490",
        h2:"NEIL BARRETT",
        p:"Handbags",
        mainPrice:"US$ 622,0023% OFF",
        offerprice:"US$ 473,00"
    },
    {
        img:"https://www.yoox.com/images/items/12/12741167IL_14_f.jpg?impolicy=crop&width=387&height=490",
        h2:"DSQUARED2",
        p:"T-shirts",
        mainPrice:"US$ 248,0033% OFF",
        offerprice:"US$ 165,00"
    },
    {
        img:"https://www.yoox.com/images/items/17/17257268PQ_14_f.jpg?impolicy=crop&width=387&height=490",
        h2:"SALVATORE FERRAGAMO",
        p:"Sneakers",
        mainPrice:"US$ 829,0034% OFF",
        offerprice:"US$ 547,00"
    },
    {
        img:"https://www.yoox.com/images/items/46/46817724EH_14_f.jpg?impolicy=crop&width=387&height=490",
        h2:"GD0014",
        p:"Sunglasses",
        mainPrice:"US$ 326,00",
        offerprice:""
    },
    {
        img:"https://www.yoox.com/images/items/12/12765413OQ_14_f.jpg?impolicy=crop&width=387&height=490",
        h2:"DRIES VAN NOTEN",
        p:"Patterned shirts",
        mainPrice:"US$ 609,0039% OFF",
        offerprice:"US$ 370,00"
    },
    {
        img:"https://www.yoox.com/images/items/12/12815472UF_14_f.jpg?impolicy=crop&width=387&height=490",
        h2:"DOLCE & GABBANA",
        p:"T-shirts",
        mainPrice:"US$ 690,0035% OFF",
        offerprice:"US$ 447,00"
    },
    {
        img:"https://www.yoox.com/images/items/17/17275940HK_14_f.jpg?impolicy=crop&width=387&height=490",
        h2:"FENDI",
        p:"Sneakers",
        mainPrice:"US$ 968,0026% OFF",
        offerprice:"US$ 716,00"
    },
    {
        img:"https://www.yoox.com/images/items/13/13767828RS_14_f.jpg?impolicy=crop&width=387&height=490",
        h2:"VALENTINO",
        p:"Denim pants",
        mainPrice:"US$ 1.069,0040% OFF",
        offerprice:"US$ 634,00"
    }
]
    let button1=document.createElement('button')
    button1.innerText="🡢"
    let button2=document.createElement('button')
    button2.innerText="🡠"
  let imgnum1=0
  let imgnum2=1
  let imgnum3=2
for(let i=0; i<3; i++){
    let newDiv=document.createElement('div')
        let newimg=document.createElement('img')
        newimg.src=newarrivalData[i].img
        let newh2=document.createElement('h2')
        newh2.innerText=newarrivalData[i].h2
        let newp1=document.createElement('p')
        newp1.innerText=newarrivalData[i].p
        let newp2=document.createElement('p')
        newp2.innerText=newarrivalData[i].mainPrice
        let newp3=document.createElement('p')
        newp3.innerText=newarrivalData[i].offerprice
    newDiv.append(newimg,newh2,newp1,newp2,newp3)
    document.querySelector('#newarrival').append(newDiv,button1,button2)
}
let arrivalimg=document.querySelectorAll('#newarrival>div')

    let img1=arrivalimg[0].querySelector('#newarrival>div>img')
    let h2_1=arrivalimg[0].querySelector('#newarrival>div>h2')
    let p1_1=arrivalimg[0].querySelector('#newarrival>div>h2+p')
    let p1_2=arrivalimg[0].querySelector('#newarrival>div>h2+p+p')
    let p1_3=arrivalimg[0].querySelector('#newarrival>div>h2+p+p+p')

    let img2=arrivalimg[1].querySelector('#newarrival>div>img')
    let h2_2=arrivalimg[1].querySelector('#newarrival>div>h2')
    let p2_1=arrivalimg[1].querySelector('#newarrival>div>h2+p')
    let p2_2=arrivalimg[1].querySelector('#newarrival>div>h2+p+p')
    let p2_3=arrivalimg[1].querySelector('#newarrival>div>h2+p+p+p')
    
    let img3=arrivalimg[2].querySelector('#newarrival>div>img')
    let h2_3=arrivalimg[2].querySelector('#newarrival>div>h2')
    let p3_1=arrivalimg[2].querySelector('#newarrival>div>h2+p')
    let p3_2=arrivalimg[2].querySelector('#newarrival>div>h2+p+p')
    let p3_3=arrivalimg[2].querySelector('#newarrival>div>h2+p+p+p')

button1.addEventListener('click',function(){
    if(imgnum1===newarrivalData.length-1){
        imgnum1=0 
       }
       else{
        imgnum1++;
       }
       if(imgnum2===newarrivalData.length-1){
        imgnum2=0 
       }
       else{
        imgnum2++;
       }
       if(imgnum3===newarrivalData.length-1){
        imgnum3=0 
       }
       else{
        imgnum3++;
       }

     img1.src=newarrivalData[imgnum1].img     
     h2_1.innerText=newarrivalData[imgnum1].h2
     p1_1.innerText=newarrivalData[imgnum1].p
     p1_2.innerText=newarrivalData[imgnum1].mainPrice
     p1_3.innerText=newarrivalData[imgnum1].offerprice

     img2.src=newarrivalData[imgnum2].img
     h2_2.innerText=newarrivalData[imgnum2].h2
     p2_1.innerText=newarrivalData[imgnum2].p
     p2_2.innerText=newarrivalData[imgnum2].mainPrice
     p2_3.innerText=newarrivalData[imgnum2].offerprice

     img3.src=newarrivalData[imgnum3].img
     h2_3.innerText=newarrivalData[imgnum3].h2
     p3_1.innerText=newarrivalData[imgnum3].p
     p3_2.innerText=newarrivalData[imgnum3].mainPrice
     p3_3.innerText=newarrivalData[imgnum3].offerprice

})
button2.addEventListener('click',function(){
    if(imgnum1===0 ){
        imgnum1=newarrivalData.length-1
       }
       else{
        imgnum1--;
       }
       if(imgnum2===0){
        imgnum2=newarrivalData.length-1         
       }
       else{
        imgnum2--;
       }
       if(imgnum3===0){
        imgnum3=newarrivalData.length-1
       }
       else{
        imgnum3--;
       }

     img1.src=newarrivalData[imgnum1].img     
     h2_1.innerText=newarrivalData[imgnum1].h2
     p1_1.innerText=newarrivalData[imgnum1].p
     p1_2.innerText=newarrivalData[imgnum1].mainPrice
     p1_3.innerText=newarrivalData[imgnum1].offerprice

     img2.src=newarrivalData[imgnum2].img
     h2_2.innerText=newarrivalData[imgnum2].h2
     p2_1.innerText=newarrivalData[imgnum2].p
     p2_2.innerText=newarrivalData[imgnum2].mainPrice
     p2_3.innerText=newarrivalData[imgnum2].offerprice

     img3.src=newarrivalData[imgnum3].img
     h2_3.innerText=newarrivalData[imgnum3].h2
     p3_1.innerText=newarrivalData[imgnum3].p
     p3_2.innerText=newarrivalData[imgnum3].mainPrice
     p3_3.innerText=newarrivalData[imgnum3].offerprice

})
// second mid part

let secondData=[
    {
        img:"https://www.yoox.com/images/yoox80/banners/6825_1_Vans_Tris_WM.jpg?634485886601286852#width=387&height=540",
        h2:"VANS",
        p:"Iconic models and details"
    },
    {
        img:"https://www.yoox.com/images/yoox80/banners/6825_5_Montblanc_M_Tris.jpg?634485886601286852#width=473&height=660",
        h2:"MONTBLANC",
        p:"The New Gift Generation"
    },
    {
        img:"https://www.yoox.com/images/yoox80/banners/6825_1_Artifact_Tris.jpg?634485886601286852#width=473&height=660",
        h2:"ARTIFACT BY SUPERGA",
        p:"The Value Of Craftmanship"
    }
]
let seconddiv1=document.createElement('div')
secondData.forEach(function(elem){
    let secondDiv=document.createElement('div')
    let newimg=document.createElement('img')
    newimg.src=elem.img
    let newh2=document.createElement('h2')
    newh2.innerText=elem.h2
    let newp1=document.createElement('p')
    newp1.innerText=elem.p
    secondDiv.append(newimg,newh2,newp1)
    seconddiv1.append(secondDiv)
    document.querySelector('#secondmid').append(seconddiv1)
})

// bottom part one of a kind
let bottomdata=[
    {
        img:"https://www.yoox.com/images/items/14/14223307PX_14_f.jpg?impolicy=crop&width=306&height=390",
        h3:"VALENTINO",
        p1:"Sweaters",
        mainprice:"US$ 3.065,0061% OFF",
        offerprice:"US$ 1.182,00"
    },
    {
        img:"https://www.yoox.com/images/items/17/17237668GW_14_f.jpg?impolicy=crop&width=306&height=390",
        h3:"MAISON MARGIELA",
        p1:"Sneakers",
        mainprice:"US$ 3.065,0061% OFF",
        offerprice:"US$ 1.182,00"
    },
    {
        img:"https://www.yoox.com/images/items/12/12715867JP_14_f.jpg?impolicy=crop&width=387&height=490",
        h3:"MAISON MARGIELA",
        p1:"T-shirts",
        mainprice:"US$ 918,0047% OFF",
        offerprice:"US$ 478,00"
    },
    {
        img:"https://www.yoox.com/images/items/17/17221074GP_14_f.jpg?impolicy=crop&width=387&height=490",
        h3:"McQ Alexander McQueen",
        p1:"Sneakers",
        mainprice:"US$ 430,0037% OFF",
        offerprice:"US$ 268,00"
    },
    {
        img:"https://www.yoox.com/images/items/12/12788056JK_14_f.jpg?impolicy=crop&width=387&height=490",
        h3:"McQ Alexander McQueen",
        p1:"Sweatshirts",
        mainprice:"US$ 452,0055% OFF",
        offerprice:"US$ 199,00"
    },
    {
        img:"https://www.yoox.com/images/items/12/12705483BI_14_f.jpg?impolicy=crop&width=387&height=490",
        h3:"PALM ANGELS",
        p1:"T-shirts",
        mainprice:"US$ 369,0047% OFF",
        offerprice:"US$ 192,00"
    },
    {
        img:"https://www.yoox.com/images/items/17/17219768BK_14_f.jpg?impolicy=crop&width=387&height=490",
        h3:"GIVENCHY",
        p1:"Sneakers",
        mainprice:"US$ 744,0041% OFF",
        offerprice:"US$ 435,00"
    },
    {
        img:"https://www.yoox.com/images/items/13/13752701FU_14_f.jpg?impolicy=crop&width=387&height=490",
        h3:"GIVENCHY",
        p1:"Shorts & Bermuda",
        mainprice:"US$ 1.119,0044% OFF",
        offerprice:"US$ 617,00"
    },
    {
        img:"https://www.yoox.com/images/items/17/17261535HI_14_f.jpg?impolicy=crop&width=387&height=490",
        h3:"ASICS",
        p1:"Sneakers",
        mainprice:"US$ 142,0053% OFF",
        offerprice:"US$ 66,00"
    },
]
let button_1=document.createElement('button')
button_1.innerText="🡢"
let button_2=document.createElement('button')
button_2.innerText="🡠"
let imgnum_1=0
let imgnum_2=1
let imgnum_3=2

for(let i=0; i<3; i++){
    let newDiv=document.createElement('div')
    let newimg=document.createElement('img')
    newimg.src=bottomdata[i].img
    let newh3=document.createElement('h3')
    newh3.innerText=bottomdata[i].h3
    let newp1=document.createElement('p')
    newp1.innerText=bottomdata[i].p1
    let newp2=document.createElement('p')
    newp2.innerText=bottomdata[i].mainprice
    let newp3=document.createElement('p')
    newp3.innerText=bottomdata[i].offerprice
newDiv.append(newimg,newh3,newp1,newp2,newp3)
document.querySelector('#bottom').append(newDiv,button_1,button_2)
}
let bottom_div=document.querySelectorAll('#bottom>div')

    let img_1=bottom_div[0].querySelector('#bottom>div>img')
    let h2_11=bottom_div[0].querySelector('#bottom>div>h3')
    let p1_11=bottom_div[0].querySelector('#bottom>div>h3+p')
    let p1_22=bottom_div[0].querySelector('#bottom>div>h3+p+p')
    let p1_33=bottom_div[0].querySelector('#bottom>div>h3+p+p+p')

    let img_2=bottom_div[1].querySelector('#bottom>div>img')
    let h2_22=bottom_div[1].querySelector('#bottom>div>h3')
    let p2_11=bottom_div[1].querySelector('#bottom>div>h3+p')
    let p2_22=bottom_div[1].querySelector('#bottom>div>h3+p+p')
    let p2_33=bottom_div[1].querySelector('#bottom>div>h3+p+p+p')
    
    let img_3=bottom_div[2].querySelector('#bottom>div>img')
    let h2_33=bottom_div[2].querySelector('#bottom>div>h3')
    let p3_11=bottom_div[2].querySelector('#bottom>div>h3+p')
    let p3_22=bottom_div[2].querySelector('#bottom>div>h3+p+p')
    let p3_33=bottom_div[2].querySelector('#bottom>div>h3+p+p+p')
    
button_2.addEventListener('click',function(){
    if(imgnum_1===bottomdata.length-1){
        imgnum_1=0 
       }
       else{
        imgnum_1++;
       }
       if(imgnum_2===bottomdata.length-1){
        imgnum_2=0 
       }
       else{
        imgnum_2++;
       }
       if(imgnum_3===bottomdata.length-1){
        imgnum_3=0 
       }
       else{
        imgnum_3++;
       }

     img_1.src=bottomdata[imgnum_1].img     
     h2_11.innerText=bottomdata[imgnum_1].h3
     p1_11.innerText=bottomdata[imgnum_1].p1
     p1_22.innerText=bottomdata[imgnum_1].mainprice
     p1_33.innerText=bottomdata[imgnum_1].offerprice

     img_2.src=bottomdata[imgnum_2].img
     h2_22.innerText=bottomdata[imgnum_2].h3
     p2_11.innerText=bottomdata[imgnum_2].p1
     p2_22.innerText=bottomdata[imgnum_2].mainprice
     p2_33.innerText=bottomdata[imgnum_2].offerprice

     img_3.src=bottomdata[imgnum_3].img
     h2_33.innerText=bottomdata[imgnum_3].h3
     p3_11.innerText=bottomdata[imgnum_3].p1
     p3_22.innerText=bottomdata[imgnum_3].mainprice
     p3_33.innerText=bottomdata[imgnum_3].offerprice

})
button_1.addEventListener('click',function(){
    if(imgnum_1===0 ){
        imgnum_1=bottomdata.length-1
       }
       else{
        imgnum_1--;
       }
       if(imgnum_2===0){
        imgnum_2=bottomdata.length-1         
       }
       else{
        imgnum_2--;
       }
       if(imgnum_3===0){
        imgnum_3=bottomdata.length-1
       }
       else{
        imgnum_3--;
       }

     img_1.src=bottomdata[imgnum_1].img     
     h2_11.innerText=bottomdata[imgnum_1].h3
     p1_11.innerText=bottomdata[imgnum_1].p1
     p1_22.innerText=bottomdata[imgnum_1].mainprice
     p1_33.innerText=bottomdata[imgnum_1].offerprice

     img_2.src=bottomdata[imgnum_2].img
     h2_22.innerText=bottomdata[imgnum_2].h3
     p2_11.innerText=bottomdata[imgnum_2].p1
     p2_22.innerText=bottomdata[imgnum_2].mainprice
     p2_33.innerText=bottomdata[imgnum_2].offerprice

     img_3.src=bottomdata[imgnum_3].img
     h2_33.innerText=bottomdata[imgnum_3].h3
     p3_11.innerText=bottomdata[imgnum_3].p1
     p3_22.innerText=bottomdata[imgnum_3].mainprice
     p3_33.innerText=bottomdata[imgnum_3].offerprice

})
// bottommid part

let craousaldata1=[
    {
        img:"https://www.yoox.com/images/items/12/12792295KA_14_f.jpg?impolicy=crop&width=387&height=490",
        h4:"8 by YOOX",
        p1:"Patterned shirts",
        price:"US$ 100,00"
    },
    {
        img:"https://www.yoox.com/images/items/46/46851468OR_14_f.jpg?impolicy=crop&width=387&height=490",
        h4:"8 by YOOX",
        p1:"Sunglasses",
        price:"US$ 85,00"
    },
    {
        img:"https://www.yoox.com/images/items/13/13773547JN_14_f.jpg?impolicy=crop&width=387&height=490",
        h4:"8 by YOOX",
        p1:"Shorts & Bermuda",
        price:"US$ 100,00"
    },
    {
        img:"https://www.yoox.com/images/items/16/16098017NW_14_f.jpg?impolicy=crop&width=387&height=490",
        h4:"8 by YOOX",
        p1:"Full-length jackets",
        price:"US$ 89,00"
    },
    {
        img:"https://www.yoox.com/images/items/46/46804502BI_14_f.jpg?impolicy=crop&width=387&height=490",
        h4:"8 by YOOX",
        p1:"SAHARA HAT",
        price:"US$ 16,00"
    },
    {
        img:"https://www.yoox.com/images/items/13/13724537RP_14_f.jpg?impolicy=crop&width=387&height=490",
        h4:"8 by YOOX",
        p1:"Casual pants",
        price:"US$ 79,00"
    },
    {
        img:"https://www.yoox.com/images/items/12/12792275KB_14_f.jpg?impolicy=crop&width=387&height=490",
        h4:"8 by YOOX",
        p1:"Patterned shirts",
        price:"US$ 100,00"
    },
    {
        img:"https://www.yoox.com/images/items/17/17206082EF_14_f.jpg?impolicy=crop&width=387&height=490",
        h4:"8 by YOOX",
        p1:"Sneakers",
        price:"US$ 69,00"
    }
]
let imgnum=0
let craousalImg=document.querySelector('#craousal>img')
let p1=document.querySelector('#craousal>p')
let p2=document.querySelector('#p2')
let buttons=document.querySelectorAll('#bottomMid>div>button')
buttons[1].addEventListener('click',function(){
   if(imgnum===0){
    imgnum=craousaldata1.length-1
   }
   else{
    imgnum--;
   }
   craousalImg.src=craousaldata1[imgnum].img
   p1.innerText=craousaldata1[imgnum].p1
   p2.innerText=craousaldata1[imgnum].price

})
buttons[0].addEventListener('click',function(){
    if(imgnum===craousaldata1.length-1){
     imgnum=0
    }
    else{
     imgnum++;
    }
    craousalImg.src=craousaldata1[imgnum].img
    p1.innerText=craousaldata1[imgnum].p1
    p2.innerText=craousaldata1[imgnum].price
 
 })
