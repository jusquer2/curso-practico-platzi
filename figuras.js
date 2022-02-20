//Cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden : " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
//console.log(`El perímetro del cuadrado es ${perimetroCuadrado}cm`);

function areaCuadrado(lado) {
  return lado * lado;
}
//console.log(`El área del cuadrado es: ${areaCuadrado}cm²`);
console.groupEnd();
//Triangulo
console.group("Triangulo");
const ladoTraingulo1 = 6,
  ladoTraingulo2 = 6,
  baseTriangulo = 4,
  alturaTriangulo = 5.5;

console.log(
  `Los lados de mi triángulo miden: ${ladoTraingulo1}cm,${ladoTraingulo2}cm,${baseTriangulo}cm`
);
console.log(`La altura del triángulo es de ${alturaTriangulo}`);

const perimetroTriangulo = ladoTraingulo1 + ladoTraingulo2 + baseTriangulo;
console.log(`El perímetro del triángulo es ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triangulo es: ${areaTriangulo}cm²`);

console.groupEnd();

//Círculo
console.group("Círculo");
const radioCirculo = 4; //prompt("Favor de capturar radio del circulo");
const diametroCirculo = radioCirculo * 2;
const circunferencia = Math.PI * diametroCirculo;
const perimetroCirculo = radioCirculo * radioCirculo * Math.PI;
console.log(`El radio del círculo ${radioCirculo}cm`);
console.log(`El diametro del círculo ${diametroCirculo}cm`);
console.log(`La circunferencia del círculo ${perimetroCirculo}cm`);
console.log(`El área del círculo ${perimetroCirculo}cm²`);

console.groupEnd();
function btnCalcularPerimetro() {
  try {
    alert(
      "El perímetro de tu cuadrado es:" +
        perimetroCuadrado(
          parseInt(document.getElementById("ladoCuadradoId").value)
        ) +
        "cm"
    );
  } catch (error) {
    alert("Favor de ingresar solo números");
  }
}
function btnCalcularArea() {
  try {
    alert(
      "El área de tu cuadrado es:" +
        areaCuadrado(
          parseInt(document.getElementById("ladoCuadradoId").value)
        ) +
        "cm²"
    );
  } catch (error) {
    alert("Favor de ingresar solo números");
  }
}
function calcAlturaTriIs() {
  debugger;
  const lado1 = parseFloat(document.getElementById("lado1").value),
    lado2 = parseFloat(document.getElementById("lado2").value),
    lado3 = parseFloat(document.getElementById("lado3").value);
  if (lado1 === lado2 || lado2 === lado3 || lado3 === lado1) {
    const a = lado1 === lado2 ? lado1 : lado2 === lado3 ? lado3 : lado1;
    const b =
      lado1 === lado2 && lado1 !== lado3
        ? lado3
        : lado1 === lado3 && lado1 !== lado2
        ? lado2
        : lado1;
    const h = Math.sqrt(a * a - (b * b) / 4);
    document.getElementById("resultado").innerHTML = "Altura: " + h;
  } else {
    document.getElementById("resultado").innerHTML =
      "Resultado: No es isósceles";
  }
}
