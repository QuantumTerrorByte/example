const button = document.querySelector("#button");
const button2 = document.querySelector("#button2");

function trackMousePosition(e) {
    button2.innerHTML = "Y: " + e.clientY + " X: " + e.clientX
}

button.addEventListener("mousedown", (e) => {
    document.addEventListener("mousemove", trackMousePosition)
})

document.addEventListener("mouseup", (e) => {
    document.removeEventListener("mousemove", trackMousePosition)
})




//
// const counterStr = "Counter";
// let counter = 0;
// concatination();
//
// function concatination(){
//     button.innerHTML = counterStr + " " + ++counter;
// }
//
// function increment(e) {
//     concatination();
// }
//
// button.addEventListener("click", increment);


// button2.addEventListener("click", alertHelloJSON);
// // button.removeEventListener("click", increment)
// const button2 = document.querySelector("#button2");
// console.log(button)
// // document.addEventListener("mousemove", (e) => {
// //     console.log(e.clientX)
// //     console.log(e.clientY)
// // })
//
//
// const example = {
//     name: " name",
//     age: 15,
//     address: {
//         street: "polyarna",
//         house: "5a"
//     }
// }
//
//
// const alertHelloJSON = e => {
//     alert(JSON.stringify(example));
// }
