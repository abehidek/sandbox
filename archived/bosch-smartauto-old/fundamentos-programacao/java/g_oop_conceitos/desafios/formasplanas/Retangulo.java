package g_oop_conceitos.desafios.formasplanas;

import java.util.Scanner;

public class Retangulo extends FormaPlana {
    public void calcularArea(double num1, double num2) {
        System.out.println("Area: "+ num1*num2);
    }
    public void calcularPerimetro(double num1, double num2) {
        System.out.println("Perimetro: "+(num1*2)+(num2*2));
    }
    public void calcular() {
        Scanner input = new Scanner(System.in);
        double num1 = inputNumber(input, "Base");
        double num2 = inputNumber(input, "Altura");
        calcularArea(num1,num2);
        calcularPerimetro(num1,num2);
    }
}
