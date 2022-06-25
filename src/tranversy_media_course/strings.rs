/*

2 types of strings:

- Primitive: immutable fixed-length string somewhere in memory
- String: growable, heap-allocated data structure, use when you need to modify or own string data

*/

pub fn run() {
    println!("Hello from strings.rs!");
    let hello = "Primite string"; // primite string by default &str
    let mut world = String::from("String string"); // String string std::string::String

    world.push('H');
    world.push_str("ello");

    println!("Capacity: {}", world.capacity()); // Capacity in bytes
    println!("Is empty?: {}", world.is_empty());
    // ... String.contains("value");
    // ... String.replace("string", "not string")

    // Loop throuight string by whitespace

    for word in world.split_whitespace() {
        println!("{}", word);
    }

    // create string with capacity

    let mut s = String::with_capacity(10);
    s.push('a');
    s.push('b');
    println!("{}", s);

    // assertion testing
    assert_eq!(2, s.len()); // pass

    /* 
    assert_eq!(3, s.len()); 
    >   thread 'main' panicked at 'assertion failed: `(left == right)`
        left: `3`,
        right: `2`', src\strings.rs:38:5
    */

    // get len
    println!("{:?}", (
        hello,
        //hello.len(),
        world,
        // world.len()
    ))
}