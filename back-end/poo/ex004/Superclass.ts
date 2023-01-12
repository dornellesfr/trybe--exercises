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

}

function myFunc(obj: Superclass) {
  obj.sayHello();
  console.log(obj.isSuper);
}

const firstSuper = new Superclass();
const secondSub = new Subclass();

myFunc(firstSuper);
myFunc(secondSub);
