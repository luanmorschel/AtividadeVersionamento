// ===== SEÇÃO 1: CARRINHO (laços de repetição) =====

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

// ===== SEÇÃO 4: TESTES =====
const itens = [
  { nome: "Intel i5", preco: 450, quantidade: 1 },
  { nome: "Cooler 90mm", preco: 40, quantidade: 6 }
];

console.log(finalizarCompra(itens, "DESC10")); // { subtotal: 250, desconto: 25, total: 225 }