// Fizzbuzz using while
fn fizz_buzz(iterations: i32) {
    fn div_by(number: i32, divisor: i32) -> bool {
        let is_divisible: bool = number % divisor == 0;
        return is_divisible;
    }

    let mut n = 1;
    while n <= iterations {
        let div_by_3: bool = div_by(n, 3);
        let div_by_5: bool = div_by(n, 5);
        if div_by_3 { print!("fizz"); }
        if div_by_5 { print!("buzz"); }
        if div_by_3 || div_by_5 { println!(""); }
        else { println!("{}", n) }
        n += 1;
    }
}

pub fn run() {
    println!("Hello from loops.rs");

    let mut count = 0;
    // infinite loop be like:
    loop {
        count += 1;
        println!("Number: {}", count);

        if count == 20 { break; }
    }
    
    // fizz_buzz(15);

    // you can use for with range as well
    for x in 0..10 { println!("{}", x*2); }
}