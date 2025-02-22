// let sales: number = 123456789;
// let course: string = 'TypeScrip';
// let is_published: boolean = true;
// let level;


// function render(document) {
//     console.log(document);
// }


// Array


// Tuple
// let user: [string, number, boolean];
// user = ["Alice", 25, true]; // ✅ Correct
// user = [25, "Alice", true]; // ❌ Error: Order and types must match

// =============================================================

// Object
// const car: { type: string, model: string, year: number } = {
//     type: "Toyota",
//     model: "Corolla",
//     year: 2009
// }

// console.log(car);



// Type Inference
// TypeScript can infer the types of properties based on their values.

// const car = {
//     type: "Toyota",
//   };
//   car.type = "Ford2"; // no error
//   // car.type = 2; // Error: Type 'number' is not assignable to type 'string'.
//   console.log(car);



//   Optional Properties
// Optional properties are properties that don't have to be defined in the object definition.

// Example without an optional property
// const car: {type: string, mileage: number} = { // Error: Property 'mileage' is missing in type '{ type: string;
// // } ' but required in type '{ type: string; mileage: number; }'.
// type: "Toyota",
// };
// car.mileage = 2000;


// Example: with an optional property
// const car: { type: string, mileage?: number} = {
//     type: "Toyota"
// }
// car.mileage = 2000;


// =============================================================

// Index Signatures
// Index signatures can be used for objects without a defined list of properties.

// const nameAgeMap: { [index: string]: number } = {};
// nameAgeMap.Jack = 25; // no error 
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.


// =============================================================

// TypeScript Enums

// enum CardinalDirections {
//     North,
//     East,
//     South,
//     West
//   };
              
//   let currentDirection = CardinalDirections.North;
  
//   // North is the first value so it logs '0'
//   console.log(currentDirection);
  
  // throws error when commented in as 'North' is not a valid enum
  // currentDirection = 'North'; 
  // Error: "North" is not assignable to type 'CardinalDirections'.



// Numeric Enums - Initialized
// You can set the value of the first numeric enum and have it auto increment from that:

enum CardinalDirections {
    North = 1,
    East,
    South,
    West
  };
  
  // logs 1 since we initialized the first value to something other than '0'
  console.log(CardinalDirections.North);
  
  // logs 4 as it continued on from the initial '1' value
  console.log(CardinalDirections.West);




//   Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value. Then the values will not incremented automatically:

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
};

// logs 404
console.log('status code',StatusCodes.NotFound);
console.log('status code', StatusCodes.Success);





// String Enums
// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.


enum CardinalDirections_ {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
};


// log "North"
console.log('CardinalDirections_', CardinalDirections_.North);

// logs "West"
console.log('CardinalDirections_', CardinalDirections_.West);




// =============================================================

// TypeScript Tuples

// Typed Arrays

// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// To define a tuple, specify the type of each element in the array:


// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

console.log('ourTuple:', ourTuple);

// As you can see we have a number, boolean and a string. But what happens if we try to set them in the wrong order:
// define our tuple
// let ourTuple: [number, boolean, string];
// // initialize incorrectly throws an error
// ourTuple = [false, 'Coding God was mistaken', 5];
// console.log(ourTuple);



// Readonly Tuple
// define our tuple
let ourTuple_: [number, boolean, string];

// initialize correctly
ourTuple_ = [5, false, 'Coding God was here'];

// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');

console.log(ourTuple_);

// You see the new valueTuples only have strongly defined types for the initial values:

// define our readonly tuple
// const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// // throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');


// Named Tuples
// Named tuples allow us to provide context for our values at each index.
const graph: [x: number, y: number] = [55.2, 41.3];
// Named tuples provide more context for what our index values represent.


// Destructuring Tuples
// Since tuples are arrays we can also destructure them.
const graph_: [number, number] = [55.2, 41.3];
const [x, y] = graph;
























