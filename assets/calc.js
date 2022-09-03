// Calc.js
// Michi von Ah - 2022

function numSystem(){
    //
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