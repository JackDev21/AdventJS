/*En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''
A tener en cuenta:

Siempre habrá un paso de diferencia o ninguno.
La modificación puede ocurrir en cualquier lugar de la cadena.
La secuencia original puede estar vacía */


function findNaughtyStep(original, modified) {
  // Comparamos las cadenas caracter por caracter
  for (let i = 0; i < original.length || i < modified.length; i++) {
    // Si el caracter en la posición i es diferente en las dos cadenas
    if (original[i] !== modified[i]) {
      // Si la longitud de la cadena modificada es mayor, se añadió un paso extra
      if (original.length < modified.length) {
        return modified[i];
      } else { // Si no, se eliminó un paso
        return original[i];
      }
    }
  }
  // Si las cadenas son iguales o si no se encontraron diferencias, devolvemos una cadena vacía
  return '';
}

console.log(findNaughtyStep('abcde', 'abcde')); // ''
console.log(findNaughtyStep('abcd', 'abcde')); // 'e'
console.log(findNaughtyStep('abcde', 'abxcde')); // 'x'
console.log(findNaughtyStep('abcde', 'abcd')); // 'e'
