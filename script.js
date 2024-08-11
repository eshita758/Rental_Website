let mainPage = document.querySelector(".mainPage");
let category1 = document.querySelector(".category1");
let category2 = document.querySelector(".category2");
let aboutPage = document.querySelector(".about");
let contactus = document.querySelector(".contact");


function home() {
   mainPage.style.display = "flex";
   category1.style.display = "block";
   category2.style.display = "block";
   contactus.style.display="none"
   
   document.getElementById("shop").style.color = "black";
   document.getElementById("home").style.color = "rgb(1, 190, 190)";
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color="black";
}


function shop() {
   category1.style.display = "block";
   category2.style.display = "block";
   mainPage.style.display = "none"
   aboutPage.style.display = "none";
   contactus.style.display="none"
   
   document.getElementById("about").style.color = "black";
   document.getElementById("shop").style.color = "rgb(1, 190, 190)"
   document.getElementById("home").style.color = "black"
   document.getElementById("contact").style.color="black";
}


function about() {
   aboutPage.style.display = "block";
   category1.style.display = "none";
   category2.style.display = "none";
   mainPage.style.display = "none";
   contactus.style.display="none";

   document.getElementById("home").style.color = "black"
   document.getElementById("shop").style.color = "black";
   document.getElementById("about").style.color = "rgb(1, 190, 190)"
   document.getElementById("contact").style.color="black";
}


function contact() {
   contactus.style.display="block";
   aboutPage.style.display = "none";
   category1.style.display = "none";
   category2.style.display = "none";
   mainPage.style.display = "none";
   document.getElementById("home").style.color = "black";
   document.getElementById("shop").style.color = "black";
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color="rgb(1, 190, 190)"

} 


// Add to Cart

function addItem(){
   document.querySelector(".addCart").style.display="block";
   contactus.style.display="none";
   aboutPage.style.display = "none";
   category1.style.display = "none";
   category2.style.display = "none";
   mainPage.style.display = "none";
}
 
