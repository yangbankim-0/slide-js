// flow
// slide 전체의 넓이를 알아내서 그 넓이에서 왼쪽으로 item의 width 만큼  왼쪽(-)으로 이동
const slideList = document.querySelector('.slide-list')
const slideItem = document.querySelectorAll(".slide-item"); // slide list item
const slideItemLength = slideItem.length //slide 갯수
const slideWidth = 600; // slide 하나의 width 
 // slide width 총 길이 3600

slideList.style.width = slideWidth * slideItemLength + "px";

let currentIndex = 0;

// slide next button
const nextBtn = document.querySelector(".slide_btn_next");

//slide left button
const prevtBtn = document.querySelector(".slide_btn_prev");

function nextBtnClick(){ // next button click event
    // 오른쪽 버튼을 누르면 슬라이드가 왼쪽으로 이동 : 아이템 하나의 요소가 아니라, slide-list 전체가 움직여야함 
    if(currentIndex <= (slideItemLength - 2)){ 
        slideList.style.transform = "translate(-"+ slideWidth * (currentIndex + 1) +"px)";
    }
    if(currentIndex !== slideItemLength - 1){ 
        ++currentIndex;
    }
}

function prevBtnClick(){
    console.log(currentIndex);
    if(currentIndex >= 0){
        slideList.style.transform = "translate(-" + slideWidth * (currentIndex - 1) + "px)"; 
    }

    if(currentIndex !== 0){ 
        --currentIndex;
    }
}

function init(){
    nextBtn.addEventListener("click",nextBtnClick);
    prevtBtn.addEventListener("click", prevBtnClick);
}

init();



