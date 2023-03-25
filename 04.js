/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function actividadesEnComun(persona1, persona2) {
  // La funcion llamada 'actividadesEnComun' recibe como argumento dos arrays de actividades (strings) llamados 'persona1' y 'persona2'
  // y debe devolver un array de strings con las actividades en comun ( aquellas que se repiten ) entre cada array.
  // ej: persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar']
  //     persona2 = ['comer', 'dormir', 'futbol']
  // actividadesEnComun(persona1, persona2) => ['comer', 'dormir']
  // Tip: podes usar ciclos for anidados.
  // Tu código aca:
  let actividadesComunes = [];

  for (i = 0; i < persona1.length; i++){
    
    for(j = 0; j < persona2.length; j++){

    if(persona1[i] === persona2[j]){
      actividadesComunes.push(persona2[j])
      }
    }
  }
  return actividadesComunes;
}

// No modifiques nada debajo de esta linea //


module.exports = actividadesEnComun