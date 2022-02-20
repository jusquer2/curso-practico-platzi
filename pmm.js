const ventas = [100, 300, 500, 400000000];
function mediaAritmetica() {
  var media = 0;
  ventas.forEach((item) => {
    media += item;
  });

  const suma = ventas.reduce(function (valorAcomulado = 0, nuevoElemento) {
    return valorAcomulado + nuevoElemento;
  });
  document.getElementById("media").innerHTML =
    "Promedio: " + suma / ventas.length;
}
function esPar(numero) {
  return numero % 2 === 0;
}
function mediana() {
  const mitad = parseInt(ventas.length);
  if (esPar(ventas.length)) {
    const elemt1 = ventas.sort()[mitad - 1];
    const elemt2 = ventas.sort()[mitad];
  } else {
    ventas.sort()[mitad];
  }
  const ventasSort = ventas.sort();
  const median = (ventasSort.length + 1) / 2;
  document.getElementById("mediana").innerHTML = "Mediana: " + median;
}
function moda() {
  var moda;
  const ventasSort = ventas.sort();
  var obj = {};
  ventasSort.forEach((item) => {
    obj[item] = (obj[item] || 0) + 1;
  });
  let arr = Object.values(obj);
  moda = Object.keys(obj).find((key) => obj[key] === Math.max(...arr));
  document.getElementById("moda").innerHTML = "Moda: " + moda;
}
mediaAritmetica();
mediana();
moda();
document.getElementById("conjunto").innerHTML =
  "Conjunto de datos: " + ventas.toString();
