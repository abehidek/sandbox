pub fn _run() {
    // most unique feature from this lang, enables memory safety guarantees without a gc, aborded topics will be: borrowing, slices and how rust lays data out in memory.

    /*
    most memory used on a program execution either are in:
    - Stack: Faster than heap limited in size memory location, where short-lived and references to things in heap are stored, it also contains all instructions for a cpu to handle, whereas things put in stack obeys the LIFO (Last-in-First-out) order, when calling a function, the code is allocated in stack, when it finishes it's execution, it's droped off. Memory in which size is know at compile time mostly are allocated in here (such as functions, integers and string slices).
    - Heap: Slower than stack unlimited in size memory location, here we can find long-lived variables, sort of pool of global variables which can grow in size, supports dynamic mem allocation (variables can grow or shrink in size during runtime exec), these variables are referenced in the Stack.
    */

    /*
    in many programming langs, memory is approached in two main ways:
    1. explicit allocation/free memory: probably the first approach created to handle memory, here, we specify statements/operations/instructions in the CPU to allocate memory for our use, or to free it on the Heap, because this increases program complexity (since you now need to reason about memory management), and can be unsafe (since you rely on humans to do it, which can be error prone), engineers created a new approach to do this automatically without worrying, which is the next approach. it's used programming languages such as C and C++, which are know to be faster languages compared to garbage collected ones.
    2. garbage collector: a program implemented by a interpreter/compiler in which exists at runtime exec, which the main purpose is to find not-referenced variables (not used) in Heap and freed it during program runtime exec, it's used on many high level programming languages such as Java, Python, Go, Haskell et cetera..., because we need a literal program to run along side with our program, it makes these languages slower than languages in which you do the explicit mem management, but increases productivity, code readability and makes our code (kinda) safe to memory issues since we remove the control of memory from the developer (although we have some runtime issues sometimes like memory leak).

    But rust uses a different approach: memory is managed through a system of ownership with a set of strict rules that the compilers checks, if passes, the compiler automatically puts memory allocation/de-allocation code, making the software:
    - memory safe (since it's guaranteed by the compiler itself, if code is unsafe the compiler will not compile)
    - fast (doesn't need a program inside the runtime exec in which monitors all variables and it's usage during runtime exec)

    this of course have some drawbacks (like the fact that compiling takes long long time sometimes even with caching)
    */

    /*
    Ownership Rules:
    - Each value in Rust has a owner
    - There can only be one owner aat a time
    - When the owner goes out of scope, the value will be dropped.
    */

    /*
    Strings in rust divide into two types: str and String:
    - the first is strings in which we know the size (immutable by default, we can copy these strings into other variables tho)
    - the second is strings in which we don't know the size (might grow or shrink during runtime exec)
     */

    let mut s = String::from("hello");
    s.push_str(", world!");
    println!("{}", s);

    /*
    Allocation happens in the same way as other languages, but Rusts differs on droping that variable.
    Most langs uses a garbage collector, which takes care of doing that during runtime, it keeps track of all variables and cleans up memory that isn't being used anymore,

    Rust takes a different path, where the memory is automatically returned once the variable that owns it goes out of scope.
     */

    {
        let s = String::from("banana"); // s is valid from this point forward

        // do stuff with s
        println!("{s}");
    } // this scope is now over, and s is no longer valid

    // there is a natural point at which we can return the memory our tring needs to the allocator: when s goes out of scope. When a variable goes out of scope, Rust call special functions for us. This function is called `drop`, and it's where the author of String can put the code to return the memory. Rust calls `drop`  automatically at the closing curly bracket.

    // In C++ we have the same pattern of deallocating resources at the end of an item's lifetime, which is called RAII (Resource Acquisition Is Initialization).

    // Variables and Data Interacting with Move

    // Stack allocation
    let x = 5; // bind the exp 5 to var x
    let y = x; // copy the value in x and bind it to y
    println!("{x}, {y}"); // now both var are equal to 5
                          // this looks similar because integers are simple values with a know, fixed sizem and these two 5 values are pushed onto the stack

    // Heap allocation
    let s1 = String::from("hello");
    let _s2 = s1;

    /*
    even tho it looks similar to the stack example, it not the same, because instead of copying the value, we are copy the pointer to the heap
    this means s1 and s2 points to the same address in mem heap. we have two references to the same memory
    this happens because copying the entire heap data can be very expensive in terms of runtime perf if the data on the heap were large.

    We said that Rust automatically calls the drop function when a variable goes out of scope, but the above example we have s2 and s1 which points to the same memory, when the scope ends, we try to free the same memory, which is the double free error and is one of the memory safety bugs we mentioned previously. Freeing mem twice can lead to memory corruption, which can potentially lead to security vulnerabilities.

    To ensure mem safety, after the line `let s2 = s1;`, Rust considers s1 as no longer valid. Therefore, Rust doesn't need to free anything when s1 goes out of scope.

    If we try to use s1 after the s2 declaration we get the following error:

    println!("{}", s1);
    borrow of moved value: `s1`
    value borrowed here after move
     */

    // there's the term shallow copy and deep copy (used across multiple langs), the concept of copying the pointer, length and capacity without copying the data probably sounds like making a shallow copy. But Rusts also invalidates the first variable, instead of being a shallow copy, we call a `move`, we say s1 was moved into s2.

    // thus by invalidating s1, we solve our problem, once s2 goes out of scope it will be droped from the memory too.
    // also, there's a design choice that implied by this: Rust will never automatically create "deep" copies of your data. Therefore, any automatic copying can be assumed to be inexpensive in terms of runtime perf.

    // BUT, sometimes we do want to deeply copy the heap data of the String for example, not just Stack data, we can use a common method called `clone`.

    let s3 = String::from("Heap data!");
    let s4 = s3.clone(); // copied heap data :o

    println!("{s3}, {s4}");

    // this produce the the behaviour as the stack copying
    // clone method may be expensive, it's a visual indicator that something diff is going on

    // Back to the stack copy:
    let n1 = 5;
    let n2 = n1;

    println!("{n1}, {n2}"); // this works because integers are types in which have a know size at compile time, therefore there's no reason we would want to prevent n1 from being valid after we created n2, so calling clone wouldn't do anything diff from the usual shallow copying.

    // Rust has a special annotation called the Copy trait, that we can place on types that are stored on the stack, as integers are. If a type implements the Copy trait, variables that use it do not move, but rather are trivially copied, making them still valid after assignment to another variable.

    // Rust won't let us annotate a type with the Copy trait if the type, or any of its parts, has implemented the Drop trait. If the type needs something special to happen when the value goes out of scope and we add the Copy trait to that type, we get a compile-time error, we can add the Copy trait to any type by following "Derivable Traits" in appendix C of the Rust lang book.

    /*
    Examples of types that implements the Copy trait:
    - All integers
    - Boolean
    - All floats
    - The character type char
    - Tuples, if they contain types that also implement Copy e.g. (i32, i32) implements but (i32, String) does not
     */

    // Ownership on Functions:
    // works simarly to when assigning a value to a variable. Passing a variable to a function will move or copy, just as assignment does.

    let stringu = String::from("heap data string");
    takes_ownership(stringu);

    let intu = 5;
    makes_copy(intu);

    fn takes_ownership(some_string: String) {
        // some_string comes into scope
        println!("{some_string}");
    } // here some_string goes out of scope and `drop` is called, mem is freed

    fn makes_copy(some_int: i32) {
        // some_int comes into scope
        println!("{some_int}");
    } // here some_int goes out of scope. Nothing special happens.

    // if we try to use stringu after the call to takes_ownership, Rust would throw a compile-time error. These static checks protects us from mistakes.

    // Return values and Scope
    // return values can also transfer ownership
    fn gives_ownership() -> String {
        let some_string = String::from("yours now lol");
        some_string
    }

    fn takes_and_gives_back(a_string: String) -> String {
        a_string
    }
    {
        let _s1 = gives_ownership(); // gives_ownership moves its return value into s1
        let _s2 = String::from("hello"); // s2 comes to scope
        let _s3 = takes_and_gives_back(_s2); // s2 is moved into takes_and_gives_back, which also moves its return value into s3
    } // here s3 and s1 goes out of scope and is dropped, s2 is moved therefore nothing happens

    // rust lets us return multiple values using a tuple

    {
        fn calculate_length(s: String) -> (String, usize) {
            let length = s.len();
            (s, length)
        }

        let s1 = String::from("hello");
        let (s2, len) = calculate_length(s1);
        println!("The length of {s2} is {len}");
    }

    // but taking ownership and then return ownership with every function is a bit tedious. What if we want to let a function use a value but not take ownership? Its quite annoying that anything we pass in also needs to be passed back if we want to use again.

    // that's where we use the references!
    // instead of passing the ownership of a value to the function just so that the function can read the value, we can pass a reference instead.
    // a reference is like a pointer in that it's an address we can follow to access the data stored at that address; that data is owned by some other variable. Unlike a pointer tho, a reference is guaranteed to point to a valid value of a particular type for the life of that reference.
    {
        let s1 = String::from("warudo");
        let len = calculate_length(&s1); // &s1 synthax elts create a reference to that value of s1 and pass it to the calculate_length fn, thus we are not passing the ownership but the reference, this means that the value it points to will not be dropped when the reference stops being used.
        println!("The length of '{s1}' is {len}");

        fn calculate_length(s: &String) -> usize {
            // & represents a reference, it allows to refer to some value without taking ownership of it
            s.len()
        } // here, s goes out of scope. But because it does not have ownership of what it refers to, it is not dropped, consequently we don't need to return the ownership.
          // We call the action of creating a reference borrowing. As in real life, if a person owns something, you can borrow it from them. When you're done, you have to give it back because you don't own it.

        // &String s points to String s1 which then points to a heap allocation by address which contains the value "warudo"
        // Note: the opposite of referencing (& operator) is dereferencing (* operator) which will be discussed later.

        // But!, we cannot modify something we borrowed, the following code creates an error
        // {
        //     fn change(some_string: &String) {
        //         some_string.push_str(", world");
        //     }
        //     let mut s = String::from("Hello");
        //     change(&s);
        // }

        // Just as variables are immutable by default, so are references.

        // Mutable References
        // we can fix the above code by using a mutable reference.
        {
            fn change(some_string: &mut String) {
                some_string.push_str(", world");
            }
            let mut s = String::from("Hello");
            println!("old string: {s}");
            change(&mut s);
            println!("new string: {s}");
        }
        // Tho, mutable references has a big restriction: if you have a mutable reference to a value, you can not have other references to that value.
        // the following code does not work
        // {
        //     let mut s = String::from("Hello");
        //     let r1 = &mut s;
        //     let r2 = &mut s; // cannot borrow `s` as mutable more than once at a time

        //     println!("{r1}, {r2}");
        // }

        /* the benefit of having this restriction is that Rust can prevent data races at compile time. A data race is similar to a race condition and happens when these three behaviours occur:
        - Two or more pointers access the same data at the same time.
        - At least one of the pointers is being used to write to that data.
        - There's no mechanism being used to sync access to data.

        Data races cause undefined behaviour and can be difficult to diagnose and fix when you're trying to track them down at runtime

        Tho, we can use curly brackets to create a new scope, allowing for multiple references, just not simultaneous ones:
        */
        {
            let mut s = String::from("Hello");
            {
                let r1 = &mut s;
                println!("{r1}");
            } // r1 goes out of scope here, so we can make a new ref without problems
            let r2 = &mut s;
            println!("{r2}");
        }

        // Also, Rust enforces a similar rule for combining mutable and immutable refs, the following code results in an error:
        // {
        //     let mut s = String::from("Hello");
        //     let r1 = &s;
        //     let r2 = &s;
        //     let r3 = &mut s; // cannot borrow `s` as mutable because it is also borrowed as immutable
        //     println!("{r1}, {r2}, {r3}")
        // }

        // We also cannot have a mutable ref while we are having an immutable one to the same value
        // Users of an immutable ref don't expect the value to suddenly change, however multiple immutable ref are allowed because no one who is just reading the data has the ability to affect anyone else's reading of the data.

        // Note that a reference's scope starts where it is introduced and continues thru the last time the ref is used, because of that the following code will compile it.
        {
            let mut s = String::from("Hello");
            let r1 = &s;
            let r2 = &s;
            println!("{r1}, {r2}"); // r1 and r2 will not be used after this point

            let r3 = &mut s; // no problem
            println!("{r3}");
        }
        // the scopes of r1 and r2 ends after the println!, where they are last used, which is before the mut ref r3 is created. These scopes don't overlap, so this code is allowed

        // Dangling References
        // In languages with pointers (such as C), it's easy to erroneously create a dangling pointer (a pointer that references a location in memory that may have been given to someone else) by freeing some memory while preserving a pointer to that memory.
        // Rust guarantees that references will never be dangling ref: if you have a ref to some data, the compiler will ensure that the data will not go out of scope before the reference to the data does.

        // {
        //     fn dangle() -> &String { // expected named lifetime param
        //         let s = String::from("Hello"); // s is a new string
        //         &s // we reutrn a reference to the newly create String s
        //     } // here, s goes out of scope, and is dropped, It's memory goes away
        //     // Danger!
        //     let reference_to_nothing = dangle();
        // }
        // this function's return type contains a borrowed value, but there's no value for to be borrowed from

        // the error referes to a feature not covered yet: lifetimes
        // Because s is created inside dangle, when the code of dangle is finished, s will be deallocated.
        // But we tried to return a ref to it, this means this ref would be pointing to an invalid String.

        // THE RULES OF REFERENCES:
        // - At any given time, you can have either one mutable reference, or any number of immutable references
        // - References must always be valid (no dangling)

        // But there's a different type of reference: slices

        // The Slice Type
        // slice let you reference a contiguous sequence of elements in a collection rather than the whole collection, it's a kind of reference, so it doesn't have ownership

        // to understand better, let's write a function that takes a string of words separated by spaces and returns the first word it finds in that string. If the function does not find a space, it returns the entire string

        // attempt 1
        {
            fn first_word(s: &String) -> String {
                let mut first: String = String::new();
                let mut contains_empty_space = false;
                for (i, c) in s.chars().enumerate() {
                    if (!contains_empty_space) && (c == ' ') {
                        contains_empty_space = true;
                        for (i2, c2) in s.chars().enumerate() {
                            if i2 < i {
                                first.push(c2)
                            }
                        }
                    }
                }

                if !contains_empty_space {
                    first = s.clone();
                }

                first
            }
            let phrase = String::from("Nice");
            let first_word_from_phrase = first_word(&phrase);
            println!("The first word from the phrase '{phrase}' is '{first_word_from_phrase}'");
        }

        // book
        {
            fn first_word(s: &String) -> usize {
                let bytes = s.as_bytes();
                for (i, &item) in bytes.iter().enumerate() {
                    if item == b' ' {
                        return i;
                    }
                }
                s.len()
            }
            // But there's a problem, these functions return a String or usize in the context of a reference &String passed into the function, which means that if we change the String, the value will not update itself and we need to recalculate again (that means, it will bot be validin the future)
            let mut s = String::from("hello warudo");
            let word = first_word(&s); // word will get the value 5
            s.clear();

            print!("word: {word}"); // word still has the value 5, but there's no more string, meaning word is invalid

            // this happens because word isn't connected to the state of s at all

            // also, having to worry about the index in word getting out of sync with the data s is tedious and error prone, managing these indices is even more brittle if we write a `second_word` fn, it's signature would look like: `fn second_word(s: &String) -> (usize, usize) {`
            // now we're tracking the starting and ending index, but luckily, Rust has a solution to this problem: string slices
        }

        // String Slices <- reference to a part of a String:
        {
            let s = String::from("Hello World");
            let hello = &s[0..5]; // or &s[..2] // goes from beginning to 5
            let world = &s[6..11]; // or &s[6..] // goes to last byte of String
                                   // using &s[..] would create a slice of the entire String

            println!("variable hello: {hello}");
            println!("variable world: {world}");

            // rather than a ref to the entire String, hello is a ref to a portion of String, specified in the extra [0..5] bit. We create slices using a range within brackets by specifying the starting index to ending index, the slice data struct stores the starting position and the length of the slice, which correspond to ending index minus starting index
        }

        // we can now rewrite first_word fn to return a slice
        {
            fn first_word(s: &String) -> &str {
                let bytes = s.as_bytes();
                for (i, &item) in bytes.iter().enumerate() {
                    if item == b' ' {
                        return &s[..i]; // if found an empty space, return a slice of that string until the empty space
                    }
                }

                &s[..] // else return the entire array
            }
            let mut _phrase = String::from("Functional");
            println!("first word of {} is {}", _phrase, first_word(&_phrase));

            // now the compiler will ensure the ref to the String remain valid, if we clear the String as below
            let word = first_word(&_phrase);
            // phrase.clear(); // cannot borrow `phrase` as mutable because it is also borrowed as immutable
            println!("first word of {} is {}", _phrase, word);

            // returning a slice would also work for a second_work fn
            fn second_word(s: &String) -> &str {
                let bytes = s.as_bytes();
                let mut end_of_first_word: Option<usize> = None;

                for (i, &item) in bytes.iter().enumerate() {
                    if item == b' ' {
                        if let Some(end) = end_of_first_word {
                            return &s[(end + 1)..i];
                        } else {
                            end_of_first_word = Some(i)
                        }
                    }
                }

                if let Some(end) = end_of_first_word {
                    return &s[(end + 1)..];
                }

                return &s[..];
            }

            println!(
                "second word of '{}' is '{}'",
                _phrase,
                second_word(&_phrase)
            );
        }

        // String Slices as params
        // by using a &str instead of a &String in the first_word fn param, we would be more flexible as we then could both pass a string slice (passing directly), and if we pass a String, we can pass a slice of the String or a reference to the String. This flexibility takes advantage of deref coercions a feature that will be covered in "Implicit Deref Coercions with Functions and Methods" section in chapter 15;
        {
            fn first_word(s: &str) -> &str {
                let bytes = s.as_bytes();
                for (i, &item) in bytes.iter().enumerate() {
                    if item == b' ' {
                        return &s[..i];
                    }
                }
                &s[..]
            }
            let my_string = String::from("Hi mom");
            // first_word works on slices of `String`s, whether partial or whole
            let _word = first_word(&my_string[0..1]); // first word
            let _word = first_word(&my_string[..]); // entire String
            let _word = first_word(&my_string); // a ref to a `String` is equivalent to whole slices of `String`

            let my_string_literal = "hello world";
            // first_word also works on slices of string literals, whether partial or whole
            let _word = first_word(&my_string_literal[0..6]);
            let _word = first_word(&my_string_literal[..]);
            // because string literals *are* string slices already, this works too, without the slice synthax!
            let _word = first_word(my_string_literal);
        }

        // Other Slices <- as we discussed earlier, slices are generally used in collections, and strings are only one of them, we can use it on arrays too (since strings are an array of chars duh):
        {
            let a = [1, 2, 3, 5, 8, 13, 21]; // consider this arr

            // we might want to refer to a part of an array:
            let slice = &a[1..3]; // slice has the type &[i32], It works the same way as strings slices do
            assert_eq!(slice, &[2, 3]); // testing!!

            // but more of these collections will be discussed on vectors section in chapter 8;
        }

        /* Summary
        - ownership (strict rules)
        - borrowing (references)
        - slices
        these feats ensure memory safety in Rust at compile time, it let's you control over your memory usage in the same way as other systems programming lang, but having the owner of the data automatically clean up that data when the owner goes out of scope, meaning you don't have to write and debug extra code to get this control
        */
    }
}
