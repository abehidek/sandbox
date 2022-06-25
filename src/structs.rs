// Used to create custom data types

// Traditional Struct
struct Color {
	red: u8,
	green: u8,
	blue: u8
}

// Tuple struct
struct Color2(u8, u8, u8);

struct Person {
	name: String,
	age: u8
}

impl Person {
	// Construct person
	fn new(name: &str, age: u8) -> Person {
		Person {
			name: name.to_string(),
			age: age
		}
	}

	fn info(&self) -> String {
		format!("Person {}, age {}", self.name, self.age)
	}

	fn set_name(&mut self, name: &str) {
		self.name = name.to_string();
	}

	fn to_tuple(self) -> (String, u8) {
		(self.name, self.age)
	}
}

pub fn run(greet: fn(&str)) {
	greet("structs");

	let mut c = Color { red: 255, green: 0, blue: 0 };
	c.red = 200;
	println!("Color: {} {} {}", c.red, c.green, c.blue);

	let d = Color2(255,0,0);
	println!("{}, {}, {}", d.0, d.1, d.2);

	let mut person = Person::new("Abe", 20);
	println!("Person {}, age {}", person.name, person.age);
	person.set_name("Eba");
	println!("{}", person.info());
	println!("{:?}", person.to_tuple());
}