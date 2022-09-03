// Calc.js
// Michi von Ah - 2022

// tools
function tool001(type){
    var dezField = document.getElementById("tool001DEZ");
    var hexField = document.getElementById("tool001HEX");
    var binField = document.getElementById("tool001BIN");
    switch(type){
        case "dez":
            hexField.value = numSystem(dezField.value, "dez-hex");
            binField.value = numSystem(dezField.value, "dez-bin");
            break;
        case "hex":
            dezField.value = numSystem(hexField.value, "hex-dez");
            binField.value = numSystem(numSystem(hexField.value, "hex-dez"), "dez-bin");
            break;
        case "bin":
            hexField.value = numSystem(numSystem(binField.value, "bin-dez"), "dez-hex");
            dezField.value = numSystem(binField.value, "bin-dez");
            break;
        default:
            break;
    }
}

function tool002(){
    var lenght = document.getElementById("tool002lenght").value;
    var width = document.getElementById("tool002width").value;
    var height = document.getElementById("tool002height").value;
    var res = document.getElementById("tool002result");
    if(lenght == " " || lenght == "" || lenght == null){
        lenght = 1;
    }
    if(width == " " || width == "" || width == null){
        width = 1;
    }
    if(height == " " || height == "" || height == null){
        height = 1;
    }
    res.value = lenght * width * height;
}

// functions
function numSystem(value, type){
    value = parseInt(value);
    if(type == null) var type = "dez-hex";
    switch(type){
        case "dez-hex":
            /*var res = Math.floor(value / 16);
            var remain = getHex(value % 16, "hex");
            var final = "";
            while(res > 0){
                res = Math.floor(res / 16);
                remain = getHex(value % 16, "hex");
                final += res.toString();
            }
            final += remain.toString();*/
            //return final + " rest: " + remain;
            return value.toString(16).toUpperCase();
        case "hex-dez":
            return parseInt(value, 16);
        case "dez-bin":
            return value.toString(2);
        case "bin-dez":
            return parseInt(value, 2);
        default:
            return 0;
    }
}

function getHex(value, type){
    // return a value in hex and vice
    var referenceTable = [
        {
            dez: '0', hex: '0'
        },
        {
            dez: '1', hex: '1'
        },
        {
            dez: '2', hex: '2'
        },
        {
            dez: '3', hex: '3'
        },
        {
            dez: '4', hex: '4'
        },
        {
            dez: '5', hex: '5'
        },
        {
            dez: '6', hex: '6'
        },
        {
            dez: '7', hex: '7'
        },
        {
            dez: '8', hex: '8'
        },
        {
            dez: '9', hex: '9'
        },
        {
            dez: '10', hex: 'A'
        },
        {
            dez: '11', hex: 'B'
        },
        {
            dez: '12', hex: 'C'
        },
        {
            dez: '13', hex: 'D'
        },
        {
            dez: '14', hex: 'E'
        },
        {
            dez: '15', hex: 'F'
        }
    ];
    //console.table(referenceTable);
    if(type == "dez"){
        return referenceTable[value].dez;
    }
    else{
        return referenceTable[value].hex;
    }
}