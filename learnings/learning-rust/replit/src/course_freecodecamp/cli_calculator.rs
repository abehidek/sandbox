use std::env::{args, Args};

pub fn run() {
    println!("Running the first project: cli calculator");

    let mut args: Args = args();

    println!("{:?}", (args)); // print args

    // iterate over the args arr

    let first = args.nth(1).unwrap();
    let operator = args.nth(0).unwrap().chars().next().unwrap();
    let second = args.nth(0).unwrap();

    // parsing the strings

    let first_number: f32 = first.parse().unwrap();
    let second_number = second.parse::<f32>().unwrap(); // turbofish synthax https://doc.rust-lang.org/1.30.0/book/first-edition/generics.html
    let result = operate(operator, first_number, second_number);

    println!("{}", output(first_number, operator, second_number, result));
}

fn operate(operator: char, first_number: f32, second_number: f32) -> f32 {
    // if operator == '+' {
    //     return first_number + second_number;
    // } else if operator == '-' {
    //     first_number - second_number
    // } else if operator == '/' {
    //     first_number / second_number
    // } else if operator == '*' {
    //     first_number * second_number
    // } else {
    //     0.0 // implicit return
    // }

    match operator {
        '+' => first_number + second_number,
        '-' => first_number - second_number,
        '/' => first_number / second_number,
        '*' | 'x' | 'X' => first_number * second_number,
        _ => panic!("Invalid operator used."),
    }
}

fn output(first_number: f32, operator: char, second_number: f32, result: f32) -> String {
    format!(
        "{} {} {} = {}",
        first_number, operator, second_number, result
    )
}
