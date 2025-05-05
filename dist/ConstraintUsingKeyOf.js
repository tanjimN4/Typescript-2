"use strict";
{
    // constraints
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
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
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const car = {
        model: "Toyota 100",
        year: 200,
    };
    const result1 = getPropertyValue(car, "model");
    //
}
