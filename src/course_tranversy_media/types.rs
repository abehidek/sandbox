/*
Integers: u8, i8: unsigned and signed
floats: f32, f64
Boolean (bool)
Characters (char)
Tuples
Arrays
*/

// Rust is statically typed language, but the compiler can usually infer what type we want to use based on the value and how we use it

pub fn run() {
    println!("Hello from types.rs!");
    let x = 1; // By default this is going to be i32
    let y = 2.5; // ... f64

    // to do it explicitly:
    let z: i64 = 3271893021;
    // to find the max size:
    println!("Max i32: {}", std::i32::MAX);
    println!("Max i64: {}", std::i64::MAX);
    println!("Max i128: {}", std::i128::MAX);

    let is_active: bool = true;

    // get boolean from expression
    let is_greater: bool = 2 > 3; // false

    let a1 = 'a';
    let a2 = '🤣'; // any unicode, you can use emoji lmao

    println!("{:?}", (x, y, z, is_active, is_greater, a1, a2));
}
