{
    // constraints
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


    // Rejected! No ID card. it ti dose not give the required data its reject the data

    //   addCourseToStudent({

    //     name: "Ali",
    //     email: "ali@email.com"
    //   });

    
      
      

}
{
    // generic constraint with keyof operator
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

    //
}