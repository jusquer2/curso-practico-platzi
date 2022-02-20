const salariosMex = mexico.map(function (persona) {
  return persona.salary;
});
const salariosMexSorted = salariosMex.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

//HELPERS
function calcularPorsentaje(size, discount) {
  return (size * discount) / 100;
}
function esPar(numero) {
  return numero % 2 == 0;
}

function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];
    const mediana = mediaAritmetica([personaMitad1, personaMitad2]);
    return mediana;
  } else {
    const personaMitad = lista[mitad];
    return personaMitad;
  }
}
function mediaAritmetica(lista) {
  const suma = lista.reduce(function (valorAcomulado = 0, nuevoElemento) {
    return valorAcomulado + nuevoElemento;
  });
  const promedioLista = suma / lista.length;
  return promedioLista;
}
//Mediana GENERAL
const medianaGeneral = medianaSalarios(salariosMexSorted);
console.log("Mediana General: " + medianaSalarios(salariosMexSorted));
debugger;
//Mediana TOP 10%
const spliceStart = (salariosMexSorted.length * 90) / 100;
const spliceCount = salariosMexSorted.length - spliceStart;
const salarioTop10 = salariosMexSorted.splice(spliceStart, spliceCount);

console.log("Mediana top 10':" + medianaSalarios(salarioTop10));
