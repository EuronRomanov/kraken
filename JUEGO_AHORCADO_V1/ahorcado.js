//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

let palabraSecreta;
esMayuscula=(caracter)=>{
    let codigo;
    codigo=caracter.charCodeAt(0);

    
    if((codigo>=65 && codigo<=90) || (codigo === 209) ||  (codigo === 193) || (codigo === 201) || (codigo === 205) ||  (codigo === 211) ||  (codigo === 218)){
        return true;
    }else{
        return false;
    }
}

guardarPalabra=()=>{
    let password;
    let hayMayuscula=false;
    let hayCinco=0;
    password= recuperarTexto("txtSecreta");

     for (let i = 0; i < password.length; i++) {
        const element = password.charAt(i);
        if (esMayuscula(element)) {
            hayCinco++;
        }
     }

    
    if (password.length==5 && hayCinco==5) {
        palabraSecreta=password;
    }else{
        alert("DEBE INGRESAR UNA PALABRA DE 5 LETRAS MAYUSCULAS");
    }
console.log(password);

}