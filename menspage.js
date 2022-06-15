// top banner part
let topImage=document.createElement('img')
topImage.src="https://www.yoox.com/images/yoox80/banners/6895_1_Pride_Main_WM.jpg?634485886601286852#width=1380&height=637"
let topdiv=document.createElement('div')
topdiv.setAttribute('id',"topdiv")
let divh3=document.createElement('h3')
divh3.innerText="JUST LOVE YOURSELF"
let divp1=document.createElement('p')
divp1.innerText="Share Your Pride"

topdiv.append(divh3,divp1)
document.querySelector('#topbanner').append(topImage,topdiv)

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
let midData2=["DOLCE & GABBANA","DSQUARED2","ROBERTO CAVALLI","MAISON MARGIELA","KENZO","GUCCI","BALENCIAGA","MARNI","PRADA","CALVIN KLEIN"]

midData1.forEach(function(elem){
    let middiv1=document.createElement('div')

    console.log('hii')
    let midImg=document.createElement('img')
    midImg.src=elem.img
    let midH3=document.createElement('h3')
    midH3.innerText=elem.h3
    let midP=document.createElement('p')
    midP.innerText=elem.p

    middiv1.append(midImg,midH3,midP)
    document.querySelector('#midDiv').append(middiv1)
})
let middiv2=document.createElement('div')
midData2.forEach(function(elem){
    let p2=document.createElement('p')
    p2.innerText=elem
   middiv2.append(p2)
   document.querySelector('#midDiv').append(middiv2)

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
// let imgnum=0
// let button1=document.createElement('button')
//     button1.innerText="🡢"
//     let button2=document.createElement('button')
//     button1.addEventListener('click',decrease())
//     button2.innerText="🡠"
//     button2.addEventListener('click',increase())
    
// function decrease(){
//     if(imgnum===0){
//         img=newarrivalData.length-1
//     }
//     else{
//         imgnum--
//     }}



// display(newarrivalData)
// function display(data){
    newarrivalData.forEach(function(elem){
        let newDiv=document.createElement('div')
        let newimg=document.createElement('img')
        newimg.src=elem.img
        let newh2=document.createElement('h2')
        newh2.innerText=elem.h2
        let newp1=document.createElement('p')
        newp1.innerText=elem.p
        let newp2=document.createElement('p')
        newp1.innerText=elem.mainPrice
        let newp3=document.createElement('p')
        newp1.innerText=elem.offerprice
    newDiv.append(newimg,newh2,newp1,newp2,newp3)
    document.querySelector('#newarrival').append(newDiv)
    })
// }
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
secondData.forEach(function(elem){
    let secondDiv=document.createElement('div')
    let newimg=document.createElement('img')
    newimg.src=elem.img
    let newh2=document.createElement('h2')
    newh2.innerText=elem.h2
    let newp1=document.createElement('p')
    newp1.innerText=elem.p
    secondDiv.append(newimg,newh2,newp1)
    document.querySelector('#secondmid').append(secondDiv)
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

bottomdata.forEach(function(elem){
    let newDiv=document.createElement('div')
    let newimg=document.createElement('img')
    newimg.src=elem.img
    let newh2=document.createElement('h2')
    newh2.innerText=elem.h2
    let newp1=document.createElement('p')
    newp1.innerText=elem.p
    let newp2=document.createElement('p')
    newp1.innerText=elem.mainPrice
    let newp3=document.createElement('p')
    newp1.innerText=elem.offerprice
newDiv.append(newimg,newh2,newp1,newp2,newp3)
document.querySelector('#bottom').append(newDiv)
})

// bottommid part
