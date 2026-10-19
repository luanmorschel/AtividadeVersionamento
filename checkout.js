// ===== SEÇÃO 1: CARRINHO (laços de repetição) =====
function calcularSubtotal(itens) {
  let subtotal = 0;
  let i = 0;
  while (i < itens.length) {
    subtotal = subtotal + itens[i].preco * itens[i].quantidade;
    i++;
  }
  return subtotal;
}

function contarItens(itens) {
  let total = 0;
  let i = 0;
  while (i < itens.length) {
    total = total + itens[i].quantidade;
    i++;
  }
  return total;
}


// ===== SEÇÃO 2: CUPOM (estruturas condicionais) =====
function aplicarCupom(subtotal, codigo) {
  const cupom = codigo.trim().toUpperCase();
  let valor = subtotal;
  if (cupom === "DESC10") {
    valor = subtotal * 0.9;
  } else if (cupom === "DESC20" && subtotal >= 200) {
    valor = subtotal * 0.8;
  } else if (cupom === "FRETEGRATIS") {
    valor = subtotal - 15;
  }

  return Math.max(valor, 0);
}


// ===== SEÇÃO 3: CHECKOUT (integração) =====
function finalizarCompra(itens, codigoCupom) {
  const subtotal = calcularSubtotal(itens);
  const total = aplicarCupom(subtotal, codigoCupom);
  return { subtotal, desconto: subtotal - total, total };
}


// ===== SEÇÃO 4: TESTES =====
const itens = [
  { nome: "Intel i5", preco: 450, quantidade: 1 },
  { nome: "Cooler 90mm", preco: 40, quantidade: 6 }
];

console.log(finalizarCompra(itens, "DESC10")); // { subtotal: 690, desconto: 69, total: 621 }