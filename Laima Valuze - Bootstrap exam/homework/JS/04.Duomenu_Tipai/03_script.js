function personalNo() {
    var input = document.getElementById("input").value;

    var regexp = new RegExp("^\\d{11}$");
    var lastNo = input.substring(10, 11);
    var firstNo = input.substring(0, 1);

    var tmpSum = 0;
    var lastNoTMP;


    //Ar 11 skaiciu ir ar skaitmenys
    if (regexp.test(input)) {
        //Ar pirmi skaitmenys nuo 1 iki 6
        if (firstNo >= 1 && firstNo <= 6) {

            //Ar paskutinis skaicius atitinka reikalavimu formulyte
            for (var i = 0; i < 9; i++) {
                tmpSum += input.substring(i, i + 1) * (i + 1);
            }
            tmpSum += input.substring(9, 10) * 1;
            lastNoTMP = tmpSum % 11;

            if (lastNoTMP == 10) {
                var tmp = 0;
                for (var i = 0; i < 9; i++) {
                    tmpSum += input.substring(i, i + 1) * (tmp + 3);
                    tmp++;
                    if (i > 6) {
                        tmp2 = 0;
                        tmpSum += input.substring(i, i + 1) * (tmp2 + 1);
                        tmp2++;
                    }
                }
            }

            if (tmpSum % input.length == 10) {
                lastNoTMP = 0;
            } else {
                lastNoTMP = tmpSum % 11;
            }

            if (lastNo == lastNoTMP) {
                alert("Your personal number is " + input);
            } else {
                alert("Incorrect input!");
            }
        }
    }
}
