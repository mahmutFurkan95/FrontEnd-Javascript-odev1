let userName = prompt("Merhaba İsmini bahsedermisin ? :)") ;
const bodySelect = document.querySelector('body');
const param = document.querySelector('#param');
const param2 = document.querySelector('#param-2');
const param3 = document.querySelector('#param-3');


function addZero(i) {
    if (i < 10) { i = "0" + i };
    return i;
}
function currentTime() {
    const date = new Date();
    let saat = date.getHours();
    let dakika = date.getMinutes();
    let saniye = date.getSeconds();
    saat = addZero(saat);
    dakika = addZero(dakika);
    saniye = addZero(saniye);
    let gun = ""
    switch (date.getDay()) {
        case 0: gun = "Pazar"; break;
        case 1: gun = "Pazartesi"; break
        case 2: gun = "Sali"; break;
        case 3: gun = "Carsamba"; break;
        case 4: gun = "Persembe"; break;
        case 5: gun = "Cuma"; break;
        case 6: gun = "Cumartesi"; break;
    }
    document.getElementById('clock').innerHTML = saat + ":" + dakika + ":" + saniye + "  " + gun;
    setTimeout(currentTime, 1000);

}


param.innerHTML = ` KODLUYORUZ <br>`;
param.innerHTML += ` Merhaba <span style ="color:green;">${userName}</span> Hos Geldin!<br>`;
currentTime();
param2.innerHTML += "tarihinde <b>Kodluyoruz FrontEnd Web Development Patikası</b>\'nın Javascript bolumu 1.Odevindesiniz<br><br><br>"
bodySelect.style.fontSize = "40px";
bodySelect.style.color = "rgb(127, 168, 50)";
bodySelect.style.backgroundColor = "lightgray";
bodySelect.style.textAlign = "center";
bodySelect.style.height = "5000px";
document.querySelector('#clock').style.lineHeight = "0.02";

window.addEventListener("scroll", function () {
    let top = this.scrollY;

    if (top >= 2000) {
        bodySelect.style.backgroundColor = "pink"
        this.document.body.style.transition = "0.8s"
    }
    else if (top < 2000) {
        bodySelect.style.backgroundColor = "lightgray";
    }

}, false);




