/*En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés

Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
Notas:

Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
En el mensaje final no deben quedar paréntesis.
El nivel máximo de anidamiento es 2. */

// Definición de la función decode que toma un mensaje como entrada y devuelve el mensaje decodificado
function decode(message) {
  // Busca un patrón en el mensaje que coincida con una cadena entre paréntesis y la guarda en 'match'
  const match = message.match(/\(([^()]+)\)/)

  // Verifica si no se encontró ninguna coincidencia
  if (!match) {
    // Si no hay coincidencia, devuelve el mensaje sin cambios
    return message
  }

  // Extrae la parte del mensaje entre paréntesis, invierte el orden de los caracteres y lo guarda en 'mensajeParentesis'
  const mensajeParentesis = match[0].slice(1, -1).split('').reverse().join('')


  // Reemplaza todas las coincidencias encontradas en el mensaje con la cadena decodificada
  const result = message.replaceAll(match[0], mensajeParentesis)

  // Llama a la función decode de forma recursiva con el resultado del mensaje decodificado
  return decode(result)
}


console.log(decode('hola (odnum)'))

console.log(decode('(olleh) (dlrow)!'))

console.log(decode('sa(u(cla)atn)s'))
