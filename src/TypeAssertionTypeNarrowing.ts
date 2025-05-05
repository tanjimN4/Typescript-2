{
    // Type Assertion
    let data: any;
    data = 'hello'
    let dataAssert = data as string
}
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