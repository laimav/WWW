// 1 UZDUOTIS
function showHeading() {
    var h = document.getElementsByTagName("h2");
    h[0].innerHTML = "Lorem Ipsum";
}

// 2 UZDUOTIS
// TRUMPESNIS VARIANTAS
function yellow() {
    document.getElementById("par").setAttribute("style", "color:gold");
}

function green() {
    var p = document.getElementById("par");
    p.hasAttribute("style");
    p.getAttribute("style");
    p.setAttribute("style", "color:green");
}

function red() {
    var p = document.getElementById("par");
    p.hasAttribute("style");
    p.getAttribute("style");
    p.setAttribute("style", "color:red");
}


// 3 UZDUOTIS
function increase() {
    var p = document.getElementById("img");
    p.setAttribute("style", "height:300px");
}

function decrease() {
    var p = document.getElementById("img");
    p.setAttribute("style", "height:100px");
}


// 4 UZDUOTIS
function grayscale() {
    var p = document.getElementById("img");
    p.setAttribute("style", "filter:grayscale(100%)");
}

function color() {
    var p = document.getElementById("img");
    p.setAttribute("style", "filter:grayscale(0%)");
}


// 5 UZDUOTIS
var p = document.getElementById("img");

function left() {
    document.getElementById("img_container").setAttribute("style", "display: flex; flex-direction: none; justify-content: none;");
    document.getElementById("img").setAttribute("style", "float: left");
}

function right() {
    document.getElementById("img_container").setAttribute("style", "display: flex; flex-direction: row-reverse;");
    document.getElementById("img").setAttribute("style", "float: right");
}

function hide() {
    document.getElementById("img").setAttribute("style", "display: none;");
}

function bottom() {
    document.getElementById("img").setAttribute("style", "float: left");
    document.getElementById("img_container").setAttribute("style", "display: flex; flex-direction: column-reverse; justify-content: flex-end;");
}

function restore() {
    document.getElementById("img_container").setAttribute("style", "display: flex; flex-direction: column;");
    document.getElementById("img").setAttribute("style", "float: left");
}


// 6 UZDUOTIS

function showForm() {
    document.getElementById("form").setAttribute("style", "display: inline");
}

function submitMessage() {
    alert("Dėkojame už Jūsų nuomonę.").document.getElementById("form").setAttribute("style", "display: inline");
}


// 7 UZDUOTIS


function suma() {
    var sk1 = document.getElementById("nr1").value;
    var sk2 = document.getElementById("nr2").value;
    document.getElementById("rezultatas").innerHTML = "Rezultatas: " + (Number(sk1) + Number(sk2));
}

function atimtis() {
    var sk1 = document.getElementById("nr1").value;
    var sk2 = document.getElementById("nr2").value;
    document.getElementById("rezultatas").innerHTML = "Rezultatas: " + (Number(sk1) - Number(sk2));
}

function daugyba() {
    var sk1 = document.getElementById("nr1").value;
    var sk2 = document.getElementById("nr2").value;
    document.getElementById("rezultatas").innerHTML = "Rezultatas: " + (sk1 * sk2);
}


function dalyba() {
    var sk1 = document.getElementById("nr1").value;
    var sk2 = document.getElementById("nr2").value;
    document.getElementById("rezultatas").innerHTML = "Rezultatas: " + (Number(sk1) / Number(sk2));
}


