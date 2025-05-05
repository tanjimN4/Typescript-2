// Generics

// Without Generics
function getData(value: any): any {
    return value;
  }

//   With Generics
function getDataGenerics<T>(value: T): T {
    return value;
  }

  getDataGenerics<string>('Hello'); // returns 'Hello' as string
  getDataGenerics<number>(123);     // returns 123 as number

//   Generics with Type

type Box<T> = {
    content: T;
  };
  
  const stringBox: Box<string> = { content: 'Apple' };
  const numberBox: Box<number> = { content: 100 };

//   Generics with Interface
interface Container<T> {
    value: T;
  }
  
  const fruit: Container<string> = { value: 'Mango' };
  const age: Container<number> = { value: 25 };
  
//   Generics with Function
function printItem<T>(item: T): void {
    console.log(item);
  }
  
  printItem<string>('Laptop'); // "Laptop"
  printItem<number>(99);       // 99
  
//   Generics with Tuples

// Tuple Example (No Generics)
const person: [string, number] = ['Alice', 25];

// Tuple with Generics

function createPair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
  }

  const pair1 = createPair<string, number>('Age', 30);   
const pair2 = createPair<boolean, string>(true, 'Yes'); 

  
