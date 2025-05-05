{
    //utility types
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
  
    //
  }