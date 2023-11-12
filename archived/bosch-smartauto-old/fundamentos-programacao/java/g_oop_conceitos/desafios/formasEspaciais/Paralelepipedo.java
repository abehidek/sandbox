package g_oop_conceitos.desafios.formasEspaciais;

import java.util.Scanner;

public class Paralelepipedo extends FormasEspaciais{
    public void calcularVolume(double num1, double num2, double num3) {
        System.out.println("Volume: "+num1*num2*num3);
    }
    public void calcularAreaSuperficial(double num1, double num2, double num3) {
        System.out.println("Área Superficial: "+(num2*num1)+(num2*num3)+(num1*num3));
    }
    public void calcular() {
        Scanner input = new Scanner(System.in);
        double num1 = inputNumber(input, "Largura");
        double num2 = inputNumber(input, "Altura");
        double num3 = inputNumber(input, "Comprimento");
        calcularVolume(num1, num2, num3);
        calcularAreaSuperficial(num1, num2, num3);
    }
}
