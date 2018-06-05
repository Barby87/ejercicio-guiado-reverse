const vowels = ['a', 'e', 'i', 'o', 'u'];

// 1. Creando función (reverse) que tiene como parámetro un array.
const reverse = (array) => {
 
  let newArray = [];

  let size = array.length;
  let lastPosition = size -1;

  for (let i = lastPosition; i >= 0; i--) {

// Creando nuevo array
  newArray.push(array[i]);

  }
 
    return newArray;

}

//Invocando función reverse y array original
  console.log(reverse[vowels]); // Retorna [u, o, i, e, a] (nuevo array)
  console.log(vowels); // Retorna [a, e, i, o, u] (array original)


// 2. Modificando el mismo array

//Método reverse --> Retorna el mismo array con los elementos invertidos

console.log(vowels.reverse()); // Retorna [u, o, i, e, a]
console.log(vowels); // Retorna [u, o, i, e, a] (cambia el array original)


/*
// Método pop --> retorna el último elemento del array, modificando el tamaño del array original

console.log(vowels.pop());// Retorna u
console.log(vowels);// Retorna [a, e, i, o]
console.log(vowels.pop());// Retorna o
console.log(vowels);// Retorma [a, e, i]
console.log(vowels.pop());// Retorna i
console.log(vowels);// Retorna [a, e]
console.log(vowels.pop());// Retorna e
console.log(vowels);// Retorna [a]
*/

// Método Splice --> Puede funcionar con 3 parámetros

// Si sólo quiero eliminar elementos de cualquier array, el método splice funciona con 2 parámetros:

// Ubicar posición 0, elimina 1 elemento

/* console.log(vowels.splice(0,1)); // Retorna un array con el elemento que va a quitar, en este caso [a]
console.log(vowels);// Retorna el nuevo array [e, i, o, u]
console.log(vowels.splice(1,1)); // Retorna [i]
*/

/*
// La siguientee forma --> 3 parámetros. Eliminar y reemplazar con otro elemento

console.log(vowels.splice(1,1,'hola')); // Retorna [e]

// Otra forma (no quiero eliminar ningún elemento)

console.log(vowels.splice(0,0,'hola2')); // En la consola devuelve un array vacío []
console.log(vowels); // Retorna [hola2, a, e, i, o, u]
console.log(vowels.splice(2,0,'hola3')); // Retorna undefined
console.log(vowels); // Retorna [hola2, a, e, hola3, o, u]
*/

/*
console.log(vowels.pop()); // Retorna u
console.log(vowels.splice(0,0,'u')); // Retorna []
console.log(vowels); // Retorna [u, a, e, i,o]
console.log(vowels.pop()); // Retorna o
console.log(vowels.splice(1,0,'o')); // Retorna []
console.log(vowels); // Retorna [u, o, a, e, i]
*/

/*
// Creando función reverse
// Voy a aplicar el metodo pop dependiendo de la cantidad de elementos que tenga el array

const reverse = (array) => {
  for (let i = 0; i < array.length; i++) {

    let item = array.pop();
    array.splice(i, 0, item);
  }

  return array

}

console.log(reverse(vowels)); // Retorna [u, o, i, e, a]
console.log(vowels); // Retorna [u, o, i, e, a]
*/

/*
//Indicando tamaño del array
let size = vowels.length; // 5

// Última posición del array (tamaño -1)
  let lastPosition = size - 1;
  
// Recorriendo el array al revés
  for (let i = lastPosition; i >= 0; i--) {

    console.log(vowels[i]);
  }
*/
