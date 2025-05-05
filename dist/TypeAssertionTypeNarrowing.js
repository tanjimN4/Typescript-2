"use strict";
{
    // Type Assertion
    let data;
    data = 'hello';
    let dataAssert = data;
}
{
    // Type Narrowing
    const data = (id) => {
        if (typeof id === "string") {
            console.log(id.toUpperCase());
        }
        else {
            console.log(id);
        }
    };
}
