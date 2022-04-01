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

var a;
function show_hide()
{
    if (a == 1)
    {
        document.getElementById("subnav").style.display="block";
        return a = 0;
    }else{
        document.getElementById("subnav").style.display="none";
        return a = 1;
    }
}

var b;
function show_menu()
{
    if (b == 1)
    {
        document.getElementById("list").style.display="block";
        return b = 0;
    }else{
        document.getElementById("list").style.display="none";
        return b = 1;
    }
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