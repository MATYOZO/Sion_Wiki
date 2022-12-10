let img = document.querySelector("#img");
let audio = new Audio("audio/sion.mp3");
let myBtn = document.querySelector("#myBtn");
let left = document.querySelector("#left");
let right = document.querySelector("#right");
let right_border = document.querySelector("#right_border");
let skin_napis = document.querySelector("#contact");
let skiny_ul = document.querySelector("#contact_content");

img.addEventListener('click', ()=>{
    audio.play();
});

myBtn.addEventListener('click', ()=>{
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
      
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Pokaz więcej";
        moreText.style.display = "none";
        left.style.height = "170vh";
        right.style.height = "170vh";
        right_border.style.height = "170vh";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Pokaz mniej";
        moreText.style.display = "inline";
        left.style.height = "250vh";
        right.style.height = "250vh";
        right_border.style.height = "250vh";
    }
    
});
skin_napis.addEventListener('click', ()=>{
    if(skiny_ul.style.display === "none")
    {
        skiny_ul.style.display = 'inherit';
        left.style.height = "190vh";
        right.style.height = "190vh";
        right_border.style.height = "190vh";
    }
    else{
        skiny_ul.style.display = 'none';
        left.style.height = "170vh";
        right.style.height = "170vh";
        right_border.style.height = "170vh";
    }
});