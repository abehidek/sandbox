main = putStrLn "Hello World"

{-
Each list comprehensions is made of:
- Left hand expression (Output function)
- Generator (input set)
- Right hand filter (predicate)

-}

divisibleBy6Numbers = [x | x <- [0, 2 .. 100], mod x 6 == 0]

-- we can have multiple predicates on it

divisibleBy6And4Numbers = [x | x <- [0, 2 .. 100], mod x 6 == 0, mod x 4 == 0]

-- multiple generators
matrix = [(x, y) | x <- [0 .. 5], y <- [11 .. 16]]

matrix' = [(x, y) | y <- [11 .. 16], x <- [0 .. 5]]

listOflistsFlattened = concat [[1, 2, 4], [6, 7, 8]]

myconcatfn xss = [x | xs <- xss, x <- xs]

rangeListComprehension = [(x, y) | x <- [1 .. 20], y <- [x .. 25]]

length' xs = sum [1 | _ <- xs]

divisors n = [x | x <- [1 .. n], mod n x == 0]

isPrime n = divisors n == [1, n]

allPrimeNumbers = [n | n <- [1 ..], isPrime n]

yielded = zip [1, 2, 3, 4, 5] ['a', 'b', 'e', 'd', 'q']

pairs [] = []
pairs [x] = []
pairs (x : y : xs) = (x, y) : pairs (y : xs)

pairs' xs = zip xs (tail xs)

isSort :: Ord a => [a] -> Bool
isSort [] = True
isSort (x : xs)
  | null xs = True
  | p1 <= p2 = isSort xs
  | otherwise = False
  where
    ((p1, p2) : ps) = pairs (x : xs)

isSort' :: Ord a => [a] -> Bool
isSort' xs = null [() | (p, s) <- pairs xs, p > s]
