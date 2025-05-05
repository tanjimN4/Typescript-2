# TypeScript: Type Assertion vs Type Narrowing

## ✅ Type Assertion
Telling TypeScript what the type is, even if it can't figure it out by itself.

🧠 Think of it like saying:
“Trust me, I know what I’m doing.”

```ts
{
    // Type Assertion
    let data: any;
    data = 'hello'
    let dataAssert = data as string
}
```
---

## ✅ Type Narrowing
Letting TypeScript figure out the specific type based on a check like typeof.

🧠 Think of it like saying:
“Check the type first, then use it safely.”

ts
Copy code

```ts
{
    // Type Narrowing
    const data=(id:number | string)=>{
        if (typeof id === "string") {
            console.log(id.toUpperCase());
          } else {
            console.log(id);
          }
    }
}
```
# Type vs Interface in TypeScript

TypeScript provides two main ways to define the shape of objects: `type` and `interface`.

```ts
interface is best for object shapes and extensibility.

type is best for more complex, flexible type definitions.

// Interface
interface Person {
    name: string;
}

interface Person {
    age: number;
}
interface Person2 extends Person{
    roll: number
}

const user: Person2 = {
    name: "Alex",
    age: 18,
    roll:1
};
```
---

# Generics with Interface Function

Generics

```ts

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
```

 Generics with Type
```ts
type Box<T> = {
    content: T;
  };
  
  const stringBox: Box<string> = { content: 'Apple' };
  const numberBox: Box<number> = { content: 100 };
```

Generics with Interface
```ts
interface Container<T> {
    value: T;
  }
  
  const fruit: Container<string> = { value: 'Mango' };
  const age: Container<number> = { value: 25 };
```
Generics with Function
```ts
function printItem<T>(item: T): void {
    console.log(item);
  }
  
  printItem<string>('Laptop'); // "Laptop"
  printItem<number>(99);       // 99
```
Generics with Tuples
```ts

// Tuple Example (No Generics)
const person: [string, number] = ['Alice', 25];

// Tuple with Generics

function createPair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
  }

  const pair1 = createPair<string, number>('Age', 30);   
const pair2 = createPair<boolean, string>(true, 'Yes'); 
```

# Constraints & keyof Operator

constraints
```ts
    const addCourseToStudent = <
        T extends { id: number; name: string; email: string }
    >(student: T) => {
        const course = "Next Level Web Development";
        return { ...student, course };
    };
    addCourseToStudent({
        id: 1,
        name: "Sara",
        email: "sara@email.com",
        hobby: "painting" // This is okay, it's just extra!
      });
      // You can only enter if you has required data


    // Rejected! No ID card. it  dose not give the required data so its reject the data

      addCourseToStudent({

        name: "Ali",
        email: "ali@email.com"
      });

  ```
  ---

generic constraint with keyof operator

```ts
// You can only ask for things that are actually there.
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    };

    type Owner = "bike" | "car" | "ship"; // manually
    type Owner2 = keyof Vehicle;

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    };

    const car = {
        model: "Toyota 100",
        year: 200,
    };

    const result1 = getPropertyValue(car, "model");

```

---
# Asynchronous Typescript

```ts
{
    // promise
  
    type Todo = {
      id: number;
      userId: number;
      title: string;
      completed: boolean;
    };
  
    const getTodo = async (): Promise<Todo> => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
  
      const data = await response.json();
      return data;
      // console.log(data);
    };
  
    getTodo();
  
    type Something = { something: string };
  
    // simulate
    const createPromise = (): Promise<Something> => {
      return new Promise<Something>((resolve, reject) => {
        const data: Something = { something: "something" };
        if (data) {
          resolve(data);
        } else {
          reject("failed to load data");
        }
      });
    };
  
    // calling create promise function
    const showData = async (): Promise<Something> => {
      const data: Something = await createPromise();
      return data;
      // console.log(data);
    };
  
    showData();
  
    //
  }
```

# Conditional Type

```ts

✅ Basic Conditional Types
    type a= null
    type b= undefined

    type x = a extends null ? true : false //conditional type

    // x evaluates to true because a is null, and a extends null is true.

    type y = a extends null ? true : b extends undefined ? undefined : any

// Nested conditional types:
// If a is null, return true.
// Else if b is undefined, return undefined.
// Otherwise, return any.

    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
        plane: string;
      };
    
      //keyof Sheikh   "bike" | "car" | "ship"
    
      // car ase kina / bike ase kina / ship kina / tractor ase kina
      type CheckVehicle<T> = T extends keyof Sheikh ? true : false;
    
     type HasPlane = CheckVehicle<"plane">; // true
     type HasTractor = CheckVehicle<"tractor">; // false

//      HasPlane returns true because "plane" exists in Sheikh.

// HasTractor (if written) would return false because "tractor" is not a key of Sheikh.

```
---
    

# mapped types
  
```ts
// Mapping Numbers to Strings
    const arrOfNumbers: number[] = [1, 4, 5];
    const arrOfStr: string[] = arrOfNumbers.map((number) =>
      number.toString()
    );
    console.log(arrOfStr);
```
This code converts each number in the array to a string using .toString().
map() goes through every number and returns a new array of strings.

```ts
  
    // Type Lookup
    type AreaNumber = {
      height: number;
      width: number;
    };
    
  
    type Height = AreaNumber["height"]; // Height is now a number
```
✅ You’re using a lookup type to extract the type of a specific property from an object type.
Here, AreaNumber["height"] gives you the type of height, which is number.


```ts

    // Mapped Types
    type AreaString<T> = {
      [key in keyof T]: T[key];
    };
  
    const area1: AreaString<{ height: string; width: number }> = {
      height: "100",
      width: 50,
    };

```
This is a mapped type. It loops over every key in a given object type (T) and keeps the type of each key the same (T[key]).
 creating a new type where:

height is a string

width is a number

This works because AreaString<T> copies the structure of whatever type you pass in.

---

# utility types
```ts
    // Pick
    type Person = {
      name: string;
      age: number;
      email?: string;
      contactNo: string;
    };
  
    type NameAge = Pick<Person, "name" | "age">;
  
    // Omit
    type ContactInfo = Omit<Person, "name" | "age">;
  
    // Required
    type PersonRequired = Required<Person>;
  
    // Partial
    type PersonPartial = Partial<Person>;
  
    // Readonly
    type PersonReadonly = Readonly<Person>;
  
    const person1: PersonReadonly = {
      name: "x",
      age: 200,
      contactNo: "017",
    };
    // person1.name = "y";
  
    // Record
    // type MyObj = {
    //   a: string;
    //   b: string;
    // };
  
    type MyObj = Record<string, string>;
  
  
    const obj1: MyObj = {
      a: "a",
      b: "b",
      c: "c",
      d: "d",
    //   e: 6,
    };

    const EmptyObj: Record<string, unknown> = {};
  // ✅ This allows an object with any string keys, where the values can be anything, but TypeScript will treat them as unknown (you must narrow the type before using).
  ```