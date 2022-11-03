module Main (main) where

import Data.List
import Test.QuickCheck

qsort :: Ord a => [a] -> [a]
qsort [] = []
qsort (x : xs) = qsort lhs ++ [x] ++ qsort rhs
  where
    lhs = [e | e <- xs, e <= x]
    rhs = [e | e <- xs, e > x]

prop_idempotency :: Ord a => [a] -> Bool
prop_idempotency xs = qsort (qsort xs) == qsort xs

prop_length :: Ord a => [a] -> Bool
prop_length xs = length (qsort xs) == length xs

prop_min :: Ord a => [a] -> Property
prop_min xs =
  not (null xs)
    ==> head (qsort xs)
    == minimum xs

prop_model :: Ord a => [a] -> Bool
prop_model xs = qsort xs == sort xs

-- prop_idempotency [1,2,3,4]

-- prop_length [1,2,3,4]

-- quickCheck prop_idempotency

-- quickCheck (prop_length :: [Int] -> Bool)

-- quickCheck (prop_length)

-- quickCheck (prop_min)

-- quickCheck (prop_model)

-- qsort [3,3]

-- * Parity

even' x = x `mod` 2 == 0

odd' x = x `mod` 2 == 1

prop_even_odd_alternation :: Integral a => a -> Bool
prop_even_odd_alternation n = even' n /= even' (n + 1)

-- quickCheck prop_even_odd_alternation

prop_if_odd_not_par :: Integral a => a -> Property
prop_if_odd_not_par n = even' n ==> not (odd' n)

-- quickCheck prop_if_odd_not_par

-- * Factorial

fac n
  | n == 0 = 1
  | n == 1 = 1
  | otherwise = n * fac (n - 1)

-- propsFactorialNFactorialNFactorialNPlusOne n = n >= 1 ==> fac n * (n + 1) == fac (n + 1)

propsFactorialNFactorialNFactorialNPlusOne (NonNegative n) =
  fac n * (n + 1) == fac (n + 1)

-- quickCheck propsFactorialNFactorialNFactorialNPlusOne

-- * Collatz

-- n | par n = n / 2
--   | impar n = 3*n + 1
--    n == 1

collatz :: Integral a => a -> a
collatz 1 = 1
collatz n
  | even n = collatz (n `div` 2)
  | otherwise = collatz (3 * n + 1)

prop_collatz :: Integral a => Positive a -> Bool
prop_collatz (Positive n) = collatz n == 1

-- $> quickCheckWith stdArgs {maxSuccess = 15000} prop_collatz

main :: IO ()
main = do
  putStrLn "hello world"
