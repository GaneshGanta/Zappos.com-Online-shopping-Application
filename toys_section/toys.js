let toys=[{image:"https://m.media-amazon.com/images/I/81B9UHWyMiL._AC_SR768,1024_.jpg",
name:"Manhattan Toy Manhattan Toy Moppettes Bea Bear Stuffed Animal Nurturing Playset with Bear Plush Toy"
},
{image:"https://m.media-amazon.com/images/I/71bKgIkbNXL._AC_SR768,1024_.jpg",
name:"Manhattan Toy Manhattan Toy Little Jurassics Chomp Dinosaur Stuffed Animal"},
{image:"https://m.media-amazon.com/images/I/71F3b8EeynL._AC_SR768,1024_.jpg",
name:"Melissa & Doug Melissa & Doug On The Go Water Wow! Reusable Water-Reveal Deluxe Activity Pad"},
{image:"https://m.media-amazon.com/images/I/815N1bYPccL._AC_SR768,1024_.jpg",
name:"LEGO LEGO DC Batman Batmobile Tumbler: Scarecrow Showdown 76239 (422 Pieces)"},
{image:"https://m.media-amazon.com/images/I/812pjfDOsRL._AC_SR768,1024_.jpg",
name:"LEGO LEGO City Chicken Stunt Bike 60310 Building Kit; Fun Cool Toy for Kids (10 Pieces)"},
{image:"https://m.media-amazon.com/images/I/81+-XbOIPeL._AC_SR768,1024_.jpg",
name:"LEGO LEGO Disney Encanto The Madrigal House 43202 Building Kit; Kids Who Love Construction Toys and House Play (587 Pieces)"},
{image:"https://m.media-amazon.com/images/I/71jMCiYhDeL._AC_SR768,1024_.jpg",
name:"LEGO LEGO City Stunt Competition 60299 Building Kit (73 Pieces)"},
{image:"https://m.media-amazon.com/images/I/81Ai9MzqnLL._AC_SR768,1024_.jpg",
name:"Ravensburger Ravensburger Universal Back to The Future Game Strategy Game for Ages 10 & Up"},
{image:"https://m.media-amazon.com/images/I/819hi2UK7PL._AC_SR768,1024_.jpg",
name:"LEGO LEGO City Stunt Park 60293 Building Kit (170 Pieces)"},
{image:"https://m.media-amazon.com/images/I/710VRkFD-zL._AC_SR768,1024_.jpg",
name:"LEGO LEGO City Selfie Stunt Bike 60309 Building Kit; Fun Selfie Stick Stunt Bike Toy for Kids (14 Pieces)"},
{image:"https://m.media-amazon.com/images/I/514wwvpKs6L._AC_SR768,1024_.jpg",
name:"LEGO LEGO City Demolition Stunt Bike 60297 Building Kit (12 Pieces)"},
{image:"https://m.media-amazon.com/images/I/81zEkx-778L._AC_SR768,1024_.jpg",
name:"LEGO LEGO City Fire Stunt Bike 60311 Building Kit; Fun, Cool Toy for Kids (11 Pieces)"},
{image:"https://m.media-amazon.com/images/I/71Tj7A1U1YL._AC_SR768,1024_.jpg",
name:"LEGO LEGO City Rocket Stunt Bike 60298 Building Kit (14 Pieces)"},
{image:"https://m.media-amazon.com/images/I/61Rs9CT9nAL._AC_SR768,1024_.jpg",
name:"Manhattan Toy Manhattan Toy Wimmer-Ferguson Crinkle Tiger Baby Sensory Toy with Ribbon Tags"},
{image:"https://m.media-amazon.com/images/I/61QCbKRypGL._AC_SR768,1024_.jpg",
name:"Manhattan Toy Manhattan Toy Woodlanders Bella Owl Stuffed Animal"},
{image:"https://m.media-amazon.com/images/I/61nlrSKsnPL._AC_SR768,1024_.jpg",
name:"Manhattan Toy Manhattan Toy Little Nook Stuffed Animal with Removable Clothing, Sleeping Bag & Keepsake Box"},
{image:"https://m.media-amazon.com/images/I/71YghW90kyL._AC_SR768,1024_.jpg",
name:"Manhattan Toy Manhattan Toy Musical Forest Trio 3 Piece Wooden Toy Set for Toddlers with Bear Rattle, Llama Clacker & Hedgehog Guiro"},
{image:"https://m.media-amazon.com/images/I/81MGmkS1h6L._AC_SR768,1024_.jpg",
name:"Manhattan Toy Manhattan Toy Squeezmeez Squeezable"},
{image:"https://m.media-amazon.com/images/I/71jjpXR0xEL._AC_SR768,1024_.jpg",
name:"Manhattan Toy Manhattan Toy Little Jurassics Stuffed Animal"},
{image:"https://m.media-amazon.com/images/I/61qxH8x6xkL._AC_SR768,1024_.jpg",
name:"Manhattan ToyLloyd"}
]
let append=()=>{
let div=document.querySelector("#maintoys")
div.innerHTML=null;
toys.forEach(function(el){
    let card=document.createElement("div")
    let image=document.createElement("img")
    image.setAttribute("id","img")
    image.src=el.image;
    let name=document.createElement("h3")
    name.innerText=el.name
    let price=document.createElement("h4")
    price.innerText=`$${Math.floor(Math.random()*100)}`
card.append(image,name,price)
div.append(card)
})
}
append()
import navbar from "../navbar/components/navbar.js"
document.getElementById("navbar").innerHTML=navbar()
import footer from "../navbar/components/footer.js"
document.getElementById("foot").innerHTML=footer()


let size=document.createElement("div")
  document.querySelector("#Wsize").addEventListener("click",function(){
     let div= document.querySelector("#Wsize")
    
 
   
     size.innerHTML=null
     size.setAttribute("class", "bargrid")
     size.innerHTML=`<div>5</div> <div>5.5</div><div>6</div><div>6.5</div> <div>7</div> <div>7.5</div><div>8</div><div>8.5</div> <div>9</div> <div>9.5</div><div>10</div><div>10.5</div> <div>11</div> <div>11.5</div><div>12</div><div>12.5</div>`
     div.append(size)
  })
 
    
 
 let size1=document.createElement("div")
 document.querySelector("#Msize").addEventListener("click", function(){
     let div= document.querySelector("#Msize")
    
 
     
     size1.innerHTML=null
 
     size1.setAttribute("class", "bargrid")
 
     size1.innerHTML=`<div>5</div> <div>5.5</div><div>6</div><div>6.5</div> <div>7</div> <div>7.5</div><div>8</div><div>8.5</div> <div>9</div> <div>9.5</div><div>10</div><div>10.5</div> <div>11</div> <div>11.5</div><div>12</div><div>12.5</div>`
     div.append(size1)
 })
  let width=document.createElement("div")
  document.querySelector("#Wwidth").addEventListener("click", function(e) {
  
 width.innerHTML=null
 let div= document.querySelector("#Wwidth")
 width.setAttribute("class", "bargrid")
 width.innerHTML=`<div>N</div> <div>M</div><div>W</div><div>2A</div> <div>B</div> <div>D</div>`
 div.append(width)
 })
 let width2=document.createElement("div")
 document.querySelector("#Mwidth").addEventListener("click", function() {
 
 
     let div= document.querySelector("#Mwidth")
  
    
     width2.innerHTML=null
     width2.setAttribute("class", "bargrid")
 
     width2.innerHTML=`<div>N</div> <div>M</div><div>W</div><div>2A</div> <div>B</div> <div>D</div>`
     div.append(width2)
 })
 let div=document.createElement("div")
 document.querySelector("#gender").addEventListener("click", function(){
     let gender=document.querySelector("#gender")
   
     div.setAttribute("id", "mW")
 
     div.innerHTML=null
     div.innerHTML=`<div>Male (180)</div> <div>Female(228)</div`
     gender.append(div)
 })
 let brand=document.createElement("div")
 document.querySelector("#brand").addEventListener("click", function(){
 let div=document.querySelector("#brand")
 brand.innerHTML=null;
 brand.innerHTML=`<input type="checkbox" id="brand1" name="brand1">
 <label for="brand1">42 GOLD (1)</label><br>
 <input type="checkbox" id="brand2" name="brand2">
 <label for="brand2">5.11 Tactical (9)</label><br>
 <input type="checkbox" id="brand3" name="brand3">
 <label for="brand3">A.S. 98 (2)</label><br>
 <input type="checkbox" id="brand4" name="brand4">
 <label for="brand4">ACE work Boots (6)</label><br>
 <input type="checkbox" id="brand5" name="brand5">
 <label for="brand5">ADIDAS (1008)</label><br>
 <input type="checkbox" id="brand6" name="brand6">
 <label for="brand6">AGL(456)</label><br>
 <input type="checkbox" id="brand7" name="brand7">
 <label for="brand7">ASTRAL (234)</label><br>
 <input type="checkbox" id="brand8" name="brand8">
 <label for="brand8">ASH (35)</label><br>
 <input type="checkbox" id="brand9" name="brand9">
 <label for="brand9">US POLO (1)</label><br>
 <input type="checkbox" id="brand10" name="brand10">
 <label for="brand10">NIKE (9)</label><br>
 <input type="checkbox" id="brand11" name="brand11">
 <label for="brand11">FM (2)</label><br>
 <input type="checkbox" id="brand12" name="brand12">
 <label for="brand12">Reebok (6)</label><br>
 <input type="checkbox" id="brand14" name="brand14">
 <label for="brand14">ZARA (1008)</label><br>
 <input type="checkbox" id="brand15" name="brand15">
 <label for="brand15">LIBERTY(4456)</label><br>
 <input type="checkbox" id="brand16" name="brand16">
 <label for="brand16">BATA (234)</label><br>
 <input type="checkbox" id="brand17" name="brand17">
 <label for="brand17">COBB (35)</label><br><input type="checkbox" id="brand1" name="brand1">
 <label for="brand1">42 GOLD (1)</label><br>
 <input type="checkbox" id="brand2" name="brand2">
 <label for="brand2">5.11 Tactical (9)</label><br>
 <input type="checkbox" id="brand3" name="brand3">
 <label for="brand3">A.S. 98 (2)</label><br>
 <input type="checkbox" id="brand4" name="brand4">
 <label for="brand4">ACE work Boots (6)</label><br>
 <input type="checkbox" id="brand5" name="brand5">
 <label for="brand5">ADIDAS (1008)</label><br>
 <input type="checkbox" id="brand6" name="brand6">
 <label for="brand6">AGL(456)</label><br>
 <input type="checkbox" id="brand7" name="brand7">
 <label for="brand7">ASTRAL (234)</label><br>
 <input type="checkbox" id="brand8" name="brand8">
 <label for="brand8">ASH (35)</label><br>
 <input type="checkbox" id="brand9" name="brand9">
 <label for="brand9">US POLO (1)</label><br>
 <input type="checkbox" id="brand10" name="brand10">
 <label for="brand10">NIKE (9)</label><br>
 <input type="checkbox" id="brand11" name="brand11">
 <label for="brand11">FM (2)</label><br>
 <input type="checkbox" id="brand12" name="brand12">
 <label for="brand12">Reebok (6)</label><br>
 <input type="checkbox" id="brand14" name="brand14">
 <label for="brand14">ZARA (1008)</label><br>
 <input type="checkbox" id="brand15" name="brand15">
 <label for="brand15">LIBERTY(4456)</label><br>
 <input type="checkbox" id="brand16" name="brand16">
 <label for="brand16">BATA (234)</label><br>
 <input type="checkbox" id="brand17" name="brand17">
 <label for="brand17">COBB (35)</label><br>`
 div.append(brand)
 })
 let cat=document.createElement("div")
 document.querySelector("#cat").addEventListener("click", function(){
     let div=document.querySelector("#cat")
     cat.innerHTML=null;
     cat.innerHTML=`Running Shoes(262)
     Athletic Shoes(46)
     Lifestyle Sneakers(1)`
     div.append(cat)
 })
 let c=document.createElement("div")
 document.querySelector("#color").addEventListener("click", function(){
 let div=document.querySelector("#color")
    c.innerHTML=null;
     c.innerHTML=`<input type="text" id="search" placeholder="Search Color"><br>
     <input type="checkbox" id="c1" name="c1">
     <label for="c1">GOLDEN (11)</label><br>
     <input type="checkbox" id="c2" name="c2">
     <label for="c2">BLACK (9)</label><br>
     <input type="checkbox" id="c3" name="c3">
     <label for="c3">BLUE (2)</label><br>
     <input type="checkbox" id="c4" name="c4">
     <label for="c4">GREEN (11)</label><br>
     <input type="checkbox" id="c5" name="c5">
     <label for="c5">ORANGE (9)</label><br>
     <input type="checkbox" id="c6" name="c6">
     <label for="c6">RED (2)</label><br>
     <input type="checkbox" id="c7" name="c7">
     <label for="c7">PINK (11)</label><br>
     <input type="checkbox" id="c8" name="c8">
     <label for="c8">PURPLE (9)</label><br>
     <input type="checkbox" id="c9" name="c9">
     <label for="c9">YELLOW (2)</label><br>
     <input type="checkbox" id="c10" name="c10">
     <label for="c10">GREY (11)</label><br>
     <input type="checkbox" id="c11" name="11">
     <label for="c11">BROWN (9)</label><br>
     <input type="checkbox" id="c12" name="c12">
     <label for="c12">NAVY (2)</label><br>`
     div.append(c)
 })
 let div1=document.createElement("div")
 document.querySelector("#price").addEventListener("click", () => {
     let price=document.querySelector("#price")
     div1.innerHTML=null;
     div1.innerHTML=`$50 and Under(16)<br>
     $100 and Under(161)<br>
     $200 and Under(309)<br>`
     price.append(div1)
 })
 let feature=document.createElement("div")
 document.querySelector("#features").addEventListener("click", () => {
     let div=document.querySelector("#features")
     features.innerHTML=null;
     feature.innerHTML=`<input type="checkbox" id="c1" name="c1">
     <label for="c1">LIGHTWEIGHT (11)</label><br>
     <input type="checkbox" id="c2" name="c2">
     <label for="c2">REFLECTIVE (9)</label><br>
     <input type="checkbox" id="c3" name="c3">
     <label for="c3">NON MARKETING (2)</label><br>
     <input type="checkbox" id="c4" name="c4">
     <label for="c4">SEAMLESS(11)</label><br>
     <input type="checkbox" id="c5" name="c5">
     <label for="c5">WATER RESISTANT (9)</label><br>
     <input type="checkbox" id="c6" name="c6">
     <label for="c6">WATERPROOF (2)</label><br>`
     div.append(feature)
 })
 let closure=document.createElement("div")
 document.querySelector("#closures").addEventListener("click",function() {
     let div=document.querySelector("#closures")
     closure.innerHTML=null;
     closure.innerHTML=`<input type="checkbox" id="c1" name="c1">
     <label for="c1">Lace up(298) </label><br>
     <input type="checkbox" id="c2" name="c2">
     <label for="c2">Bungee (2)</label><br>
     <input type="checkbox" id="c3" name="c3">
     <label for="c3">Toggle (2)</label><br></br>`
     div.append(closure)
 })
 let shoe1=document.createElement("div")
 document.querySelector("#shoe").addEventListener("click",function(e) {
     let div=document.querySelector("#shoe")
   shoe1.innerHTML=null;
   shoe1.innerHTML=`<input type="checkbox" id="c1" name="c1">
   <label for="c1">6-10oz(231) </label><br>
   <input type="checkbox" id="c2" name="c2">
   <label for="c2">11-15oz (62)</label><br>`
 div.append(shoe1)
 })