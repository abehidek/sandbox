// Variables are imutable by default

fn greet(name: &str, age: i16) {
  println!(
    "My name is {name}, I'm {age} years old", 
    name=name, age=age
  );
}

pub fn run() {
  println!("Hello from vars.rs");
  let name = "Abe";
  let mut age = 20;

  greet(name, age);
  
  age = 38;

  greet(name, age);
}