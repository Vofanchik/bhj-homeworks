const imgCookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");

const widthBefore = Number(imgCookie.width);
let clickCounter = 0;



const clickCookie = () => {
        clickCounter+=1;
        clickerCounter.textContent=clickCounter;
        
        if (clickCounter%2!=0) {
            changeSizes();
        }
        else {changeSizesBack()};        
    }

function changeSizes() {
    imgCookie.width = 250;
    };

function changeSizesBack() {
    imgCookie.width = widthBefore;
    };
    
imgCookie.onclick = clickCookie;
