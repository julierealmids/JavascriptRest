document.body.style.backgroundColor="silver";
document.getElementById("title").style.color="green";
r
let div=document.getElementById("vegList");
console.log(div);
let newvegetables = document.createElement("li")
let newveg=document.createTextNode("Cabbage");
newvegetables.appendChild(newveg);
div.appendChild(newvegetables);

let div2=document.getElementById("fruList");
console.log(div2);
let newfruits=document.createElement("li")
let newfruit=document.createTextNode("Apples");
newfruits.appendChild(newfruit);
div2.appendChild(newfruits);

var img =document.createElement("img")
img.src="images/bananas.jpeg"
var id=document.getElementById("b")
id.appendChild(img)
// id.setAttribute("style","text-align:center")

var imgz =document.createElement("img")
imgz.src="images/mangoeds.jpeg"

var idz=document.getElementById("m")
idz.appendChild(imgz)

var imgs =document.createElement("img")
imgs.src="images/watermelon.jpeg"
var ids=document.getElementById("wm")
ids.appendChild(imgs)

var image =document.createElement("img")
image.src="images/aplles.jpeg"
newfruits.appendChild(image)

var vegimg =document.createElement("img")
vegimg.src="images/onions.jpeg"
var id=document.getElementById("o")
id.appendChild(vegimg) 
// id.setAttribute("style","text-align:center")

var vegimgz =document.createElement("img")
vegimgz.src="images/tomatoes.jpeg"
var idz=document.getElementById("t")
idz.appendChild(vegimgz)

var vegimgs =document.createElement("img")
vegimgs.src="images/kales.jpeg"
var ids=document.getElementById("k")
ids.appendChild(vegimgs)

vegimage.src="images/cabbage.jpeg"
newvegetables.appendChild(vegimage)

const upper=document.getElementsByClassName("matunda")
for(let a=0;a<=upper.length;a++){
    upper[a].style.textTransform="uppercase"
}

