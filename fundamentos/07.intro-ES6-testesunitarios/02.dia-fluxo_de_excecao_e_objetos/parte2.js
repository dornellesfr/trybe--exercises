const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => `Hello, ${order['name']}, Phone number: ${order['phoneNumber']}, R: ${order['address']['street']}, N°: ${order['address']['number']}, AP: ${order['address']['apartment']}`;

console.log(customerInfo(order));
  


const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment.total = '50';
  return `Hello, ${order['name']}, the total of your request ${Object.keys(order['order']['pizza'])} and ${order['order']['drinks']['coke']['type']} is R$ ${order['payment']['total']},00 !`;
}

console.log(orderModifier(order));