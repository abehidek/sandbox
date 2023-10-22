#include <stdio.h>

int sum(int num1, int num2)
{
  int result;

  result = num1 + num2;

  return result;
}

int main()
{
  int num1 = 5;
  int num2 = 10;
  int result;

  printf("Hello World!!!!!!\n");

  result = sum(num1, num2);

  printf("Result: %d", result);

  return 0;
}