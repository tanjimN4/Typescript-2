{
    // Conditional Type
    type a= null
    type b= undefined

    type x = a extends null ? true : false //conditional type

    type y = a extends null ? true : b extends undefined ? undefined : any

    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
        plane: string;
      };
    
      //keyof Sheikh   "bike" | "car" | "ship"
    
      // car ase kina / bike ase kina / ship kina / tractor ase kina
      type CheckVehicle<T> = T extends keyof Sheikh ? true : false;
    
      type HasPlane = CheckVehicle<"plane">;
    
}