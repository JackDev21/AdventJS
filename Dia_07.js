/* Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.

Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:

drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

drawGift(5, '*')
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, '^')
/*
#
*/
/*
Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.

  Nota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ". */

function drawGift(size, symbol) {
  // Si el tamaño es 1, devuelve un solo símbolo de regalo y un salto de línea
  if (size === 1) return "#\n";

  // Inicializa un array para almacenar las filas del regalo
  let result = [""];

  // Dibuja la parte superior del regalo
  result[0] = "#".repeat(size).padStart(size * 2 - 1, " ");

  // Dibuja la parte inferior del regalo
  result[size * 2 - 2] = "#".repeat(size);

  // Dibuja la parte central del regalo
  result[size - 1] = `${'#'.repeat(size)}${symbol.repeat(size - 2)}#`;

  // Dibuja el resto de las filas del regalo
  for (let fila = 1; fila < size - 1; fila++) {
    // Construye la fila actual del regalo
    let draft = `#${symbol.repeat(size - 2)}#${symbol.repeat(fila - 1)}#`;

    // Inserta la fila actual en el resultado, ajustando el espaciado
    result[fila] = draft.padStart(size * 2 - 1, " ");

    // Inserta la fila opuesta en el resultado, ajustando el espaciado
    result[size * 2 - 2 - fila] = draft;
  }

  // Retorna el resultado como una cadena de texto con saltos de línea
  return result.join("\n").concat("\n");
}


console.log(drawGift(5, '*'))

/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/