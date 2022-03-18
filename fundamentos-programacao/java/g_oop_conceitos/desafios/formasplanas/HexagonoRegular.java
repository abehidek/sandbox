package g_oop_conceitos.desafios.formasplanas;

import java.util.Scanner;

public class HexagonoRegular extends FormaPlana {
    public void calcularArea(double num1) {
        System.out.println("Area: "+ (6*(num1*num1)*Math.sqrt(3))/4);
    }
    public void calcularPerimetro(double num1) {
        System.out.println("Perimetro: "+(num1*6));
    }
    public void calcular() {
        Scanner input = new Scanner(System.in);
        double num1 = inputNumber(input, "Lado");
        calcularArea(num1);
        calcularPerimetro(num1);
    }
}
