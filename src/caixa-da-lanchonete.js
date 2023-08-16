class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens) {
    let total = 0;
    let cafeContador = 0;
    let sanduicheContador = 0;

    for (const auxiliar of itens) {
      const [item, quantidade] = auxiliar.split(",");

      let valor = 0;
      if (quantidade < 1) {
        return "Quantidade inválida!";
      }
      switch (item) {
        case "cafe":
          cafeContador = 1;
          valor = 3;
          break;

        case "chantily":
          if (cafeContador > 0) {
            valor = 1.5;
          } else {
            return "Item extra não pode ser pedido sem o principal";
          }

          break;

        case "suco":
          valor = 6.2;
          break;

        case "sanduiche":
          sanduicheContador = 1;
          valor = 6.5;
          break;

        case "queijo":
          if (sanduicheContador > 0) {
            valor = 2;
          } else {
            return "Item extra não pode ser pedido sem o principal";
          }
          break;

        case "salgado":
          valor = 7.25;
          break;

        case "combo1":
          if (total > 0) {
            valor = 9.5;
          } else {
            return "Item extra não pode ser pedido sem o principal";
          }
          break;

        case "combo2":
          if (total > 0) {
            valor = 7.5;
          } else {
            return "Item extra não pode ser pedido sem o principal";
          }
          break;

        case "":
          return "Não há itens no carrinho de compra!";
          break;

        default:
          return "Item inválido!";
          break;
      }

      total = total + valor * quantidade;
    }

    switch (metodoDePagamento) {
      case "dinheiro":
        total = total * 0.95;
        break;

      case "credito":
        total = total * 1.03;
        break;

      case "debito":
        total = total;
        break;

      default:
        return "Forma de pagamento inválida!";
        break;
    }
    if (total.toFixed(2) == "0.00") {
      return "Não há itens no carrinho de compra!";
    }
    return "R$ " + total.toFixed(2).replace(".", ",");
  }
}
const caixa = new CaixaDaLanchonete();

console.log(caixa.calcularValorDaCompra("debito", [" "]));
//console.log(caixa.calcularValorDaCompra("dinheiro", ["cafe,1", "combo1,1"]));

export { CaixaDaLanchonete };
