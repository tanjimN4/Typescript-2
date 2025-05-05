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