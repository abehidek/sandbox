-- Useful resources:
-- https://www.youtube.com/playlist?list=PLe7Ei6viL6jGp1Rfu0dil1JH1SHk9bgDV
-- http://learnyouahaskell.com/chapters
main = do
  print "Hello"
  print "World"
  let sumMe x y = x + y
  print (show (sumMe 3 5))

  return ()

doubleSmallNumber x = if x > 100 then x else x * 2

-- http://learnyouahaskell.com/starting-out#an-intro-to-lists

-- let arr = [[1,2,3,4,5]]
arr = [[1,2,3,5], [1,2,3,6]]
foo = [[1,2,3,5], [1,2,3,6]] -- <- IMUTABLE

-- arr > foo -- False -- arr == foo -- True
-- head arr -- [1,2,3,5]
-- tail arr -- [[1,2,3,5]]
-- last arr -- [1,2,3,6]
-- init arr -- [[1,2,3,5]]

-- arr = [[1,2,3,5], [1,2,3,6]]
--        <-head-->  <--tail-->
--       <--init-->  <--last->

-- length arr        2
-- length (arr !! 1) 4
-- null arr          False
-- null []           True
-- reverse arr       [[1,2,3,6],[1,2,3,5]]
-- reverse (arr !! 1)[6,3,2,1]
-- take 3 (arr !! 1) [1,2,3]

bar = arr !! 0
-- bar               [1,2,3,5]
-- drop 3 bar        [5]
-- drop 5 bar        []
-- maximum bar       5
-- minimum bar       1
-- sum bar           5
-- product bar       30
-- elem 2 bar        True
-- 2 `elem` bar      True
-- elem 4 bar        False

-- # Texas ranges
-- [1..20]          [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
-- ['a'..'z']       "abcdefghijklmnopqrstuvwxyz"
-- ['K'..'Z']       "KLMNOPQRSTUVWXYZ"
-- [2,6..20]        [2,6,10,14,18]
-- [10,9..1]        [10,9,8,7,6,5,4,3,2,1]
-- [0.1,0.3..1]     [0.1,0.3,0.5,0.7,0.8999999999999999,1.0999999999999999]

-- Infinite list be like:
-- [1.2..]

-- Algo: get the first 5 multiples of 7
-- Sol.1: [7, 14..5*7]      [7,14,21,28,35]
-- Sol.2: take 5 [7, 14..]  [7,14,21,28,35] it won't try to evaluate the infinite bc Haskell is lazy
-- take 10 (cycle bar)      [1,2,3,5,1,2,3,5,1,2]
-- take 10 (repeat 5)       [5,5,5,5,5,5,5,5,5,5]
-- replicate 3 10           [10,10,10]

-- List comprehension

-- In math: S = { 2*x | x e N, x <= 10 }
-- Haskell: [x * 2 | x <- [1..10]]         [2,4,6,8,10,12,14,16,18,20]
-- [x * 3 | x <- [1..15]]                              [3,6,9,12,15,18,21,24,27,30,33,36,39,42,45]
-- [x * 3 | x <- [1..15], ((x * 3) `mod` 15) == 0]     [15,30,45]
-- [x * 3 | x <- [1..15], (mod (x * 3) 15) == 0]       [15,30,45]

-- daleDele xs = [ if even x then "DALE" else "DELE" | x <- xs, x < 20 ]
-- daleDele [1..30] ["DELE","DALE","DELE","DALE","DELE","DALE","DELE","DALE","DELE","DALE","DELE","DALE","DELE","DALE","DELE","DALE","DELE","DALE","DELE"]

-- you can use multiple conditions as well
-- [ x | x <- [10..20], x /= 13, x /= 15, x /= 19]  
-- [10,11,12,14,16,17,18,20]

-- and combine one list to another (get all possible combinations)
-- [ x*y | x <-[2,5,10], y<-[8,10,11] ] 
-- [16,20,22,40,50,55,80,100,110]

-- [ x*y | x <-[2,5,10], y<-[8,10,11,20] ]
-- [16,20,22,40,40,50,55,100,80,100,110,200]

-- a length function
-- lenght' xs = sum 