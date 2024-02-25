/*En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5
¡Ojo! Los elfos dicen que esto es una prueba técnica de Google. */

const giftIds = [2, 1, 3, 5, 3, 2];

// La función findFirstRepeated toma un arreglo de regalos como argumento
function findFirstRepeated(gifts) {
    // Se crea un nuevo Set llamado "numeroVisto" para almacenar los valores únicos que se han visto hasta el momento
    const numeroVisto = new Set();

    // Se recorre el arreglo de regalos
    for (const id of gifts) {
        // Si el valor actual ya ha sido visto antes (es decir, está en el Set "numeroVisto"),
        // se devuelve ese valor ya que es el primer valor repetido encontrado
        if (numeroVisto.has(id)) {
            return id;
        }

        // Si el valor actual no ha sido visto antes, se agrega al Set "numeroVisto"
        numeroVisto.add(id);
    }

    // Si no se encuentra ningún valor repetido, se devuelve -1
    return -1;
}

// Se llama a la función findFirstRepeated pasando el arreglo giftIds como argumento,
// y se imprime el resultado en la consola
console.log(findFirstRepeated(giftIds));