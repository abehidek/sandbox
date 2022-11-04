module ListFolding where

main = putStr "Hello"

-- * Fold

{-
sum [] = 0
sum (x:xs) = x + sum xs

product [] = 1
product (x:xs) = x * product xs

length [] = 0
length (_:xs) = 1 + length xs

f [] = v
f (x:xs) = g x (f xs)
-}

foldr'' :: (a -> b -> b) -> b -> [a] -> b
foldr'' f v [] = v
foldr'' f v (x : xs) = f x (foldr f v xs)

{-

foldr (+) 0 [1,2,3,4,5] = (+) 1 (                            foldr (+) 0 [2,3,4,5])
foldr (+) 0 [1,2,3,4,5] = (+) 1 ((+) 2 (                     foldr (+) 0 [3,4,5]))
foldr (+) 0 [1,2,3,4,5] = (+) 1 ((+) 2 ((+) 3 (              foldr (+) 0 [4,5]))
foldr (+) 0 [1,2,3,4,5] = (+) 1 ((+) 2 ((+) 3 ((+) 4 (       foldr (+) 0 [5]))
foldr (+) 0 [1,2,3,4,5] = (+) 1 ((+) 2 ((+) 3 ((+) 4 ((+) 5 (foldr (+) 0 [])))
foldr (+) 0 [1,2,3,4,5] = (+) 1 ((+) 2 ((+) 3 ((+) 4 ((+) 5 (0)))
foldr (+) 0 [1,2,3,4,5] = (+) 1 ((+) 2 ((+) 3 ((+) 4 5)))
foldr (+) 0 [1,2,3,4,5] = (+) 1 ((+) 2 ((+) 3 9))
foldr (+) 0 [1,2,3,4,5] = (+) 1 ((+) 2 12)
foldr (+) 0 [1,2,3,4,5] = (+) 1 14
foldr (+) 0 [1,2,3,4,5] = 15

-}

-- $/> foldr'' (+) 0 [1..5]

productr = foldr'' (*) 1

-- $/> productr' [1 .. 10]

lengthr :: [a] -> Int
lengthr = foldr'' (\_ n -> 1 + n) 0

-- $/> lengthr [1,3,41,5,6,1,7]

snoc x xs = xs ++ [x]

reverser :: [a] -> [a]
-- reverser (x : xs) = reverser xs ++ [x]
-- reverser = foldr'' (\x xs -> xs ++ [x]) []
reverser = foldr'' snoc []

-- $/> reverser [5,4,3,1,1,2]

sum'' = sum''' 0
  where
    sum''' v [] = v
    sum''' v (x : xs) = sum''' (v + x) xs

foldl'' :: (a -> b -> a) -> a -> [b] -> a
foldl'' f v [] = v
foldl'' f v (x : xs) = foldl'' f (f v x) xs

{-
1 : 2 : 3 : []
1 : (2 : (3 : []))

( ( (3 : []) : 2 ) : 1 )
( ( (3 `f` v) `f` 2 ) `f` 1 )
-}

suml = foldl'' (+) 0

productl = foldl'' (*) 1

lengthl = foldl'' (\n _ -> n + 1) 0

-- $> lengthl [1,4,3,1,7]

flip' :: (a -> b -> c) -> (b -> a -> c)
flip' f = \x y -> f y x

reversel :: [a] -> [a]
reversel = foldl'' (flip' (:)) []

-- $> reversel [1..10]

{-

- * Foldl vs Foldr

Sometimes the way you fold the list can give some performance benefits.

Example:

- foldl (&&) False [False, False, False]
vs
- foldr (&&) False [False, False, False]

in Foldl:

[] : False : False : False

((([] : False) : False) : False)
(((False && False) && False) && False)
((False && False) && False)
(False && False)
False

In Foldr

False : False : False : []
(False : (False : (False : [])))
(False && (False && (False && [])))
(False && _) lazy loaded because False && x will always result in False
False

We can use the following rule to decide wether to use foldl or foldr

If the list passed as formal parameter can be infinity, use foldr
If the used operator can cause some "short circuit" such as above, use foldr
For reversing lists, use foldr
Otherwise, use foldl

use foldl' from Data.List instead of foldl because it forces to evaluate every step on the recursion, instead of only evaluating on the final, this avoids StackOverflowError

-}
