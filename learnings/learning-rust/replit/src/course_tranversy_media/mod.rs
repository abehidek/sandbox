// Crash course https://www.youtube.com/watch?v=zF34dRivLOw
mod arrays;
mod cli;
mod conditionals;
mod enums;
mod functions;
mod loops;
mod pointers;
mod print;
mod strings;
mod structs;
mod tuples;
mod types;
mod vars;
mod vectors;

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
