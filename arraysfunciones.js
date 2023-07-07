//-crear una funcion pedirArrayUsuario -> la funcion debe pedir un numero o la letra 'q' para salir, cuando el usuario ingrese 'q' 
//la funcion debe devolver un array con todos los numeros ingresados
//-crear una funcion calcularNumeroMagico -> la funcion recibe un array y devuelve un numero. ese numero se calcula de la siguiente 
//manera. si hay mas numeros pares se devuelve la suma de todos los integrantes, si hay mas numeros impares de devuelve la resta
//-crear una funcion llamada main: la funcion main llama a la funcion pedirArrayUsuario guarda el resultado de la funcion y se la pasa a la funcion calcularNumeroMagico
//, guarda el resultado de calcularNumeroMagico y lo muestra con un alert.
function pedirArrayUsuario() {
  //escribir una variable que aloje los datos que ingrese el usuario
  //repetir todo lo que esta abajo de esto con un do while.
  //pedirle al usuario que ingrese un numero o q para salir y guardarlo en una variable
  //si la letra ingresada es distinto de q, lo metemos en la variable que arroja los datos
  //una vez que termina el do while, devolver la variable que arroja los datos.
  let numeros=[];
  let valorIngresado;
  do {
    valorIngresado= prompt("Ingresar un numero o q para salir")
    if(valorIngresado !== "q") {
      valorIngresado= parseInt(valorIngresado)
      numeros.push(valorIngresado)
    }
  } while(valorIngresado !== "q")   
  return numeros                          
} 
//esta funcion me va a devolver un array con los numeros ingresados por el usuario y los va a guardar en la variable numeroArray
//LO DE ACA ABAJO LO USE PARA PROBAR SI LAS FUNCIONES ESTABAN DANDO RESULTADO.
//let numeroArray= (pedirArrayUsuario())
//console.log(numeroArray)
//-crear una funcion calcularNumeroMagico -> la funcion recibe un array y devuelve un numero. ese numero se calcula de la siguiente 
//manera. si hay mas numeros pares se devuelve la suma de todos los integrantes, si hay mas numeros impares de devuelve la resta

function calcularNumeroMagico(array){
  // filtrar numeros pares e impares del array 

  let numerosPares= array.filter(
    function(numero){
      return numero % 2 == 0 
    }
  );
    console.log(numerosPares)
  let numerosImpares= array.filter(
    function(numero){
      return numero % 2 !== 0 
    }
  ); 
    console.log(numerosImpares)
    //comparar la longitud de los arrays 
    //hacer una condicion que si hay mas pares, se sumen todos los integrantes y si hay mas impares se resten.
    if(numerosPares.length > numerosImpares.length ){
      let sumar=array.reduce(function(total, array){return total + array}, 0);
      return sumar;
    }else {
      let restar=array.reduce(function(total, array){return total - array}, 0);
      return restar;
    }
    

 }
 
 //console.log(calcularNumeroMagico(numeroArray)) ESTE CONSOLE.LOG LO UTILICE PARA PROBAR LA FUNCION

  //-crear una funcion llamada main: la funcion main llama a la funcion pedirArrayUsuario guarda el resultado de la funcion y se la 
//pasa a la funcion calcularNumeroMagico, guarda el resultado de calcularNumeroMagico y lo muestra con un alert.
function main() {
  //llamo a la funcion pedirArrayUsuario y la guardo en la variable arrayUsuario para luego pasarla dentro de 
  //la funcion calcularNumeroMagico y mostrar el resultado en un alert.
  let arrayUsuario = pedirArrayUsuario();
  alert(calcularNumeroMagico(arrayUsuario));
}

main()
