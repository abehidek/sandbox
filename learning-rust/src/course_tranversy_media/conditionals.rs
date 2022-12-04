/*

flow of control

*/

pub fn run() {
    println!("Hello from conditionals.rs!");

    let age: u8 = 21;
    let check_id: bool = true;

    // if/else and: &&, or:||
    if age >= 21 && check_id {
        println!("greater or equal than 21! with id");
    } else if age < 21 && check_id {
        println!("not greater or equal than 21 with id!");
    } else {
        println!("where's your id?")
    }

    // no ternary operator :(, but shorthand if exists
    let is_of_age = if age >= 21 { true } else { false };
    println!("Is of age: {}", is_of_age);
}
