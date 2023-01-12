// Exercício 3: Vamos mudar um pouco nosso contexto para um sistema de vendas de uma lanchonete. Crie uma classe que represente uma pessoa cliente da lanchonete, uma classe que represente um pedido e uma que represente um item do pedido.

// A pessoa cliente deverá conter o nome;
// O item do pedido deve conter o nome do pedido (ex. “Batatas fritas”; “Açaí”) e o preço;
// O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: “cartão”, “dinheiro”) e o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto.

class Client {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() { return this._name };
  set name(name: string) { this._name = name };
}

class Order {
  private _client: Client;
  private _items: Item[];
  private _payment: 'debitCard' | 'creditCard' | 'cash';
  private _discount: number;

  constructor(client: Client, items: Item[], payment: 'debitCard' | 'creditCard' | 'cash', discount: number) {
    this._client = client;
    this._items = items;
    this._payment = payment;
    this._discount = discount;
  }

  get client() { return this._client };
  get items() { return this._items };
  get payment() { return this._payment };
  get discount() { return this._discount };

  set client(client: Client) { this._client = client };
  set items(items: Item[]) { this._items = items };
  set payment(payment: 'debitCard' | 'creditCard' | 'cash') {
    if(payment === 'debitCard' || payment === 'creditCard' || payment === 'cash') {
      this._payment = payment;
    };
  };
  set discount(discount: number) { this._discount = discount };

  public totalValue() {
    let totalValue = 0;
    this._items.forEach((item) => {
      totalValue += item.price;
    });
    return totalValue;
  }

  public totalValueWithDiscount() {
    const toDiscount = 1 - this._discount;

    const finalValue = this.totalValue() * toDiscount;

    return finalValue;
  }

}

class Item {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get name() { return this._name };
  get price() { return this._price };

  set name(name: string) { this._name = name };
  set price(price: number) { this._price = price };
}