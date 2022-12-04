// tuples group together values of different types
// max 12 elements

pub fn run() {
    println!("Hello from tuples.rs!");

    let person: (&str, &str, i8) = ("abe", "japan", 20);
    println!(
        "{name} is from {country} and is {age}",
        name = person.0,
        country = person.1,
        age = person.2
    )
}
