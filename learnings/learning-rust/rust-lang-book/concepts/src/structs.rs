pub fn run() {
    /*  or structure, is a custom data type that lets you package together data with name semantic context, structs are similar to oop's class data type
    this chapter will address:
    - how to define/instantiate structs
    - define methods (fns associated to data)
    */

    // Defining and Instantiating -> structs are similar to tuples, it can contain different types, but in a struct you'll name each piece of data so it's clear what the values mean. Adding these means that structs are more flexible since it doesn't have to rely on the order of the data to specify or access the values of an instance.

    {
        struct User {
            active: bool,
            username: String,
            email: String,
            sign_in_count: u64,
        }
        // we're using `String` instead of `&str` string slice type because we want each instance of this struct to own all of itds data and for that data to be valid as long as the entire struct is valid

        // but its also possible for structs to store ref to data owned by something else, but needs the use of lifetimes, which ensures that the data referenced by a struct is valid for as long as the struct is. if we try to use it anyway the compiler will recommend the use of lifetimes.

        // instantiating:
        let mut user1 = User {
            active: true,
            username: String::from("abehidek"),
            email: String::from("abehidek@email.com"),
            sign_in_count: 54,
        };

        println!("{}", user1.username);
        println!("{}", user1.active);
        println!("{}", user1.email);
        println!("{}", user1.sign_in_count);

        // to get a specified value we use dot notation, if the instance is mutable we can change using the dot notation too:
        user1.username = String::from("hidekabe");

        // Rust doesn't allow us to mark only certain fields as mutable, thus we need to annotate the entire instance as mut

        fn build_user(email: String, username: String) -> User {
            User {
                active: true,
                username, // Field init shorthand (exactly as JS)
                email,
                sign_in_count: 1,
            }
        }

        // creating an instance from other instance using struct update synthax
        let user2 = build_user(String::from("eba@email.com"), String::from("eba"));
        let _user3 = User {
            username: String::from("user3"),
            ..user2 // specifies that the remaining fields not explicitly set shoud have the same value as user2
                    // this synthax must come last
        };

        // the struct update synthax uses `=` underhood (like an assignment), thus we aren't copying but moving the values from user2 to use3
        // println!("{}", user2.email); // does not works: borrow of moved value: `user2.email`
        println!("{}", user2.username); // works
    }

    // Using Tuple Structs without named fields to create different types -> similar to tuples, they have the added meaning of the struct name provides, but don't have names associated with their fields, rather, they just have the types of the fields, they're useful when you want to give the whole tuple a name and make the tuple a different type from other tuples, and when naming each field as in a regular struct would be verbose or redundant.

    struct Color(i32, i32, i32); // RGB
    struct Point(i32, i32, i32); // x, y and z axis

    {
        // they have the data strucutre, but it's naming assigns a semantic context to that data structure, creating different types
        let _black = Color(0, 0, 0);
        let _origin = Point(0, 0, 0);

        // Each struct you define is its own type, even tho the fields have the same types. A function that takes a param of type `Color` cannot take a `Point` as an argument for e.g., which does not happen with tuples since they are generic (no naming attributed to that DS)
    }

    // Unit-like Structs without any fields -> structs that don't have any fields, called unit-like structs because they behave similarly to `()` (empty tuple), they can be useful when you need to implement a trait on some type, but don't have any data that you want to store in the type itself.
    {
        struct AlwaysEqual;
        let _subject = AlwaysEqual;

        // Imagine that later we'll implement behaviour for this type such that every instance of AlwaysEqual is always equal to every instance of any other type, perhaps to have a know result for testing purposes. We wouldn't need any data to implement that behaviour.
    }
}
