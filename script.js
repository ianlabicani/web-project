const nextBtn = document.getElementById("btn-next");
const prevBtn = document.getElementById("btn-prev");
const imgEl = document.getElementById("img-el");
console.log(imgEl.src)
nextBtn.addEventListener("click", (e) => changeImgSrc(e));
prevBtn.addEventListener("click", (e) => changeImgSrc(e));

let imgNumber = 1;
function changeImgSrc(e) {
    const sign = e.currentTarget.textContent;
    if (sign == "<") {
        if (imgNumber > 1) {
            imgNumber--;
        } else {
            imgNumber = 9;
        }
    } else if (sign == ">"){
        if (imgNumber < 9) {
            imgNumber++;
        } else {
            imgNumber = 1;
        }
    }
    imgEl.src = "./img/Teachers/" + imgNumber +".png";
    console.log()
}