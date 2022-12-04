// https://www.reddit.com/r/dailyprogrammer/comments/onfehl/20210719_challenge_399_easy_letter_value_sum/

fn letter_value_sum(word: &str) -> u32 {
    let mut sum = 0;
    for c in word.chars() {
        sum += c as u32 - 96
    }
    sum
}

fn letter_value_sum2(word: &str) -> u32 {
    word.chars().into_iter().map(|x| x as u32 - 96).sum()
}

pub fn main() {
    println!("{}", letter_value_sum("microspectrophotometries"));
    println!("{}", letter_value_sum2("microspectrophotometries"));
}
