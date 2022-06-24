pub fn run() {
    greet("functions");

    // bind functions val to var
    let sum = add(5,6);
    println!("Sum: {}", sum);

    // closure, let you use outside var, which doesnt happen in functions (nested var)
    let n3: i32 = 10;
    let add_nums = |n1: i32, n2: i32| n1 + n2 + n3;
    println!("Another sum: {}", add_nums (3,3));
}

pub fn greet(file_name: &str) {
    println!("Hello from file {}.rs", file_name);
}

fn add(n1: i32, n2: i32) -> i32 {
    // return n1 + n2
    n1 + n2 // dont use semicolon to return
}