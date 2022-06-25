// types which have a few definite values

enum Movement {
    Up, Down, Left, Right
}

fn move_avatar(m: Movement) {
    match m {
        Movement::Up => println!("Moving Up"),
        Movement::Down => println!("Moving Down"),
        Movement::Left => println!("Moving Left"),
        Movement::Right => println!("Moving Right")
    }
}

pub fn run(greet: fn(&str)) {
    greet("enums");
    let avatar1 = Movement::Left;
    let avatar2 = Movement::Right;
    let avatar3 = Movement::Up;
    let avatar4 = Movement::Down;
    
    move_avatar(avatar1);
    move_avatar(avatar2);
    move_avatar(avatar3);
    move_avatar(avatar4);

}