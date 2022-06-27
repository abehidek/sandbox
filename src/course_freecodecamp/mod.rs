// mod cli_calculator;
mod image_combiner;

pub fn main() {
    // println!("Hello from course freeCodeCamp!");
    // cli_calculator::run();
    let result: Result<(), _> = image_combiner::run();
    println!("{:?}", result);
}
