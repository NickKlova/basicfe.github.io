const ninth = document.getElementById("ninthElement");
const tenth = document.querySelector(".tenthElement");

let changeColorsById = () => {
    ninth.style.background = randomColor();
    ninth.style.color = randomColor();
};

let changeColorsByQuerySelector = () => {
    tenth.style.background = randomColor();
    tenth.style.color = randomColor();
};

const a_img = document.querySelector(".a_img");
const img = document.getElementById("img");
const div = document.querySelector(".images");
const images = [];
images.push(img);

function addImg() {
    if (images.length > 2) {
        alert("Тільки 2 елементи можна додати!");
        return false;
    }
    let newImg = document.createElement("img");
    newImg.id = createGuid();
    newImg.src = img.src;
    newImg.alt = img.alt;
    newImg.clientWidth = img.clientWidth;
    div.appendChild(newImg);
    images.push(newImg);
}

function zoomIn() {
    let image = images[images.length - 1];
    let currImage = document.getElementById(image.id);
    let currWidth = currImage.clientWidth;
    if (currWidth == 3000) return false;
    currImage.style.width = (currWidth + 100) + "px";
}

function zoomOut() {
    let image = images[images.length - 1];
    let currImage = document.getElementById(image.id);
    let currWidth = currImage.clientWidth;
    if (currWidth == 300) return false;
    currImage.style.width = (currWidth - 100) + "px";
}

function delImg() {
    let image = images[images.length - 1];
    let currImage = document.getElementById(image.id);
    images.pop();
    currImage.remove();
}

function randomNum() {
    return Math.floor(Math.random() * 255);
}
function randomColor() {
    return 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
}
function createGuid() {  
    function _p8(s) {  
       var p = (Math.random().toString(16)+"000000000").substring(2,8);  
       return s ? "-" + p.substring(0,4) + p.substring(4,4) : p ;  
    }  
    return _p8() + _p8(true) + _p8(true) + _p8();  
 }  