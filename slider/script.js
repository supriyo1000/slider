let flag = 0;
slideshow(flag)
function controller(x){
    flag = flag + x;
    slideshow(flag);
}
function slideshow(num){
    let slide = document.getElementsByClassName("slides");
    if(num == slide.length){
        flag = 0;
        num = 0;
    }
    if(num < 0){
        flag = slide.length -1;
        num = slide.length -1;
    }

    for(let y of slide){
        y.style.display= "none";
    }
    slide[num].style.display = "block";
}