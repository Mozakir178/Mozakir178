let a = document.querySelectorAll('#num>div');
for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("click", cal);
}
let bag = "";

function cal(event) {
    let a = event.target.innerHTML;
    if (a === "=") {
        if (bag === "") {
            bag = "";
        } else {
            bag = eval(bag);
            bag = parseFloat(bag).toFixed(2);
        }

    } else if (a === "C") {
        bag = "";
    } else if (a === "BACK") {
        bag = bag.substring(0, bag.length - 1)
    } else
        bag += a;

    console.log(bag)
    document.getElementById("dis").innerText = bag;

}





console.log("yes")