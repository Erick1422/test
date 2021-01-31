function sumar(a1, a2) { 
    return a1 + a2;
}

function restar(p1, p2){
    return p1-p2;
}

function multiplicar(p1, p2){
    return p1 * p2;
}

function dividir(p1, p2){
    if(p2 == 0){
        console.log('No se puede dividir por cero');
    }
    else{
        return p1 / p2;
    }
}

exports.sumar = sumar;
exports.restar = restar;
exports.multipli = multiplicar;
exports.dividir = dividir;