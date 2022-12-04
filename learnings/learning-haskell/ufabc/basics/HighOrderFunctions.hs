module Main where

main = putStr "Hello World"

sum' :: Int -> (Int -> Int)
sum' x y = x + y

-- $/> sum'3 = sum' 3

-- $/> sum'3 2

double = \x -> (* 2) x

double' = (2 *)

double'' = (* 2)

-- $/> double' 5

twice :: (a -> a) -> a -> a
twice f x = f (f x)

-- $/> twice (*2) 3

-- $/> twice reverse [1,2,3]

quadruple = twice (* 2)

-- $/> quadruple 5

-- * High Order Function

-- any function that receive one or more functions as formal parameters (arguments) or returns a function.

map' :: (a -> b) -> [a] -> [b]
-- map' f xs = [f x | x <- xs]
map' f [] = []
map' f (x : xs) = f x : map f xs

-- $/> map' (+1) [1,2,3]

filter' :: (a -> Bool) -> [a] -> [a]
-- filter' p xs = [x | x <- xs, p x]
filter' p [] = []
filter' p (x : xs)
  | p x = x : filter' p xs
  | otherwise = filter' p xs

-- $/> filter' even [1..10]

-- $/> filter' (\s -> length s < 3) ["Hi", "World"]

-- $/> filter' (<5) [1..10]

sumQuadEven :: [Int] -> Int
-- sumQuadEven ns = sum [n ^ 2 | n <- ns, even n]
-- sumQuadEven ns = sum (map (^ 2) (filter even ns))
sumQuadEven ns =
  sum $
    map (^ 2) $
      filter even ns

-- $> sumQuadEven [1..10]

-- $> :t ($)
-- ($) :: (a -> b) -> a -> b

-- $> all even [2,4,6,8]

-- $> any odd [2,4,6,8]

-- $> takeWhile even [2,4,6,7,8]

-- $> dropWhile even [2,4,6,7,8]
