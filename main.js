let i = 0; // current slide
let j = 3; // total slides

const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".view-content ul");

function next(){
    document.getElementById("slides" + (i+1)).classList.remove("active");
    i = ( j + i + 1) % j;
    document.getElementById("slides" + (i+1)).classList.add("active");
    indicator( i+ 1 );
}

function prev(){
    document.getElementById("slides" + (i+1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("slides" + (i+1)).classList.add("active");
    indicator(i+1);
}

function indicator(num){
    dots.forEach(function(dot){
        dot.style.backgroundColor = "#ccc";
    });
    document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor = "#fff";
}

function dot(index){
    images.forEach(function(image){
        image.classList.remove("active");
    });
    document.getElementById("slides" + index).classList.add("active");
    i = index - 1;
    indicator(index);
}

//show and hide

function open_menu() {
    document.getElementById("myOpen").style.display = "block";
}
  
function close_menu() {
    document.getElementById("myOpen").style.display = "none";
}

//Hover Button 

var obj = document.getElementById("hvbtn");
hvbtns.addEventListener(function(hvbtn){
    hvbtn.style.backgroundColor = "rgba(0,142,132,.9)";N
});


//Auto Slide

// var slideIndex = 0;
// showSlides();

// function showSlides () {
//     var i;
//     var slides = document.getElementsByClassName("slide");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display="block";
//     }
//     slideIndex++;
//     if (slideindex > slides.length) {
//         slideIndex = 1;
//     }
//     slides[slideIndex - 1].style.display = "none";
//     setTimeout(showSlides, 2000); 
// }

