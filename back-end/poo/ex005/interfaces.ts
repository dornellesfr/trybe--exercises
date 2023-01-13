interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
};

class myClass implements MyInterface {
  constructor(
    public myNumber: number) {
      this.myNumber = myNumber;
  };

  myFunc(myParam: number): string {
    const result = this.myNumber + myParam;
    return `${result}`; 
  };
};

const obj = new myClass(5);

console.log(obj.myFunc(12));