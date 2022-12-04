pub fn run() -> () {
    println!("Hello from print.rs");

    // Placeholder
    // println!("Bin: {0:b} Hex: {0:x} Octal: {0:o}", 10);
    println!("Bin: {value:b} Hex: {value:x} Octal: {value:o}", value = 10);
    println!("{:?}", (12, true, "hello")) // debug
}
