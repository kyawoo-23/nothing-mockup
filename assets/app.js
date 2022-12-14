let paths = document.querySelectorAll('path');
let svgImg = document.querySelector('.svg-img');
let colorImg = document.querySelector('.color-img');
let mainTitle = document.querySelector('.main-title');

scrollAnimation()
document.addEventListener('scroll', scrollAnimation)

function scrollAnimation() {

    // calculation method when scrolling within an element
    // let height = scroller.clientHeight;
    // let scrollHeight = scroller.scrollHeight - height;
    // let scrollTop = scroller.scrollTop;
    // let percent = Math.floor(scrollTop / scrollHeight * 100);

    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    // fill svg paths
    for (var i = 0; i < paths.length; i++) {
        let path = paths[i];
        let pathLength = path.getTotalLength();
        path.style.strokeDasharray = pathLength;
        path.style.strokeDashoffset = pathLength;
        let drawLength = pathLength * scrollPercentage;
        path.style.strokeDashoffset = pathLength - drawLength;
    }

    if (scrollPercentage === 0) {
        mainTitle.style.opacity = 1;
    } else if (scrollPercentage > 0.98) {
        svgImg.style.opacity = 0;
        colorImg.style.opacity = 1;
        colorImg.style.transform = "scale(1)";
    } else {
        mainTitle.style.opacity = 0;
        svgImg.style.opacity = 1;
        colorImg.style.opacity = 0;
        colorImg.style.transform = "scale(.9)";
    }
}
