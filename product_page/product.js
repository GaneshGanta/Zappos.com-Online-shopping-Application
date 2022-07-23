let arr=JSON.parse(localStorage.getItem("productInfo"))||[]


import main from "../product_page/component/importp.js"

document.querySelector("#main").innerHTML=main();

// import product_data from "../product-data-2/components/p2.js";

// document.getElementById("main-2").innerHTML=product_data();

document.querySelector("#in").addEventListener("click",function(e) {
    document.querySelector("#r").innerHTML=` <p>
    View the size chart
    <ul>
    <li> Move forward from others, wearing soft and breathable Keds® Triple Up Canvas Wave Foxing footwear.
    Textile upper.</li>
    <li> Textile lining.</li>
    <li>  Softerra™ footbed.</li>
    <li> Round toe.</li>
    <li> Lace closure.</li>
   <li> Branding at collar, outsole, and insole.</li>
    <li> Wavy high platform.</li>
    <li> Synthetic outsole.</li>
    <li> Imported.</li>
    <li> Product measurements were taken using size 9, width B - Medium. Please note that measurements may vary by size.
    Weight of footwear is based on a single item, not a pair.</li>
    <li>You're sure to stun with the XSCAPE Long Scuba Off-the-Shoulder Dress!</li>
    <li>Figure-skimming gown features asymmetric ruching at bodice and asymmetric ruffle detail at left hip.</li>
    <li>Full-length skirt with straight hem.</li>
    <li>Ruched detailing and zip closure at center back.</li>
    <li>95% polyester, 5% spandex.</li>
    <li>Dry clean.</li>
    <li>Imported.</li>
    Measurements:
    <li>Length: 56 in</li>
    <li>Length: 56 in</li>
    <li>Product measurements were taken using size 4. Please note that measurements may vary by size.</li>
    <li>Measurements:</li>
    <li>Length: 61½ in.</li>
</ul>
<div id="in">
<h3 >Read Less</h3>
<div>
</p>`
document.querySelector("#in").addEventListener("click", function(e) {
    document.querySelector("#r").innerHTML=`   <h3>Product Information</h3>
    <img src="https://www.zappos.com/boutiques/5678/Xscape_header102921.gif" alt=""><br>
    <p>
    View the size chart
    <ul>
    <li> Move forward from others, wearing soft and breathable Keds® Triple Up Canvas Wave Foxing footwear.
    Textile upper.</li>
    <li> Textile lining.</li>
    <li>  Softerra™ footbed.</li>
    <li> Round toe.</li>
    <li> Lace closure.</li>
   <li> Branding at collar, outsole, and insole.</li>
    <li> Wavy high platform.</li>
    <li> Synthetic outsole.</li>
    <li> Imported.</li>
    <li> Product measurements were taken using size 9, width B - Medium. Please note that measurements may vary by size.
    Weight of footwear is based on a single item, not a pair.</li>
</ul>`
window.location.reload()
})
})
let cart=JSON.parse(localStorage.getItem('cart'))
let count=0;
document.getElementById("cartbutton").addEventListener("click", function(e) {
count++;
localStorage.setItem('items', JSON.stringify(count))
})