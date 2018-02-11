function siunta() {
    console.log("hhh");
    var input = document.getElementById("input").value;

    var regexp = new RegExp("^[0-9A-Z]{13}$");        var end = input.substring(11);

    if (regexp.test(input) && end == "LT") {
        var start = input.substring(0, 2);

        if (start == "RN" && end == "LT") {
            alert("registruotoji pašto korespondencijos siunta");
        }
        if (start == "CN" && end == "LT") {
            alert("registruotasis siuntinys");
        }
        if (start == "EE" && end == "LT") {
            alert("greitojo pašto siunta");
        }
    } else {
        alert("Invalid character entered!");
    }
}
