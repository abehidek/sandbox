use std::env;

fn is_string_numeric(str: &str) -> bool {
    for c in str.chars() {
        if !c.is_numeric() {
            return false;
        }
    }
    true
}

pub fn main() {
    println!("Hello from project_calculator module!\n");

    let args: Vec<String> = env::args().collect();
    const OPERATIONS: [&str; 4] = ["+", "-", "*", "/"];

    for (i, arg) in args.iter().enumerate() {
        // println!("Index: {}, Value: {}", i, arg);

        if i > 1 {
            let first: &str = &args[i - 2];
            let operator: &str = &args[i - 1];
            let last: &str = &arg;

            if is_string_numeric(&first)
                && is_string_numeric(&last)
                && OPERATIONS.contains(&operator)
            {
                // println!("Math op");
                let mut result: i32 = 0;

                match &operator {
                    &"+" => {
                        result = first.parse::<i32>().unwrap() + last.parse::<i32>().unwrap();
                    }
                    &"-" => {
                        result = first.parse::<i32>().unwrap() - last.parse::<i32>().unwrap();
                    }
                    &"*" => {
                        result = first.parse::<i32>().unwrap() * last.parse::<i32>().unwrap();
                    }
                    &"/" => {
                        result = first.parse::<i32>().unwrap() / last.parse::<i32>().unwrap();
                    }
                    &_ => {
                        println!("Err");
                    }
                }

                println!("Result: {}", result);
            }
        }

        let current_str_arg: &str = &arg[..];

        // if is_string_numeric(&before) && OPERATIONS.contains(&current_str_arg) {
        //     println!(
        //         "Before argument ({}) is numeric and atual argument is operator",
        //         &before
        //     );
        // }

        // before = current_str_arg;

        match &current_str_arg {
            &"hello" => println!("Hello World!"),
            &"bye" => println!("Bye World!"),
            &&_ => (),
        }
    }

    // println!("{:?}", args);
}
