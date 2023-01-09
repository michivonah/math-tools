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

function tool003(currentLenght){
    var a = document.getElementById("tool003A");
    var b = document.getElementById("tool003B");
    var c = document.getElementById("tool003C");
    switch(currentLenght){
        case "A":
            if(c.value == "" && b.value != ""){
                c.value = Math.pow(a.value, 2) + Math.pow(b.value, 2);
            }
            else if(b.value == "" && c.value != ""){
                b.value = Math.pow(c.value, 2) - Math.pow(a.value, 2);
            }
            break;
        case "B":
            if(c.value == "" && a.value != ""){
                c.value = Math.pow(a.value, 2) + Math.pow(b.value, 2);
            }
            else if(a.value == "" && c.value != ""){
                a.value = Math.pow(c.value, 2) - Math.pow(b.value, 2);
            }
            break;
        case "C":
            if(a.value == "" && b.value != ""){
                // a leer, b hat wert -> a berechnen
                a.value = Math.pow(c.value, 2) - Math.pow(b.value, 2);
            }
            else if(b.value == "" && a.value != ""){
                // b leer, a hat wert -> b berechnen
                b.value = Math.pow(c.value, 2) - Math.pow(a.value, 2);
            }
            break;
        default:
            break;
    }
}

function tool004(){
    var ip = document.getElementById("tool004IP").value;
    // split ip into oktett
    var ipDecimal = ip;
    ipDecimal = ip.replace('.','');
    console.log(ipDecimal);
    console.log(ipDecimal.toString(2));
    //
    var ipSplit = ip.split('.');
    var ipOkt1 = parseInt(ipSplit[0]);
    var ipOkt2 = parseInt(ipSplit[1]);
    var ipOkt3 = parseInt(ipSplit[2]);
    var ipOkt4 = parseInt(ipSplit[3]);
    if(ipOkt1 < 0 || ipOkt1 > 255) ipOkt1 = 0;
    if(ipOkt2 < 0 || ipOkt2 > 255) ipOkt2 = 0;
    if(ipOkt3 < 0 || ipOkt3 > 255) ipOkt3 = 0;
    if(ipOkt4 < 0 || ipOkt4 > 255) ipOkt4 = 0;
    // while loop to make oktett 3 letters lenght
    /*while(ipOkt1.toString(2).lenght < 8){
        ipOkt1 = "0" + ipOkt1.toString(2);
    }*/
    //for(var countIP = 0;countIP < ipSplit.lenght;countIP++){
        //ipSplit[countIP] = parseInt(ipSplit[countIP]);
        //if(ipSplit[countIP] < 0 || ipSplit[countIP] > 255) ipSplit[countIP] = 0;
        // ip to string
        // string to lenght = 3
    //}
    // get ip as binary number/convert ip to bin
    var ipBinary = ipOkt1.toString(2) + ipOkt2.toString(2) + ipOkt3.toString(2) + ipOkt4.toString(2);
    //var ipBinary = "11000000101010000000000100000001";
    // set cidr notation
    var cidr = document.getElementById("tool004CIDR").value;
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
    var subnetSplit = subnet.match(/.{1,8}/g);
    var subnetDecimal = parseInt(subnetSplit[0], 2) + "." + parseInt(subnetSplit[1], 2) + "." + parseInt(subnetSplit[2], 2) + "." + parseInt(subnetSplit[3], 2);
    document.getElementById("tool004Subnet").value = subnetDecimal;
    // get max hosts
    var hosts = Math.pow(2, (32 - cidr)) - 2;
    document.getElementById("tool004Hosts").value = hosts;
    // calculate netadress
    var netadress = "";
    for(var countNetadress = 0;countNetadress < 32;countNetadress++){
        var currentSub = subnet.charAt(countNetadress);
        var currentIP = ipBinary.charAt(countNetadress);
        if(currentIP == "1" && currentSub == "1") netadress += "1";
        else netadress += "0";
    }
    var netadressSplit = netadress.match(/.{1,8}/g);
    var netadressDecimal = parseInt(netadressSplit[0], 2) + "." + parseInt(netadressSplit[1], 2) + "." + parseInt(netadressSplit[2], 2) + "." + parseInt(netadressSplit[3], 2);
    document.getElementById("tool004Netadress").value = netadressDecimal;
    // calculate broadcast
    var broadcastBinStr = ""; // all host bits to 1
    for(var countBroadcast = 0;countBroadcast < (32 - cidr);countBroadcast++){
        broadcastBinStr += "1";
    }
    broadcastBinStr = ipBinary.slice(0, cidr) + broadcastBinStr;
    var broadcastSplit = broadcastBinStr.match(/.{1,8}/g);
    var broadcastDecimal = parseInt(broadcastSplit[0], 2) + "." + parseInt(broadcastSplit[1], 2) + "." + parseInt(broadcastSplit[2], 2) + "." + parseInt(broadcastSplit[3], 2);
    document.getElementById("tool004Broadcast").value = broadcastDecimal;
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

// cryptography caluulations
function getInformationsgehalt(probability){
    var result = Math.log2(probability);
    if(result > 0) result = result * -1;
    return(result);
}

function getEntropy(symbolList){
    if(symbolList == null){
        var symbolList = [
            {
                "Symbol": "A",
                "Informationsgehalt": "12",
                "Probability": "15%"
            },
            {
                "Symbol": "B",
                "Informationsgehalt": "5",
                "Probability": "29%"
            },
            {
                "Symbol": "C",
                "Informationsgehalt": "4",
                "Probability": "38%"
            },
            {
                "Symbol": "D",
                "Informationsgehalt": "14",
                "Probability": "12%"
            },
            {
                "Symbol": "E",
                "Informationsgehalt": "9",
                "Probability": "6%"
            }
        ];
    }
    var result = 0;
    for(var s = 0; symbolList[s] != null; s++){
        result = parseInt(symbolList[s].Informationsgehalt) * (parseInt(symbolList[s].Probability) / 100) + result;
    }
    return result;
}

function getRedundancy(bitsTotal, bitsUsed){
    var result = (bitsTotal / bitsUsed) - 1;
    return result;
}
