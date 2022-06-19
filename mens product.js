let productData=[
    {
        Image:"https://www.yoox.com/images/items/12/12802961WT_14_f.jpg?impolicy=crop&width=306&height=390",
        name:"PALM ANGLES",
        type:"T-shirts",
        discount:"US$ 456,0021% OFF",
        price:360.00
    },
    {
        Image:"https://www.yoox.com/images/items/45/45664620KQ_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"NEIL BARRETT",
        type:"Handbags",
        discount:"US$ 622,0023% OFF",
        price:473.00
    },
    {
        Image:"https://www.yoox.com/images/items/12/12741167IL_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"DSQUARED2",
        type:"T-shirts",
        discount:"US$ 248,0033% OFF",
        price:165.00
    },
    {
        Image:"https://www.yoox.com/images/items/17/17257268PQ_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"SALVATORE FERRAGAMO",
        type:"Sneakers",
        discount:"US$ 829,0034% OFF",
        price:547.00
    },
    {
        Image:"https://www.yoox.com/images/items/46/46817724EH_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"GD0014",
        type:"Sunglasses",
        discount:"",
        price:326.00
    },
    {
        Image:"https://www.yoox.com/images/items/12/12765413OQ_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"DRIES VAN NOTEN",
        type:"Patterned shirts",
        discount:"US$ 609,0039% OFF",
        price:370.00
    },
    {
        Image:"https://www.yoox.com/images/items/12/12815472UF_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"DOLCE & GABBANA",
        type:"T-shirts",
        discount:"US$ 690,0035% OFF",
        price:447.00
    },
    {
        Image:"https://www.yoox.com/images/items/17/17275940HK_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"FENDI",
        type:"Sneakers",
        discount:"US$ 968,0026% OFF",
        price:716.00
    },
    {
        Image:"https://www.yoox.com/images/items/13/13767828RS_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"VALENTINO",
        type:"Denim pants",
        discount:"US$ 1.069,0040% OFF",
        price:634.00
    },
    {
        Image:"https://www.yoox.com/images/items/17/17259670CS_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"SALVATORE FERRAGAMO",
        type:"Sneakers",
        discount:"US$ 801,0034% OFF",
        price:528.00
    },
    {
        Image:"https://www.yoox.com/images/items/13/13782498KU_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"OFF-WHITE™",
        type:"Shorts & Bermuda",
        discount:"US$ 493,0047% OFF",
        price:257.00
    },
    {
        Image:"https://www.yoox.com/images/items/45/45661366HH_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"VALENTINO GARAVANI",
        type:"Handbags",
        discount:"US$ 3.287,0047% OFF",
        price:700
    },
    {
        Image:"https://www.yoox.com/images/items/17/17262181XD_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"DOLCE & GABBANA",
        type:"Flip flops",
        discount:"US$ 339,0026% OFF",
        price:250.00
    },
    {
        Image:"https://www.yoox.com/images/items/13/13792735FR_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"OFF-WHITE™",
        type:"Denim pants",
        discount:"US$ 662,0027% OFF",
        price:483.00
    },
    {
        Image:"https://www.yoox.com/images/items/46/46845612FN_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"TOM FORD",
        type:"Sunglasses",
        discount:"",
        price:396.00
    },
    {
        Image:"https://www.yoox.com/images/items/12/12782985NW_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"DSQUARED2",
        type:"Denim shirts",
        discount:"US$ 681,0029% OFF",
        price:483.00
    },
    {
        Image:"https://www.yoox.com/images/items/12/12816882SE_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"HERON PRESTON",
        type:"T-shirts",
        discount:"US$ 274,0022% OFF",
        price:213.00
    },
    {
        Image:"https://www.yoox.com/images/items/13/13796929VS_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"VALENTINO",
        type:"Shorts & Bermuda",
        discount:"US$ 1.267,0041% OFF",
        price:747.00
    },
    {
        Image:"https://www.yoox.com/images/items/46/46841381BO_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"DOLCE & GABBANA",
        type:"Document holders",
        discount:"US$ 217,0031% OFF",
        price:149.00
    }

]
display(productData)
function display(data){
    document.querySelector("#container").innerHTML=""
    data.forEach(function(elem){
        let productDiv=document.createElement('div')
        let productimg=document.createElement('img')
        productimg.src=elem.Image
        let line=document.createElement('hr')
        line.style.width="80%"
        line.style.margin="auto"
        let productname=document.createElement('h5')
        productname.innerText=elem.name

        productname.addEventListener('click', function(){
            if(addcart1(elem.name)==true){
                cart.push(elem)
                localStorage.setItem("Orderlist" , JSON.stringify(cart))
              alert("Item Added Successfully");
              window.location.href="/ProjectYoox/Addtocart.html"
            }  else{
                alert("Item Already Added")
                window.location.href="/ProjectYoox/Addtocart.html"
            }
        })
        
        let prodcttype=document.createElement('type')
        prodcttype.setAttribute('class','producttype')
        prodcttype.innerText=elem.type
        let main=document.createElement('type')
        main.setAttribute('class','mainprice')
        main.innerText=elem.discount
        let offer=document.createElement('h5')
        offer.innerText="$ "+elem.price
        productDiv.append(productimg,line,productname,prodcttype,main,offer)
        document.querySelector('#container').append(productDiv)
    })
}


let cart=JSON.parse(localStorage.getItem("Orderlist")) || [];
function addcart1(naam){
for(let i=0;i<cart.length;i++){
 if(cart[i].name===naam){
     return false;
 }
}return true;
}

function sortprice(){
    let selected=document.querySelector('#sortprice').value
    if(selected==="low to high"){
        productData.sort(function(a,b){
            return b.price-a.price
        })
        display(productData)
       
    }
    else if(selected==="high to low"){
        productData.sort(function(a,b){
            return a.price-b.price
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
        return elem.type===selected
    })
    console.log(filtered)
    display(filtered)
    if(selected==="categories"){
        window.location.reload()
    }
}