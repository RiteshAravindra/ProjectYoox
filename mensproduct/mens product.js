let productData=[
    {
        img:"https://www.yoox.com/images/items/12/12802961WT_14_f.jpg?impolicy=crop&width=306&height=390",
        h2:"PALM ANGLES",
        p:"T-shirts",
        mainPrice:"US$ 456,0021% OFF",
        offerprice:360.00
    },
    {
        img:"https://www.yoox.com/images/items/45/45664620KQ_14_f.jpg?impolicy=crop&width=387&height=490",
        h2:"NEIL BARRETT",
        p:"Handbags",
        mainPrice:"US$ 622,0023% OFF",
        offerprice:473.00
    },
    {
        img:"https://www.yoox.com/images/items/12/12741167IL_14_f.jpg?impolicy=crop&width=387&height=490",
        h2:"DSQUARED2",
        p:"T-shirts",
        mainPrice:"US$ 248,0033% OFF",
        offerprice:165.00
    },
    {
        img:"https://www.yoox.com/images/items/17/17257268PQ_14_f.jpg?impolicy=crop&width=387&height=490",
        h2:"SALVATORE FERRAGAMO",
        p:"Sneakers",
        mainPrice:"US$ 829,0034% OFF",
        offerprice:547.00
    },
    {
        img:"https://www.yoox.com/images/items/46/46817724EH_14_f.jpg?impolicy=crop&width=387&height=490",
        h2:"GD0014",
        p:"Sunglasses",
        mainPrice:"",
        offerprice:326.00
    },
    {
        img:"https://www.yoox.com/images/items/12/12765413OQ_14_f.jpg?impolicy=crop&width=387&height=490",
        h2:"DRIES VAN NOTEN",
        p:"Patterned shirts",
        mainPrice:"US$ 609,0039% OFF",
        offerprice:370.00
    },
    {
        img:"https://www.yoox.com/images/items/12/12815472UF_14_f.jpg?impolicy=crop&width=387&height=490",
        h2:"DOLCE & GABBANA",
        p:"T-shirts",
        mainPrice:"US$ 690,0035% OFF",
        offerprice:447.00
    },
    {
        img:"https://www.yoox.com/images/items/17/17275940HK_14_f.jpg?impolicy=crop&width=387&height=490",
        h2:"FENDI",
        p:"Sneakers",
        mainPrice:"US$ 968,0026% OFF",
        offerprice:716.00
    },
    {
        img:"https://www.yoox.com/images/items/13/13767828RS_14_f.jpg?impolicy=crop&width=387&height=490",
        h2:"VALENTINO",
        p:"Denim pants",
        mainPrice:"US$ 1.069,0040% OFF",
        offerprice:634.00
    },
    {
        img:"https://www.yoox.com/images/items/17/17259670CS_14_f.jpg?impolicy=crop&width=387&height=490",
        h2:"SALVATORE FERRAGAMO",
        p:"Sneakers",
        mainPrice:"US$ 801,0034% OFF",
        offerprice:528.00
    },
    {
        img:"https://www.yoox.com/images/items/13/13782498KU_14_f.jpg?impolicy=crop&width=387&height=490",
        h2:"OFF-WHITE™",
        p:"Shorts & Bermuda",
        mainPrice:"US$ 493,0047% OFF",
        offerprice:257.00
    },
    {
        img:"https://www.yoox.com/images/items/45/45661366HH_14_f.jpg?impolicy=crop&width=387&height=490",
        h2:"VALENTINO GARAVANI",
        p:"Handbags",
        mainPrice:"US$ 3.287,0047% OFF",
        offerprice:700
    },
    {
        img:"https://www.yoox.com/images/items/17/17262181XD_14_f.jpg?impolicy=crop&width=387&height=490",
        h2:"DOLCE & GABBANA",
        p:"Flip flops",
        mainPrice:"US$ 339,0026% OFF",
        offerprice:250.00
    },
    {
        img:"https://www.yoox.com/images/items/13/13792735FR_14_f.jpg?impolicy=crop&width=387&height=490",
        h2:"OFF-WHITE™",
        p:"Denim pants",
        mainPrice:"US$ 662,0027% OFF",
        offerprice:483.00
    },
    {
        img:"https://www.yoox.com/images/items/46/46845612FN_14_f.jpg?impolicy=crop&width=387&height=490",
        h2:"TOM FORD",
        p:"Sunglasses",
        mainPrice:"",
        offerprice:396.00
    },
    {
        img:"https://www.yoox.com/images/items/12/12782985NW_14_f.jpg?impolicy=crop&width=387&height=490",
        h2:"DSQUARED2",
        p:"Denim shirts",
        mainPrice:"US$ 681,0029% OFF",
        offerprice:483.00
    },
    {
        img:"https://www.yoox.com/images/items/12/12816882SE_14_f.jpg?impolicy=crop&width=387&height=490",
        h2:"HERON PRESTON",
        p:"T-shirts",
        mainPrice:"US$ 274,0022% OFF",
        offerprice:213.00
    },
    {
        img:"https://www.yoox.com/images/items/13/13796929VS_14_f.jpg?impolicy=crop&width=387&height=490",
        h2:"VALENTINO",
        p:"Shorts & Bermuda",
        mainPrice:"US$ 1.267,0041% OFF",
        offerprice:747.00
    },
    {
        img:"https://www.yoox.com/images/items/46/46841381BO_14_f.jpg?impolicy=crop&width=387&height=490",
        h2:"DOLCE & GABBANA",
        p:"Document holders",
        mainPrice:"US$ 217,0031% OFF",
        offerprice:149.00
    }

]
display(productData)
function display(data){
    document.querySelector("#container").innerHTML=""
    data.forEach(function(elem){
        let productDiv=document.createElement('div')
        let productimg=document.createElement('img')
        productimg.src=elem.img
        let line=document.createElement('hr')
        line.style.width="80%"
        line.style.margin="auto"
        let productname=document.createElement('h5')
        productname.innerText=elem.h2
        let prodcttype=document.createElement('p')
        prodcttype.setAttribute('class','producttype')
        prodcttype.innerText=elem.p
        let main=document.createElement('p')
        main.setAttribute('class','mainprice')
        main.innerText=elem.mainPrice
        let offer=document.createElement('h5')
        offer.innerText="$ "+elem.offerprice
        productDiv.append(productimg,line,productname,prodcttype,main,offer)
        document.querySelector('#container').append(productDiv)
    })
}


function sortprice(){
    let selected=document.querySelector('#sortprice').value
    if(selected==="low to high"){
        productData.sort(function(a,b){
            return b.offerprice-a.offerprice
        })
        display(productData)
       
    }
    else if(selected==="high to low"){
        productData.sort(function(a,b){
            return a.offerprice-b.offerprice
        })
        display(productData)
    }
    else if(selected=="sort by"){
       window.location.reload()
    }
}

function sortclass(){
    let selected=document.querySelector('#sortbyclass').value
    let filtered= productData.filter(function(elem){
        return elem.p===selected
    })
    console.log(filtered)
    display(filtered)
    if(selected==="categories"){
        window.location.reload()
    }
}