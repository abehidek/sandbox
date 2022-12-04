/*

Fixed len, data are the same types

*/

use std::mem;

pub fn run() {
    println!("Hello from arrays.rs");
    let mut numbers: [i32; 6] = [1, 2, 3, 4, 5, 10];

    // re-assign value
    numbers[2] = 20;

    // numbers.len(); array len
    println!("{:?}", numbers);

    // arrays are stack allocated
    println!("Array occuppies {} bytes", mem::size_of_val(&numbers));

    // get single val
    println!("Single value: {}", numbers[0]);

    // get slice
    let slice: &[i32] = &numbers[0..2];
    println!("Slice: {:?}", slice);
}
