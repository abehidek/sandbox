/*
Understanding the module system of rust.
learning source: https://www.youtube.com/watch?v=5RPXgDQrjio
documentations:
  - https://doc.rust-lang.org/rust-by-example/mod/split.html

* Main.rs actually represents the "crate", the root of the module tree
  ---
  crate:
    mod print, vars;
    ...
    mod functions
      pub fn greet() {}

    mod cli:
      pub fn run():
        crate::functions::greet();
        // cli stuff here

    fn main(): // running cargo run will execute this fn, which itself calls the functions from other modules
      print::run();
      vars::run();
      ...
      cli::run():
  ---
* You can have one module inside another
  mod super_module {
    mod sub_module { }
  }
* To reference a parent module you can use the "super" keyword, you can see a example in the enums.rs file
* To avoid repeating the path repetidily, you can make use of the keyword "use" to bring the path to the scope, see the difference between case 1 and case 2:
  --- lib.rs file

  mod module {
    pub mod child_module {
      pub fn module_function() {}
    }
  }

  case 1:
    pub fn main_function() {
      module::child_module::module_function();
      module::child_module::module_function();
    }

  case 2:
    use crate::module::child_module;
    // or
    use self::module:::child_module;

    pub fn main_function() {
      child_module::module_function();
      child_module::module_function();
    }

  ---

* You can create a module in rust by 3 know ways:

    1. Create inside the file you want to use using the "mod" keyword
      --- main,rs
        mod module {
          pub fn module_function() {}
        }
        fn main() {
          // some code here
          module::module_function();
        }
      ---
    2. Create a external file and declare it by using the "mod" kw switching curly bracket with semi-colons
      --- module.rs
        pub fn module_function() {}
      ---

      --- main.rs
        use module;

        fn main() {
          // some code here
          module::module_function();
        }
      ---
    3. Create a folder with a file named "mod.rs", the name of the folder will be the name of the module
      --- module/mod.rs
        pub fn module_function() {}
      ---

      --- main.rs
        use module;
        fn main() {
          // some code here
          module::module_function();
        }
      ---


*/

// Crash course https://www.youtube.com/watch?v=zF34dRivLOw
// mod print;
// mod vars;
// mod types;
// mod strings;
// mod tuples;
// mod arrays;
// mod vectors;
// mod conditionals;
// mod loops;
mod functions;
// mod pointers;
// mod structs;
// mod enums;
mod cli;

fn main() {
  // println!("Hello, world!");
  // print::run();
  // vars::run();
  // types::run();
  // strings::run();
  // tuples::run();
  // arrays::run();
  // vectors::run();
  // conditionals::run();
  // loops::run();
  // functions::run();
  // pointers::run(functions::greet);
  // structs::run(functions::greet);
  // enums::run();
  cli::run();
}
