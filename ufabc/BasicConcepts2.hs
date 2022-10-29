main :: IO ()
main = do
  print "Hello World"

abs :: (Num a, Ord a) => a -> a
abs n = if n < 0 then (-n) else n

{- we can write the same abs function using identation as well
abs n = if n < 0
  then (-n)
  else n
-}
signum :: (Num a, Ord a) => a -> a
signum n =
  if n < 0
    then -1
    else
      if n == 0
        then 0
        else 1

quadraticEquationRoots :: (Ord a, Floating a) => a -> a -> a -> (a, a)
quadraticEquationRoots a b c = (x1, x2)
  where
    x1 = if delta >= 0 then ((-b) + sqrt delta) / (2 * a) else 0
    x2 = if delta >= 0 then ((-b) - sqrt delta) / (2 * a) else 0
    delta = b ^ 2 - 4 * a * c

-- signum func can be rewriten using guard clauses, since nested ifs is a bad practice (harms visibility)

signum' :: (Num a, Ord a) => a -> a
signum' n
  | n < 0 = -1
  | n == 0 = 0
  | otherwise = 1 -- otherwise is the same as True

quadraticEquationRoots' :: (Ord a, Floating a) => a -> a -> a -> (a, a)
quadraticEquationRoots' a b c =
  if delta < 0
    then error "Negative delta" -- avoid it, because it halts the execution, there is other ways of handling error
    else (x1, x2)
  where
    x1 = ((-b) + sqrt delta) / (2 * a)
    x2 = ((-b) - sqrt delta) / (2 * a)
    delta = b ^ 2 - 4 * a * c

-- If Else
nop :: Bool -> Bool
nop x = if x then False else True

-- Guards
nop' :: Bool -> Bool
nop' x
  | x = False
  | otherwise = True

-- Pattern Matching (Used a lot in Elixir)
nop'' :: Bool -> Bool
nop'' True = False
nop'' False = True

sum' 0 y = y
sum' x 0 = x
sum' x y = x + y

mult 0 _ = 0
mult _ 0 = 0 -- underscore means that a value is not important for the evaluation, thus haskell automatically throws in the garbage
mult 1 y = y
mult x 1 = x
mult x y = x * y

{- Pattern Matching can improve performance since the function does not need to evaluate all the cases, since some cases are pre-evaluated in the code -}

-- Lambda expressions
mult' :: Integer -> Integer -> Integer
mult' = \x y -> x * y