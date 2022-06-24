/*

This content ended in 1:24:04
https://www.youtube.com/watch?v=zF34dRivLOw

*/

pub fn run(greet_function: fn(&str)) {
    greet_function("pointers");
    let arr1 = [1, 2, 3];
    let arr2 = arr1;

    println!("Arr values: {:?}", (arr1, arr2));

    // array: primitive
    // vectors: non-primitive

    // With non-primitives, if you assign another variable to a piece of data, the first variable will no longer hold that value, You'll need to use a reference (&) to point to the resource

    
    // vector (non-primitive value)
    let vec1 = vec![1, 2, 3];
    let vec2 = &vec1;
    // let vec2 = vec1; // -> Error: value used here after move
    println!("Vec values: {:?}", (&vec1, vec2)); 

}