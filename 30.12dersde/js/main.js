
var elen = document.querySelector("bottom i");
var btn = document.querySelector("button");
btn.addEventListener("click",function(){
  this.nextElementSibling.classList.toggle("tom");
});