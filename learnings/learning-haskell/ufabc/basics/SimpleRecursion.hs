main = putStrLn "Hello World"

factorial :: Integer -> Integer
factorial n
  | n == 0 = 1
  | otherwise = n * factorial (n - 1)

factorial' 0 = 1
factorial' n = n * factorial (n - 1)

mdc :: Int -> Int -> Int
mdc a 0 = a
mdc 0 b = b
mdc a b = mdc b (mod a b)

sum' :: Num a => [a] -> a
sum' [] = 0
sum' (x : xs) = x + sum' xs

length' :: [a] -> Int
length' [] = 0
length' (_ : xs) = 1 + length' xs

product' :: Num a => [a] -> a
product' [] = 1
product' (x : xs) = x * product xs

qsort :: Ord a => [a] -> [a]
qsort [] = []
qsort (x : xs) =
  qsort sms ++ [x] ++ bgs
  where
    sms = [e | e <- xs, e < x]
    bgs = [e | e <- xs, e >= x]
