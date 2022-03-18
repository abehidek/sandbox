package g_oop_conceitos.desafios.formasEspaciais;

import java.util.Scanner;

public class Cubo extends FormasEspaciais {
    public void calcularVolume(double num1) {
        System.out.println("Volume: "+num1*num1*num1);
    }
    public void calcularAreaSuperficial(double num1) {
        System.out.println("Área Superficial: "+6*(num1*num1));
    }
    public void calcular() {
        Scanner input = new Scanner(System.in);
        double num1 = inputNumber(input, "Lado");
        calcularVolume(num1);
        calcularAreaSuperficial(num1);
    }
}
