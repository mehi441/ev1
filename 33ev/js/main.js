var buttonStyle = document.querySelector(".buttonStyle");

var outputIl = document.querySelector(".outputIl");
var outputGun = document.querySelector(".outputGun");
var outputSaat = document.querySelector(".outputSaat");
var outputDeqiqe = document.querySelector(".outputDeqiqe");
var outputSaniye = document.querySelector(".outputSaniye");

var inputIl = document.querySelector(".il");
var inputAy = document.querySelector(".ay");
var inputGun = document.querySelector(".gun");

buttonStyle.addEventListener("click", function () {
    if (inputIl.value < 1900 || inputIl.value >= 2021) {
        alert("il duzgun sec!!");
    } else if (inputAy.value <= 0 || inputAy.value > 12) {
        alert("ayi duzgun sec");
    }
    else if (inputGun.value <= 0 || inputGun.value > 31) {
        alert("gunu duzgun sec");

    } else {

        setInterval(countvaxt, 1000);
    }

});

function countvaxt() {
    var tm = new Date();
    var inputData = new Date(year = inputIl.value, month = (inputAy.value - 1), date = inputGun.value);

    outputIl.innerHTML = Math.floor((tm.getTime() - inputData.getTime()) / 1000 / 60 / 60 / 24 / 365);
    outputGun.innerHTML = Math.floor((tm.getTime() - inputData.getTime()) / 1000 / 60 / 60 / 24 - 365 * (Math.floor((tm.getTime() - inputData.getTime()) / 1000 / 60 / 60 / 24 / 365)));
    outputSaat.innerHTML = tm.getHours();
    outputDeqiqe.innerHTML = tm.getMinutes();
    outputSaniye.innerHTML = tm.getSeconds();

    // console.log(inputData.getTime());
    // console.log(tm.getTime());

    // console.log(inputData.getFullYear());
    // console.log(inputData.getMonth());
    // console.log(inputData.getDate());
    // console.log(inputData.getSeconds());
    // console.log(inputData.getUTCMinutes());

    // console.log(inputIl.value);
    // console.log(inputAy.value);
    // console.log(inputGun.value);

    // console.log(tm.getDate());
    // console.log(tm.getMonth());
    // console.log(tm.getHours());
    // console.log(tm.getMinutes())
    // console.log(tm.getSeconds())
    // console.log(tm.getFullYear());
}