package g_oop_conceitos.desafios.formasEspaciais;

import java.util.Scanner;

public class Piramide extends FormasEspaciais{
    public void calcularVolume(double num1, double num2) {
        double base = num1*num1;
        System.out.println("Volume: "+(base*num2)/3);
    }
    public void calcularAreaSuperficial(double num1, double num2) {
        double base = num1*num1;
        double apotema = Math.sqrt(Math.pow(num1/2, 2)+num2*num2); 
        double lados = (num1*apotema)/2;
        System.out.println("Area Superficial: "+(4*lados)+base);
    }
    public void calcular() {
        Scanner input = new Scanner(System.in);
        double num1 = inputNumber(input, "Lado da base");
        double num2 = inputNumber(input, "Altura");
        calcularVolume(num1, num2);
        calcularAreaSuperficial(num1, num2);
    }
}
