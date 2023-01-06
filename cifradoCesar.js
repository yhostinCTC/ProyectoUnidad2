
//hola 
function cifradoCesar(mensaje, clave){
    let alfabeto = "abcdefghijklmnñopqrstuvwxyz ABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789,.-_[]{}/!@#$%&*()";
    let cifrado = "";
    let guardarMayuscula = false;
    for(let i = 0; i < mensaje.length; i++){
        //if (mensaje[i] === mensaje[i].toUpperCase() && parseInt(mensaje[i]) == NaN ){ 
        //    guardarMayuscula = true; 
        //}
        let posicion = alfabeto.indexOf(mensaje[i]);
        let posicionCifrado = (posicion + clave) % alfabeto.length;
        if(posicionCifrado < 0){
            posicionCifrado = alfabeto.length + posicionCifrado;
        }
        //if(guardarMayuscula){
        //    cifrado += alfabeto[posicionCifrado].toUpperCase();
        //    guardarMayuscula = false;
        //}else{
        cifrado += alfabeto[posicionCifrado];
        //}
    }
    return cifrado;
}


function cifrar(mensaje, clave){
    return cifradoCesar(mensaje, clave);
}

function descifrar(mensaje,clave){
    return cifradoCesar(mensaje,-clave);
}


export {cifrar, descifrar};