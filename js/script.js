// 1. select and console.log this element
// with click
document.getElementById("get-to-log").addEventListener("click", function (event) {
    // console.log(event.target);
});

// without click
const element = document.getElementById("get-to-log");
// console.log(element);
// console.log(element.outerHTML);

// 2 . click to change title / text
document.getElementById("click-to-cng-title").addEventListener("click", function () {
    const changeableTitle = document.getElementById("changeable-title");
    changeableTitle.innerText = "I AM PENGUIN";
});