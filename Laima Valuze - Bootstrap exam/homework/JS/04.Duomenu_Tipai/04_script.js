function calculate() {
    var input = document.getElementById("input").value;
    input.toLowerCase();

    var balses = input.match(/[aeiyou]/g).length;
    var dvibalses = input.match(/ai|au|ei|ie|ui|uo/g).length;
    var skaiciai = input.match(/\d/g).length;
alert("Žodyje yra " + balses + " balses, " + dvibalses + " dvibalses, " + skaiciai +  " skaiciai");

}
