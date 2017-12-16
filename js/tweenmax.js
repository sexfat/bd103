$(function () {


//第一個物件
    TweenMax.fromTo(".box", 1, {
        x: -10,
        y: -20,
        opacity: 0
    }, {
        x: 0,
        y:0,
        opacity: 1,
        delay: 2,
        ease: Bounce.easeOut
    });


//第二個物件

TweenMax.fromTo(".box2", 1, {
    x: -10,
    opacity: 0
}, {
    x: 0,
    opacity: 1,
    delay: 4
    ease: Bounce.easeOut
});

















})