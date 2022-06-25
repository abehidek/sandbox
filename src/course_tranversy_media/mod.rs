// Crash course https://www.youtube.com/watch?v=zF34dRivLOw
mod print;
mod vars;
mod types;
mod strings;
mod tuples;
mod arrays;
mod vectors;
mod conditionals;
mod loops;
mod pointers;
mod structs;
mod enums;
mod cli;
mod functions;

pub fn main() {
    println!("Tranversy Media Course Rust Module!");
    print::run();
    vars::run();
    types::run();
    strings::run();
    tuples::run();
    arrays::run();
    vectors::run();
    conditionals::run();
    loops::run();
    functions::run();
    pointers::run(functions::greet);
    structs::run(functions::greet);
    enums::run();
    cli::run();
}