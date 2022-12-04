use rand::{thread_rng, Rng};

pub enum Errors {
    NonNumericalValue,
}

fn is_string_numeric(str: &String) -> bool {
    for c in str.chars() {
        if !c.is_numeric() {
            return false;
        }
    }
    return true;
}

fn help() {
    println!(
        "
Usage: cargo run -- [options] [arguments]
Options:
    -h, --help, help                Show all the commands
    --range=[range]                 Define a range to secret number
                                        example:    --range=1..5    secret number will be between 1 and 5
Arguments:
    For each number you add here, the program will be 
    generating a new secret number and comparing with 
    the added number.
    example:    cargo run -- 1 5 7 10
        "
    );
}

fn output(wins: u32, loses: u32) {
    println!(
        "\n
🏆 Total Wins: {}
📛 Total Loss: {}",
        wins, loses
    );
}

pub fn main() -> Result<(), Errors> {
    let args: Vec<String> = std::env::args().collect();

    let mut wins_count = 0;
    let mut loses_count = 0;
    let mut range = 1..101;

    if args.len() < 2 {
        help();
        return Ok(());
    }

    for (index, arg) in args.iter().enumerate() {
        if index == 0 {
            continue;
        }
        if arg.starts_with("--range") {
            // let (_, argument) = arg.split_at("=");
            let (_, argument) = arg.split_once('=').unwrap();
            let (start, end) = argument.split_once("..").unwrap();
            range = start.parse::<u32>().unwrap()..end.parse::<u32>().unwrap();
            continue;
        }

        if arg.starts_with("--help") || arg.starts_with("-h") || arg.starts_with("help") {
            help();
            return Ok(());
        }

        let secret_number = thread_rng().gen_range(range.clone());
        if !is_string_numeric(&arg) {
            return Err(Errors::NonNumericalValue);
        }

        let arg_number = arg.parse::<u32>().unwrap();

        if arg_number == secret_number {
            print!("👍 Hits - ");
            wins_count += 1;
        } else {
            print!("❌ Miss - ");
            loses_count += 1;
        }
        println!(
            "Your Guess: {}, Correct Number: {}",
            arg_number, secret_number
        );
    }
    output(wins_count, loses_count);
    Ok(())
}
