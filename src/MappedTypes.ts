{
    // mapped types
  
    const arrOfNumbers: number[] = [1, 4, 5];
    const arrOfStr: string[] = arrOfNumbers.map((number) =>
      number.toString()
    );
    console.log(arrOfStr);
  
    // Type Lookup
    type AreaNumber = {
      height: number;
      width: number;
    };
  
    type Height = AreaNumber["height"]; // Height is now a number

    // Mapped Types
    type AreaString<T> = {
      [key in keyof T]: T[key];
    };
  
    const area1: AreaString<{ height: string; width: number }> = {
      height: "100",
      width: 50,
    };
  
  }