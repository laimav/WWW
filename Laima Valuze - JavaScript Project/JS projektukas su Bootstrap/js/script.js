// KONSTRUKTORIUS RECEPTO KURIMUI
function Receptas(id, arrTitle, pavadinimas, nuotrauka, porcijos, trukme, ingredientai, gaminimas) {
    this.id = id;
    this.arrTitle = arrTitle;
    this.pavadinimas = pavadinimas;
    this.nuotrauka = nuotrauka;
    this.porcijos = porcijos;
    this.trukme = trukme;
    this.ingredientai = ingredientai;
    this.gaminimas = gaminimas;
}

// RECEPTUKAI
var recipe1 = new Receptas(
    "1", "recipe1", "Trupininis obuolių pyragas", "trupininis.jpg", 6, "daugiau nei 1 val.", [
        ["cukrus", 100, "g"],
        ["sviestas", 200, "g"],
        ["miltai", 2, "st."],
        ["kepimo milteliai", 1, "a.š."],
        ["tarkuota citrinos žievelė", 1, "vnt."],
        ["obuoliai", 5, "vnt."],
        ["sviestas", 100, "g"],
        ["cukrus", 0.5, "st."],
        ["krakmolas", 1, "š."],
        ["vanilinis cukrus", 1, "a.š."]], ["Tešlai margariną išsukite su cukrumi, sudėkite miltus, sumaišytus su kepimo milteliais,           citrinos žievelę. Suminkykite tešlą ir padėkite į šaldytuvą maždaug valandai.",
            "Nulupkite obuolius, išimkite sėklalizdžius, supjaustykite gabalėliais. Didelėje keptuvėje ištirpkite sviestą, suberkite cukrų ir sudėkite obuolius. Troškinkite, kol suminkštės. Jei obuoliai išskyrė daug skysčio (priklauso nuo jų rūšies), dėkite vieną ar daugiau šaukštų bulvių krakmolo. Suberkite vanilinį cukrų ir išmaišykite. Nuimkite nuo ugnies.",
            "Kepimo formą išklokite kepimo popieriumi, į ją sutarkuokite truputį daugiau nei pusę tešlos, ant jos sudėkite obuolių masę, ant viršaus užtarkuokite likusią tešlos dalį.",
            "Kepame vidutinio karštumo orkaitėje, 180 - 200 C, apie valandą. Skanaus!"]
);

// RECEPTUKAI
var recipe2 = new Receptas(
    "2", "recipe2", "Varškiniai sausainiukai", "varskiniai_saus.jpg", 5, "apie 45 min.", [
    ["varškė", 150, "g"],
    ["sviestas", 200, "g"],
    ["miltai", 200, "g"],
    ["cukrus", 3, "v.š."],
    ["cinamonas", 2, "v.š."]], ["Varškę ištriname su kambario temperatūros sviestu, suberiame vanilinį cukrų, miltus ir suminkome vientisą tešlos rutulį.",
    "Ant pamiltuoto stalviršio kočiojame kuo plonesnę tešlą ir stikline spaudžiame skrituliukus.",
    "Abi skrituliuko puses prispaudžiame prie cukraus, kad priliptų, ir du kartus perlenkiame pusiau.",
    "Kiekvieną sausainėlį dedame į skardą, išklotą kepimo popieriumi. Kepame orkaitėje, įkaitintoje iki 190 laipsnių, kol gražiai tolygiai paruduos."]);

// RECEPTUKAI
var recipe3 = new Receptas(
    "3", "recipe3", "Magdalenas - Ispaniški keksiukai", "magdalenas.jpg", 10, "apie 20 min.", [
    ["kiaušiniai", 3, "vnt."],
    ["cukrus", 200, "g"],
    ["saulėgrąžų aliejus", 250, "ml"],
    ["pienas", 120, "ml"],
    ["tarkuota citrinos žievelė", 1, "vnt."],
    ["miltai", 300, "g"],
    ["kepimo milteliai", 1, "a.š."],
    ["druska", 0.5, "a.š."]], [
        "Kiaušinių baltymus išplakti su žiupsneliu druskos iki standžių putų.",
        "Maišant mediniu šaukštu palaipsniui įmaišyti trynius, cukrų, aliejų, pieną, citrinos žievelę, įsijotus miltus.",
        "Supilti tešlą į popierines formeles, dėti į iki 180 laipsnių įkaitintą orkaitę ir kepti 18-25 min.",
        "Iškepusius neskubėti ragauti, geriau palaukti, kol atvės."
    ]);



// VISU RECEPTU MASYVAS
var recipesArr = [recipe1, recipe2, recipe3];
var porcijaIdx = -1;


// INGREDIENTU SPAUSDINIMO FUNKCIJA
function printIngredients(Receptas) {
    var ingHtml = document.getElementById("ingredients");
    var selectedNo;

    if (document.getElementById("mySelect") == null)
        selectedNo = Receptas.porcijos;
    else
        selectedNo = document.getElementById("mySelect").selectedIndex + 1;

    var arr = Receptas.ingredientai;
    var str = `<table>`;
    for (var i = 0; i < arr.length; i++) {
        var line = arr[i];
        var porcija = (line[1] / Receptas.porcijos * selectedNo).toFixed(1);
        for (var j = 0; j < line.length; j++) {
            if (j == 1) str += `<td>${porcija}</td>`;
            else str += `<td>${line[j]}</td>`;
        }
        str += `</tr>`;
    }
    str += `</table>`;
    ingHtml.innerHTML = str;
}

// GAMINIMO EIGOS SPAUSDINIMO FUNKCIJA
function printGaminimas(Receptas) {
    var gaminimasHtml = document.getElementById("gaminimas");
    var arr = Receptas.gaminimas;
    var str = `<p>PARUOŠIMO BŪDAS:</p>
               <ol>`;
    for (var i = 0; i < arr.length; i++) {
        str += `<li>${arr[i]}</li>`;
    }
    str += `</ol>`;
    gaminimasHtml.innerHTML = str;
}

// RECEPTO SPAUSDINIMO FUNKCIJA
function printRecipe(Receptas) {
    var recipe = document.getElementById("recipeHtml");
    document.getElementById("body").setAttribute("style", "padding-top: 70px;")

    // IF SAKINYS PORCIJU KIEKIUI PASIRINKTI    
   var porcijuSk = ``;
    if (porcijaIdx == -1) porcijaIdx = Receptas.porcijos;
    for (var i = 1; i < 11; i++) {
        if (i == porcijaIdx) {
            porcijuSk += `<option selected="selected" id="${i}" value="${i}">${i}</option>`;
        } else {
            porcijuSk += `<option id="${i}" value="${i}">${i}</option>`
        }
    };
    // IF PABAIGA   

    var recipeHtml =
        `<div>
                    <div class="recipe">
                        <div>
                            <div>
                                <h2 class="pavadinimas">${Receptas.pavadinimas}</h2>
<p>PORCIJŲ SKAIČIUS: <select id="mySelect" onchange="calculate(${Receptas.id})">
                                                    ${porcijuSk}                                           </select></p>                                <p>PARUOŠIMO LAIKAS: ${Receptas.trukme}</p>
                                <p>INGREDIENTAI:</p>
                            </div>
                        </div>
                    </div>
                </div>`;
    printIngredients(Receptas);
    printGaminimas(Receptas)
    recipe.innerHTML = recipeHtml;
}

function calculate(receptoId) {
    var i = 0;
    for (i = 0; i < recipesArr.length; i++) {
        if (recipesArr[i].id == receptoId) break;
    }

    var e = document.getElementById("mySelect");
    porcijaIdx = e.selectedIndex + 1;

    printRecipe(recipesArr[i]);

}

function printAllDeserts() {
    document.getElementById("body").setAttribute("style", "padding-top: 70px;");
    printAll();
    document.getElementById("recipeHtml").innerHTML = `<img id="desertImg" src="img/cupcake.jpg" alt="cupcake">`;
}



// VISU RECEPTU SPAUSDINIMO FUNKCIJA + CIKLAS
function printAll() {
    hideCarousel();
    document.getElementById("body").setAttribute("style", "padding-top: 70px;");
    document.getElementById("dienosReceptas").innerHTML = "";
    document.getElementById("recipeHtml").innerHTML = "";
    document.getElementById("ingredients").innerHTML = "";
    document.getElementById("gaminimas").innerHTML = "";
    var recipe = document.getElementById("recipeList");
    var str = `<div>`;

    for (var i = 0; i < recipesArr.length; i++) {
        str += `<h4 onclick="printRecipe(${recipesArr[i].arrTitle})"> ${recipesArr[i].pavadinimas}</h4>`;
    }
    str += `</div>`;
    recipe.innerHTML = str;
}


// RANDOM RECEPTO PARINKIMAS
function randomRecipe() {
    var randomRec = recipesArr[Math.floor(Math.random() * recipesArr.length)];
    document.getElementById("dienosReceptas").innerHTML = `<h1>Dienos receptas!</h1>`;
    hideCarousel();
    printRecipe(randomRec);
    // printRecipe(recipesArr[Math.floor(Math.random() * recipesArr.length)].arrTitle); 
}

function hideCarousel() {
    document.getElementById("myCarousel").setAttribute("style", "display: none;");
}


// LAIKRODUKAS
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById(`laikas`).innerHTML = `h + ":" + m + ":" + s`;
    t = setTimeout(function() {
        startTime()
    }, 500);
}



// EVENTS 

//function alertOnLoad() {
//    alert("Sveiki atvykę!");
//}

function onMouseOver() {
    document.getElementById("spustelekite").setAttribute("title", "Spustelėkite");
}

function OnContextMenu() {
    alert("Jeigu norite atidaryti dienos receptą, spustelėkite paveikslėlio tekstą");
}

function onMouseMove() {
    document.getElementsByClassName("not")[0].setAttribute("style", "cursor: not-allowed;");
    document.getElementsByClassName("not")[1].setAttribute("style", "cursor: not-allowed;");
    document.getElementsByClassName("not")[2].setAttribute("style", "cursor: not-allowed;");
}

function placeholderOn() {
    document.getElementById('search').placeholder = "Paieška..";
}

function placeholderOff() {
    document.getElementById('search').placeholder = "";
}
