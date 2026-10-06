// ===== SEÇÃO 1: CARRINHO (laços de repeti ção) =====
{
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
}
function contarItens ( itens ) {
}
// ===== SEÇÃO 2: CUPOM ( estruturas condicionais ) =====
function aplicarCupom ( subtotal , codigo ) {
// TODO
}
// ===== SEÇÃO 3: CHECKOUT ( integra ção) =====
function finalizarCompra ( itens , codigoCupom ) {2
return { subtotal : 0 , desconto : 0 , total : 0 }; // TODO : integrar carrinho e cupom
}
// ===== SEÇÃO 4: TESTES =====
const itens = [
{ nome : " Camiseta ", preco : 50 , quantidade : 2 } ,
{ nome : "Tênis", preco : 150 , quantidade : 1 }
];
console . log ( finalizarCompra ( itens , " DESC10 ") ) ;