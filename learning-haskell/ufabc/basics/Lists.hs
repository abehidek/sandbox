-- data [] a = [] | a : [a] definition of a list
-- ":" operator  is called "cons" which comes from "construct"

{-
ghci> 1 : []
[1]

ghci> 1 : 2 : 3[]
[1, 2, 3]

ghci> [1, 2, 3]
[1,2,3]

ghci> :t (:) -- type of cons
(:) :: a -> [a] -> [a]

ghci> 0 : [1,2,3]
[0,1,2,3]

ghci> 0 : 1

<interactive>:6:1: error:
    • Non type-variable argument in the constraint: Num [a]
      (Use FlexibleContexts to permit this)
    • When checking the inferred type
        it :: forall {a}. (Num a, Num [a]) => [a]
Error happens because we are passing two numbers instead of one number and one list that the cons operator (:) needs

A String is just a list of chars
ghci> ['a', 'e', 'e']
"aee"

ghci> ['a', 'e', 'e'] == "aee"
True

ghci> [1..10]
[1,2,3,4,5,6,7,8,9,10]

ghci> [1,3..10]
[1,3,5,7,9]

ghci> [1,3..] -- generates an infinite list
[1,3,4,5,6,7,8,9,10,11,12,13...]

ghci> [1,3..] [1,3, $#$#$##$#$] -- $#$#$##$#$ is called thunk, is a instruction on how to generate the next number of an list
-}

-- Functions to work on lists
xs = [1, 3 .. 201]

fst = xs !! 0 -- takes the first element of xs

snd = xs !! 1 -- takes the second element of xs

{-
bang type
ghci> :t (!!)
(!!) :: [a] -> Int -> a
-}

fst' = head xs -- also takes the first element of xs
{-
head type
head :: [a] -> a
-}

body = tail xs -- takes all elements except the head of a list
{-
tail type
tail :: [a] -> [a]
-}

ys = [0 ..]

{-
ghci> head ys
0
-}

first10numbers = take 10 ys -- takes given n first numbers of a list
-- first10numbers = [1,2,3,4,5,6,7,8,9,10]

numbersWithoutFirst10 = drop 10 xs -- removes first n elements of a list
--  numbersWithoutFirst10 = [11,12,13,14,15, ..]

sizeOfInfinite = length ys -- this will never halt because ys is infinite and to calculate it's size it needs to traverse all elements
{-
If we see length type:
ghci> :t length
length :: Foldable t => t a -> Int

length receives a foldable a and returns an Int (size of list)
-}

-- So some functions need to see the entire list (like length), but others might not need to know all elements of a list

sumOfInfinite = sum ys -- returns the sum of all elements of a list of Num (numbers)
{-
type of sum:
sum :: (Foldable t, Num a) => t a -> a

sum needs to receive a list of Num (numbers)
-}

productOfInfinite = product ys -- returns the multiplication of all elements of a list of Num (numbers)

{-
type of product
product :: (Foldable t, Num a) => t a -> a
-}
indexa :: [a] -> Int -> a
indexa [] _ = error "index out of bonds"
indexa (x : xs) n
  | n == 0 = x
  | null xs = error "index out of bonds"
  | otherwise = indexa xs (n - 1)

indexa' xs i = head (drop i xs)

factorial :: Integer -> Integer
factorial x
  | x == 0 = 1
  | otherwise = x * factorial (x - 1)

factorial' :: Integer -> Integer
factorial' n = product [2 .. n]
