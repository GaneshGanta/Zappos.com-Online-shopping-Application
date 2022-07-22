    var count=0;
    let arr=["Be the first to shop the newest home styles—now on Zappos! Shop Home Now", "Say Good bye to Ttress with our Back-to-School Guide!Shop Kid's Style", "Easy Returns: FREE UPS Pickups from your home (no printer required)! Learn More", "Introducing Afterpay! Buy now, pay later. No Interest, ever! Learn More", "Easy Returns: FREE UPS Pickups from your home (no printer required)! Learn More"];

    carosel(count);

    function carosel(a){
        console.log("ganesh")
        let main=document.getElementById("carosel");
        main.innerHTML=null;
        for(let i=a;i<a+1;i++){
        console.log(arr[a]);
        let btn=document.createElement("button")
        btn.innerText="<";
        btn.addEventListener("click",leftSlider)
        let btn1=document.createElement("button")
        btn1.innerText=">";
    
        btn1.addEventListener("click",rightSlider)
        let p=document.createElement("p")
        p.innerText=arr[a];
        main.append(p,btn,btn1);

    }
    }
    carosel(count)


function leftSlider(){
    if(count==0){
        count=4;
    }else{
        count=count-1
    }
         carosel(count);
    }
function rightSlider(){
    if(count==4){
        count=0;
    }else{
        count=count+1;
    }
     carosel(count);
}



let arr_of_images=[

    {Image:"https://m.media-amazon.com/images/I/71uRk+8BmWL._AC_SX255_.jpg",title:"Sneakers & Athletic Shoes"},
    {Image:"https://m.media-amazon.com/images/I/61fG76XoNJL._AC_SX255_.jpg",title:"Sandals"},
    {Image:"https://m.media-amazon.com/images/I/71nRTCE1YnL._AC_SX255_.jpg",title:"dresses"},
    {Image:"https://m.media-amazon.com/images/I/81F2loGWI+L._AC_SX255_.jpg",title:"Backpacks for School"},
    {Image:"https://m.media-amazon.com/images/I/711VZSyPARL._AC_SX255_.jpg",title:"Swimwear"},
    {Image:"https://m.media-amazon.com/images/I/71bsyTFrQbL._AC_SX255_.jpg",title:"Wedges"},
];

    let x=document.getElementById("popular")

    arr_of_images.forEach(function(el){
       
        let div=document.createElement("div");
        let box=document.createElement("div");
        div.setAttribute("class","cards");
        let image=document.createElement("img");
        image.src=el.Image;
        let p=document.createElement("p");
        p.innerText=el.title;
        p.style.marginTop="20px";
        div.append(image);
        box.append(div,p)
        x.append(box)
    });


    let arr_of_images2=[

        {image:"https://m.media-amazon.com/images/G/01/2022/womens-shoes/WOMENS-CASUAL-SNEAKERS-JULY-TRIPTYCH-500X500.jpg",title:"Anything But Ordinary: Women's Sneakers",details:"Look for head-turning prints and colorways!",link:"SHOP WOMEN'S EVERYDAY SNEAKERS"},
        {image:"https://m.media-amazon.com/images/G/01/2022/homepage7.04/WOMENS-HP-SWIM-ON-SALE-JULY-TRIPTYCH-500X500.jpg",title:"Women's Swimwear on Sale",details:"Save on one pieces, swim separates, cover-ups, and more!",link:"SHOP SALE WOMEN'S SWIM"},
        {image:"https://m.media-amazon.com/images/G/01/2022/Mens/MENS-SWIM-NEW-ARRIVAL-JUNE-TRIPTYCH-500X500.jpg",title:"End-of-Season Swimwear for Men",details:"Dive in! it's not too late to suit up for pool season!",link:"SHOP SALE MEN'S SWIM"},

  ];

  let y=document.getElementById("popular1")

  arr_of_images2.forEach(function(el){

    let div=document.createElement("div");
    div.setAttribute("class","cards2");
    let box=document.createElement("div");
    let image=document.createElement("img");
    image.src=el.image;
    let p=document.createElement("h3");
    p.innerText=el.title;
    let links=document.createElement("h4");
    links.innerText=el.link;
    let des=document.createElement("p")
    des.innerText=el.details;
    div.append(image);
    box.append(div,p,des,links);
    y.append(box);

  })
function products3(){
 
  let div=document.getElementsByClassName("popular3");
  let box=document.getElementsByName("populars3")
 
  let h2=document.createElement("h2")
  h2.innerText="UGG@ KIDS: School Style Starts Here";
  let h3=document.createElement("h3");
  h3.innerText="Find cheerful design, cozy classics, and the easy-to-wear Rennon collection!";
  let button=document.createElement('button');
  button .innerText='SHOP UGG @FOOTWEAR FOR KIDS';
  let image=document.createElement("img")
  image.src="https://m.media-amazon.com/images/G/01/2022/homepage7.18/COOP-UGG-KIDS-AOE-1920x1000.jpg";
  box.append(image)
  div.append(h2,h3,button)
 
}
//products3();
let arr_of_images3=[

    {image:'https://m.media-amazon.com/images/G/01/zappos/landing/opus/2021/homepage/Zappos_ONE_Retina.png',title:'Diversity Equity & Inclusion',des:'At Zappos, diversity and individuality are central to our core values.',spec:'LEARN MORE ABOUT ZAPPOS ONE PURPOSE'},
    {image:'https://m.media-amazon.com/images/G/01/2022/homepage2.08/Blank_500_x_500-491.jpg',title:'Zappos for Good',des:'Learn how to easily donate or recycle your secondhand items.',spec:'EXPLORE ZAPPOS FOR GOOD'},
    {image:'https://m.media-amazon.com/images/G/01/zappos/landing/opus/2020/homepage/july/GGPromo.png',title:'Goods for Good',des:"We're highliting brands who are making a difference and helping build a better place for us all.",spec:'SHOP GOODS FOR GOOD'},
];
let last=document.getElementById("last");

arr_of_images3.forEach(function(el){

    let div=document.createElement("div");
    let image=document.createElement("img");
     image.src=el.image;
    let title=document.createElement("h3");
    title.innerText=el.title;
    let des=document.createElement("p");
    des.innerText=el.des;
    let spec=document.createElement("h4");
    spec.innerText=el.spec;
    div.append(image,title,des,spec);
    last.append(div)

});
let arr_of_images4=[


    {image:"https://m.media-amazon.com/images/I/91NlHmHtP1L._AC_SX255_.jpg",rating:"&#9825 2255;",details:"Calvin Klein Underwear modern cotton",price:"$75"},
    {image:"https://m.media-amazon.com/images/I/81NYE4eC+xL._AC_SX255_.jpg",rating:"&#9825 216",details:"Calvin Klein Modern Cootm Light weight",price:"$47"},
    {image:"https://m.media-amazon.com/images/I/61wO3GRY0SL._AC_SX255_.jpg",rating:"&#9825 688",details:"adidas Adilette Comfort ADJ",price:"$35.00"},
    {image:"https://m.media-amazon.com/images/I/71xRHd9E7AL._AC_SX255_.jpg",rating:"&#9825 176",details:"adidas Running Cloudfoam Pure 2.0",price:"$22.67"},
    {image:"https://m.media-amazon.com/images/I/71rQq8PIULL._AC_SX255_.jpg",rating:"&#9825 478",details:"Under Armour Raid 2.0 Shorts",price:"$22.67"},
    {image:"https://m.media-amazon.com/images/I/71zTWHC52RL._AC_SX255_.jpg",rating:"&#9825 245",details:"Under Armour Raid 2.0 Shorts",price:"$22.58"},
    {image:"https://m.media-amazon.com/images/I/711y37XiVqL._AC_SX255_.jpg",rating:"&#9825 2858",details:"Crocs Classic Tie-Dye-Grape",price:"$35.00"},
    {image:"https://m.media-amazon.com/images/I/71mmrJgjtbL._AC_SX255_.jpg",rating:"&#9825 193",details:"adidas Running Cloudfoam Pure 2.0",price:"$74.95"},
    {image:"https://m.media-amazon.com/images/I/81j8hvSmu7L._AC_SX255_.jpg",rating:"&#9825 26",details:"Calvin klein Men's Cottom Classic",price:"$59.50"},
    {image:"https://m.media-amazon.com/images/I/71u6W-t6wOL._AC_SX255_.jpg",rating:"&#9825 75",details:"Crocs kids classic clog(Toddler)",price:"$34.95"},
    {image:"https://m.media-amazon.com/images/I/71wbtYunZzL._AC_SX255_.jpg",rating:"&#9825 91",details:"adidas Running Questar",price:"$57.91"},
    {image:"https://m.media-amazon.com/images/I/81bdJtidxtL._AC_SX255_.jpg",rating:"&#9825 507",details:"Levi's@Women's 501@ High-Rise Shorts",price:"$49.99"},
    {image:"https://m.media-amazon.com/images/I/812dWoLYTeL._AC_SX255_.jpg",rating:"&#9825 228",details:"Under Armour UA TECH 1/2 ZIP",price:"$27.97"},
    {image:"https://m.media-amazon.com/images/I/61OB1zpc5WL._AC_SX255_.jpg",rating:"&#9825 14 ",details:"Under Armour New Freedom Flag",price:"$20.75"},
    {image:"https://m.media-amazon.com/images/I/81fKtCtOOGS._AC_SX255_.jpg",rating:"&#9825 316",details:"Levi's@Womes's Wedgie Straight",price:"$69.99"},
    {image:"https://m.media-amazon.com/images/I/61Edlc2zjAL._AC_SX255_.jpg",rating:"&#9825 402",details:"Crocs Classic Lined Tie-Dynamic ",price:"$40.00"},
    {image:"https://m.media-amazon.com/images/I/61TKFhh1HnL._AC_SX255_.jpg",rating:"&#9825 77",details:"Under Armour Kids Brawler 2.0 Pants",price:"$30.00"},
    {image:"https://m.media-amazon.com/images/I/71Fv5Q2gbPL._AC_SX255_.jpg",rating:"&#9825 59",details:"Under Armour ignite Vi Graphic FB",price:"$34.95"},
    
];

let left=0;
let right=5;
    
  function abc(left,right){
    let main=document.getElementById("popular_items");
    main.innerHTML=null;
  for(let i=left;i<=right;i++){
    let div=document.createElement("div")
    div.setAttribute("class","cards")
     let box=document.createElement("div")
     let images=document.createElement("img");
     images.src=arr_of_images4[i].image;
     div.append(images);
    //  let rating=document.createElement("p")
    //  rating.innerText=arr_of_images4[i].rating;
     let des=document.createElement("h4");
     des.innerText=arr_of_images4[i].details;
     let price=document.createElement("p");
     price.innerText=arr_of_images4[i].price;
     box.append(div,des,price);
     main.append(box);

 }
}
abc(left,right);


function slideright(){
    console.log("ganws")
    if(right>11){
        return;

    }
    else{

    left=left+6;
    right=right+6;
    abc(left,right);
    }
}

function slideleft(){
    console.log("ganesh")

    if(left==0){
        return;
    }else{
        right=right-6;
        left=left-6;
        abc(left,right)
    }
}


let arr_of_images5=[


    {Image:"https://www.zappos.com/boutiques/3377/hoka_header012722.gif",title:"HOKA"},
    {Image:"https://www.zappos.com/boutiques/2631/FreePeople_Header070121.jpg",title:"Free People"},
    {Image:"https://www.zappos.com/boutiques/4033/ON_header140422.jpg",title:"On"},
    {Image:"https://www.zappos.com/boutiques/108/stevemadden_header093013.jpg",title:"STEVE MADDEN"},
    {Image:"https://www.zappos.com/boutiques/179/nb_header170922.jpg",title:"New Balance"},
    {Image:"https://www.zappos.com/boutiques/148/birkenstock_head-010616.jpg",title:"Birkenstock"},
    {Image:"https://www.zappos.com/boutiques/184/ugg_header_092116.jpg",title:"UGG"},
    {Image:"https://www.zappos.com/boutiques/162/asics_header061206.gif",title:"ASICS"},
    {Image:"https://www.zappos.com/boutiques/193/brooks_head-060116.jpg",title:"Brooks"},
    {Image:"https://www.zappos.com/boutiques/775/crocs_head_042617.jpg",title:"Crocs"},
    {Image:"https://www.zappos.com/boutiques/272/sorel_head_101215.jpg",title:"SOREL"},
    {Image:"https://www.zappos.com/boutiques/617/THENORTHFACE_header042619.gif",title:"The North Face"},


];
 
function brands(arr){
    let brand=document.getElementById("trending")
    brand.innerHTML=null;

  arr.forEach(function(el){
       
    let div=document.createElement("div");
     let box=document.createElement("div");
     div.setAttribute("class","cards");
    let titles=document.createElement("p");
    titles.innerText=el.title;
    let image=document.createElement("img");
    image.src=el.Image;
    div.append(image)
    box.append(div,titles)
    brand.append(box);
});

};
//brands(arr_of_images5);

function sliding(left,right){
    let main=document.getElementById("trending");
    main.innerHTML=null;
  for(let i=left;i<=right;i++){
    let div=document.createElement("div")
    div.setAttribute("class","cards")
     let box=document.createElement("div")
     box.addEventListener("click",function(){
         submit(arr_of_images5[i])
     });
     let images=document.createElement("img");
     images.src=arr_of_images5[i].Image;
     div.append(images);
     let price=document.createElement("p");
     price.innerText=arr_of_images5[i].title;
     box.append(div,price);
     main.append(box);

 }
}
sliding(left,right);
 function leftSlide(){

    if(left==0){
        return;
    }else{
        right=right-6;
        left=left-6;
        sliding(left,right)
    }

}

function rightSlide(){

    if(right>5){
        return;

    }
    else{

    left=left+6;
    right=right+6;
    sliding(left,right);
    }

}
