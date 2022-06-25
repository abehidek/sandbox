/*

Same as a array however the size can change since
its allocated in the heap

https://doc.rust-lang.org/rust-by-example/std/vec.html

*/

pub fn run() {
    println!("Hello from vectors.rs");

    let mut numbers: Vec<i32> = vec![4, 3, 2, 1];
    // have the some of the same methods defined in arrays.rs

    // push to vector
    numbers.push(0);

    // pop off vector last value
    numbers.pop();

    println!("{:?}", numbers);

    // loop
    for x in numbers.iter() {
        println!("Number: {}", x);
    }

    // loop and mutate values (similar to map)
    for x in numbers.iter_mut() {
        *x *=2; // double every element in the array
    }
    println!("{:?}", numbers);
}