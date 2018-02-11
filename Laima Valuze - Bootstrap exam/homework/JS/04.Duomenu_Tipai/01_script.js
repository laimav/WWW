function text() {
    var text = document.getElementById("textarea").value;
    var regexp = new RegExp("^[0-9a-zA-Z]+$");

    if (regexp.test(text)) {
        alert("OK");
    } else {
        alert("Invalid character entered!");
    }
}
