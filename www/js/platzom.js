
/*
---Si la palabra termina en "ar" , se le quitan los dos ultimos caracteres
---si la palabra inicia con z, se le añade "pe" al final de la palabra
---si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir con un guion
---si la palabra original es un palindromo ninguna de las anteriores reglas funcionay se devuelve
la palabra intercalando entre mayusculas y minusculas
*/

//---Si la palabra termina en "ar" , se le quitan los dos ultimos caracteres
function platzom (str){
    let translation = str;
    //preguntar si existe o no el caracter
    //primero convierte a minusculas.checa si termina con: 
    if (str.toLowerCase().endsWith(`ar`)){
        translation = str.slice(0, -2);
    }


//alabra inicia con z, se le añade "pe" al final de la palabra
if (str.toLowerCase().startsWith(`z`)){
    translation += `pe`
}
return translation;
}
console.log(platzom("contar"));
console.log(platzom("zorro"));
