var arrowLeft = document.querySelector(".fa-arrow-left");
var arrowRight = document.querySelector(".fa-arrow-right");

var images = document.querySelectorAll(".divForImages img");
// var count = 0;

arrowLeft.addEventListener("click", function () {
    for (var i = 0; i < images.length; i++) {

        if (images[i].classList.contains("active")) {

            images[i].classList.remove("active");
            images[i].classList.add("forRight1");
            images[i].previousElementSibling.classList.add("active");
            images[i].previousElementSibling.classList.remove("forRight2");
            images[i].previousElementSibling.previousElementSibling.classList.add("forRight2");
            if(images[i].nextElementSibling.classList.contains("forRight1")){
                images[i].nextElementSibling.classList.remove("forRight1")
            }
            
            // images[i].previousElementSibling.classList.add("forRight1");
            // console.log(images[i].classList.contains("active"));
            
            // images[i].classList.remove("active");
            // images[i].nextElementSibling.classList.add("active");
            // images[i].style.position = "absolute"
            // images[i].style.left = "-992px";
            // images[i].nextElementSibling.style.animation = "mymove 5s";
            // images[i].offsetLeft="1310px";
            // images[i].nextElementSibling.style.position="absolute"
            // images[i].nextElementSibling.offsetLeft="150px"

            // console.log(images[i].offsetLeft);
            // console.log("if isleyor");
            // console.log(images);

            return
        }
    }

    console.log("salam");
})


arrowRight.addEventListener("click", function () {
    for (var i = 0; i < images.length; i++) {

        if (images[i].classList.contains("active")) {

            images[i].classList.remove("active");
            images[i].classList.add("forRight1");
            images[i].previousElementSibling.classList.add("active");
            images[i].previousElementSibling.classList.remove("forRight2");
            images[i].previousElementSibling.previousElementSibling.classList.add("forRight2");
            if(images[i].nextElementSibling.classList.contains("forRight1")){
                images[i].nextElementSibling.classList.remove("forRight1")
            }
            
            

            // images[i].previousElementSibling.classList.add("forRight1");
            
            
            
            // console.log(images[i].classList.contains("active"));
            
            // images[i].classList.remove("active");
            // images[i].nextElementSibling.classList.add("active");
            // images[i].style.position = "absolute"
            // images[i].style.left = "-992px";
            // images[i].nextElementSibling.style.animation = "mymove 5s";




            // images[i].offsetLeft="1310px";
            // images[i].nextElementSibling.style.position="absolute"
            // images[i].nextElementSibling.offsetLeft="150px"

            // console.log(images[i].offsetLeft);
            // console.log("if isleyor");
            // console.log(images);

            return
        }
    }

    console.log("salam");
})