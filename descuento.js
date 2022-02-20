const coupons = [
  "JuanDC_es_Batman",
  "pero_no_le_digas_a_nadie",
  "es_un_secreto",
];

function calcularDescuento() {
  const precio = parseFloat(document.getElementById("precioId").value);
  const descuento = parseFloat(document.getElementById("descuentoId").value);
  document.getElementById("resultado").innerHTML =
    "El precio con descuento es : $" + (precio - (precio * descuento) / 100);
}
function calcularPrecioConDescuento(precio, descuento) {
  return precio - (precio * descuento) / 100;
}
function onClickButtonPriceDiscount() {
  debugger;
  const inputPrice = document.getElementById("precioId");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  let descuento;

  switch (couponValue) {
    case coupons[0]: // "JuanDC_es_Batman"
      descuento = 15;
      break;
    case coupons[1]: // "pero_no_le_digas_a_nadie"
      descuento = 30;
      break;
    case coupons[2]: // "es_un_secreto"
      descuento = 25;
      break;
  }

  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}
