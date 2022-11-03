module Main where

-- Polimorphism

tamanho :: [a] -> Int
tamanho [] = 0
tamanho (_ : xs) = 1 + tamanho xs

-- Constraints

funcao :: Num b => Bool -> b -> (Bool, b)
funcao a b = (a, b)

fun :: Integral a => a -> a -> a
fun x y = x + y * 3

funcao2 :: (Fractional a, Num b) => a -> a -> b -> (a, a, b)
funcao2 x y z = (x, y, z)

-- Where clause

quadraticEquationRoots a b c =
  ( ((-b) + sqrt (b ^ 2 - 4 * a * c)) / (2 * a),
    ((-b) - sqrt (b ^ 2 - 4 * a * c)) / (2 * a)
  )

quadraticEquationRoots' a b c = (x1, x2)
  where
    x1 = ((-b) + sqrt delta) / (2 * a)
    x2 = ((-b) - sqrt delta) / (2 * a)
    delta = b ^ 2 - 4 * a * c

abc n = aux n 1
  where
    aux n acc
      | n <= 1 = acc
      | otherwise = aux (n - 1) (n * acc)

main :: IO ()
main = do
  print "Hello World"