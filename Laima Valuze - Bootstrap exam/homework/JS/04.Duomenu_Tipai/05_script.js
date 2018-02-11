function generate() {
    var size = document.getElementById("ilgis").value;
    var skaiciai = document.getElementById("numbers").value;
    var simboliai = document.getElementById("simboliai").value;
    var raides = document.getElementById("raides").value;
    var zodis = document.getElementById("zodis").value;

    var password = "";
    var passLength = 0;

    while (password.length <= +size) {

        if (password.length = +size) {
            break;



            if (+size >= zodis.length) {
                password = password + zodis;
                passLength = password.length;


                if (document.getElementsByName("numbers")[0].checked) {
                    password += Math.floor(Math.random() * 10);
                    passLength = password.length;


                    if (document.getElementsByName("simboliai")[0].checked) {
                        password = password + String.fromCharCode(Math.floor(Math.random() * 47) + 33);
                        //!, @, #, $ ....
                        passLength = password.length;


                        if (document.getElementsByName("raides")[0].checked) {
                            password = password + String.fromCharCode(Math.floor(Math.random() * 122) + 97);
                            //a-z 
                            passLength = password.length;

                            password = password + String.fromCharCode(Math.floor(Math.random() * 90) + 65);
                            //A-Z
                            passLength = password.length;
                        }
                    }
                }
            }
        }
    }
    document.getElementById("slaptazodis").value = password;
}
