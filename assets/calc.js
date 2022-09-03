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

function tool004(){
    var ip = document.getElementById("tool004IP").value;
    // split ip into oktett
    var ipSplit = ip.split('.');
    var ipOkt1 = ipSplit[0];
    var ipOkt2 = ipSplit[1];
    var ipOkt3 = ipSplit[2];
    var ipOkt4 = ipSplit[3];
    var cidr = 24;
    // get ip as binary number
    var ipBinary = ipOkt1.toString(2) + ipOkt2.toString(2) + ipOkt3.toString(2) + ipOkt4.toString(2);
    // caluclate subnet from cidr
    var subnet = "";
    for(var i = 0;i < 32;i++){
        if(i < cidr){
            subnet += "1";
        }
        else{
            subnet += "0";
        }
    }
    document.getElementById("tool004Subnet").value = subnet;
    // get max hosts
    var hosts = Math.pow(2, (32 - cidr)) - 2;
    document.getElementById("tool004Hosts").value = hosts;
    // calculate netadress
    var netadress = ipOkt1 + "." + ipOkt2 + "." + ipOkt3 + "." + ipOkt4;
    document.getElementById("tool004Netadress").value = netadress;
    // calculate broadcast
    var broadcast = ipOkt1 + "." + ipOkt2 + "." + ipOkt3 + "." + (hosts + 1);
    document.getElementById("tool004Broadcast").value = broadcast;
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