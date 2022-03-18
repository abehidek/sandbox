package g_oop_conceitos.desafios.formasplanas;

import java.util.Scanner;

public class TrianguloEquilatero extends FormaPlana {
    public void calcularArea(double num1) {
        double altura = num1 * Math.sqrt(3)/(2);
        System.out.println("Altura: "+altura);
        System.out.println("Area: "+ (num1*altura)/2);
    }
    public void calcularPerimetro(double num1) {
        System.out.println("Perimetro: "+(num1*3));
    }
    public void calcular() {
        Scanner input = new Scanner(System.in);
        double num1 = inputNumber(input, "Lado");
        calcularArea(num1);
        calcularPerimetro(num1);
    }
}
