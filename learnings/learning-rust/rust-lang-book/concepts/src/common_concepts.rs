pub fn run() {
    // # variables and mutability
    // ## variables
    // by default, variables are immutable
    let x = 5;
    println!("x: {x}");
    // x = 6; -> receives error msg
    let mut y = 10;
    println!("y: {y}");
    y = 39;
    println!("y: {y}");
    // ## constants
    // like immutable variables, values that are bound to a name and are not allowed to change
    // main difference is that we can't use `mut` w constants
    const SESSION_EXPIRATION_IN_SECONDS: u32 = 60 * 60 * 5;
    println!("session expiration: {SESSION_EXPIRATION_IN_SECONDS} seconds");
    // ## shadowing
    // main diff between this and mutation is that shadowing essentially creates a new variable with the same name as before
    let z = 25;
    let z = z + 1; // shadows previous value

    {
        let z = z * 2; // shadows outer z var
        println!("z (inner scope): {z}");
    }

    println!("z: {z}");

    // # data types
    // rust: statically typed lang -> must know the types of all var at compile time.
    // let meaning_of_life: u32 = "42".parse().expect("Not a str number"); // parse get's var type annotation
    // let amout_of_apples = "24".parse::<u32>().expect("Not a str number"); // turbofish synthax
    // ## Scalar types -> represents a single value: integers, floats, booleans and chars
    // ### integer

    let random_binary: u8 = 0b1111_0000;
    println!("random binary: {random_binary}");

    // let mut wall_color: u8 = 0xff;
    // println!("wall color: {wall_color}");
    // wall_color = wall_color + 1; // programs panicks due to integer overflow
    // println!("wall color: {wall_color}");

    // ### floats
    let _f = 2.0; //f64 by default
    let _f32: f32 = 11.54321;

    // ### booleans
    let is_array_empty = false;
    println!("is array empty?: {is_array_empty}");

    // ### char
    let c = 'z';
    let omega: char = 'Ω';
    let sad = '😔';

    println!("chars: {c} {omega} {sad}");
    // ## Compound types -> groups multiple values into one type: tuples and arrays
    // ### Tuple: allow multiple values with diff types into one compound type, have fixed length thus cannot grow or shrink in size during runtime.
    let tup: (i32, f64, u8) = (500, 1.7, 244);

    println!("tuple: {tup:?}"); // needs :? to print in it into console

    // we can pattern match it
    let (_x, y, _z) = tup;
    println!("second value of the tuple: {y}");

    let last_element = tup.2; // we use . followed by index to access a tuple elem
    println!("last value of the tuple: {last_element}");

    // tuple without values `()` has a special name: unit, used to represent an empty return value type, we return this if expression don't return any other value.

    // ### Array: list of elements with the same type, also has fixed length
    let arr: [i32; 5] = [1, 2, 4, 8, 16];
    println!("array: {arr:?}");

    // useful for when we want to alocate data into stack rather than the heap, or to ensure you will always have a fixed number of elements.

    // not flexible as the vector type, similar collection type provided by the standard lib that allows you to grow or shrink in size (however the data is allocated into the heap instead of the stack as it's on arrays)
    let first_elem = arr[0];
    println!("first element of the array: {first_elem}");

    // if you access an elem outside of the array, the program will compile but you get index out of bonds err on runtime (making the program panicking), which the rust runtime memory safety protects you to access an invalid address of memory. (something that does not happens in C or C++)

    // # Functions
    // rust is an expression based lang
    // statement: instructions to perform some action and not return a value
    // expression: evaluate to a resultant value.
    // let keywoard does not evaluate to an expression
    // basic math op like 5 + 6 evaluates to an exp (11)
    // scope blocks can be exps
    let scope_block_result = {
        let x = 3;
        x + 1 // exp does not include ending semicolons
              // adding semicolon to end of a line turn a expression into a statement
    };
    println!("value of scope block is: {scope_block_result}"); // 4

    // if a function does not return anything like this one:
    fn returns_nothing(x: i32) {
        println!("value of argument x from returns_nothing fn: {x}");
    }
    let returns_nothing_evaluation = returns_nothing(3);
    println!("value of returns_nothing fn: {returns_nothing_evaluation:?}");
    // it returns
    // value of returns_nothing fn: () // <- empty tuple
    // we can define the return value of a function using the -> (arrow) synthax
    fn five() -> i32 {
        5
    }
    let some_number = five(); // five evaluates to a i32 integer returned from the five() fn (the number 5)
    println!("some number: {some_number}"); // 5

    // # control flow
    // use if else statements to run code depending on a boolean exp
    // if we use other types (like integers) as a control flow exp, we get mismatch error meaning that only boolean exp can be used in control flow
    // this happens because rust does not tries to convert non-bool types into a bool
    // examples of boolean exp are `false`, `true`, `5>3` etc

    // else if is used for multiple conditions whereas else is the final flow clausule
    // one thing worth noticing is that on runtime exec, when it reaches an if-else-if-else statements, it checks one-by-one from top to bottom, but once the program reaches a true condition, it will not check other if-else-if-else statements linked.
    // however using too many else if exp can clutter the code, that's where we use the match exp

    // we can use if in a let statement, since if is an expression that return some value (nothing is a value too)
    let some_condition = true;
    let control_flow_number = if some_condition { 4 } else { 7 }; // the control_flow_number var is bound to a value based on the outcome of the if expression
    println!("the value of control_flow_number is: {control_flow_number} because some_condition is {some_condition}");

    // in order for this to work, of course the return variable from all branches need to be the same type, the following code get a error.
    // let number_or_string = if some_condition { 5 } else { "six" }; // `if` and `else` have incompatible types expected integer, found `&str`

    // the above work in many dynamic typed langs such as JS, Python et cetera..., but for safety reasons, each variable in Rust only contains a single type (since it needs to know at compile time what the type of number_or_string is).

    // # repetition with Loops -> three kinds of loops: loop, while and for

    // loop kw tells rust to run a code block indefinitely, until you tell to stop (programatically using break, or through using the keyboard shortcut ctrl-c to interrupt a program runtime exec)
    let mut counter = 0;
    loop {
        if counter > 5 {
            println!("not again :(, bye!");
            break;
        }
        println!("again and");
        counter += 1;
    } // similarly to break, we can tell the program to skip any remaining code and start a new iteration of loop, using the continue kw

    // one of the uses of loop, is to retry an operation you know it might fail, such as checking whether a thread has completed their job, you might also need to pass the result of that operation out of the loop to the rest of your code. To do this, you can add the value you want returned after the break exp you use to stop the loop, that value will be returned out of the loop so you can use it.

    let mut another_counter = 0;
    let result = loop {
        another_counter += 1;
        if another_counter == 10 {
            break another_counter * 2;
        }
    };

    println!("result of loop: {result}");

    // if you nest loops inside other loops, break and continue will apply to the innermost loop at that point, but to break from a outermost loop, you can set loop labels to a loop, that you can use with break or continue to specify that those kw apply to the labeled loop instead of the innermost loop, loop labels must begin with a single quote.

    let mut yet_another_counter = 0;
    'counting_up: loop {
        println!("yet_another_counter: {yet_another_counter}");
        let mut remaining = 10;

        loop {
            println!("remaining: {remaining}");
            if remaining == 9 {
                break;
            }
            if yet_another_counter == 2 {
                break 'counting_up;
            }
            remaining -= 1;
        }

        yet_another_counter += 1;
    }
    println!("end count: {yet_another_counter}");

    // conditional loops w/ while -> elimates the necessity of boilerplate nested code (with loop,if,else and break), while a condition evals to true, the code runs, otherwise, it exits the loop

    // while (no pun inteded) while loops can be used to iterate over a collection (such as an array/vector), we have a better syntax for doing that, the for loop!

    let collection = [10, 12, 17, 29, 176, 3];
    let mut index = 0;

    while index < collection.len() {
        println!(
            "value from index {} from collection {:?} is: {}",
            index, collection, collection[index]
        );
        index += 1;
    }

    for element in collection {
        println!("the value is {element}");
    }

    // we could reverse iterate it too, by converting it to a Iterator
    for element in collection.into_iter().rev() {
        println!("[reversed] the value is {element}");
    }

    // there are special synthax for generating ranges of number too, similar to function programming languages such as Haskell
    for element in (1..15).rev() {
        println!("[reversed] the value from range is {element}");
    }

    // there are inclusive ranges too
    for element in 1..=4 {
        println!("[reversed] the value from range is {element}");
    }
}
