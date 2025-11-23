    let numbers = [1, 2, 3]; // Inferred as number[]
    let mixed = [1, "hello", true]; // Inferred as (number | string | boolean)[]
    
    let user = {
      name: "Alice",
      age: 25,
    }; // Inferred as { name: string; age: number; }