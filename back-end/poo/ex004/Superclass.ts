class Superclass {
  public isSuper: boolean;
  constructor() { 
    this.isSuper = true;
  };

  public sayHello() {
    console.log('Hello, world!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

function myFunc(obj: Superclass) {
  obj.sayHello();
  console.log(obj.isSuper);

  console.log(obj.isSuper ? 'Super!' : 'Sub!');
}

const firstSuper = new Superclass();
const secondSub = new Subclass();

myFunc(firstSuper);
myFunc(secondSub);
