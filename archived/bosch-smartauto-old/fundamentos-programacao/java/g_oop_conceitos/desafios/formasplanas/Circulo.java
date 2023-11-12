package g_oop_conceitos.desafios.formasplanas;

import java.util.Scanner;

public class Circulo extends FormaPlana {
    public void calcularArea(double num1) {
        System.out.println("Area: "+ ((num1*num1)*Math.PI));
    }
    public void calcularPerimetro(double num1) {
        System.out.println("Perimetro: "+(num1*2*Math.PI));
    }
    public void calcular() {
        Scanner input = new Scanner(System.in);
        double num1 = inputNumber(input, "Raio");
        calcularArea(num1);
        calcularPerimetro(num1);
    }
}
