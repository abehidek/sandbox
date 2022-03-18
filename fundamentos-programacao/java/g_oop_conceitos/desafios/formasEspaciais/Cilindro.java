package g_oop_conceitos.desafios.formasEspaciais;

import java.util.Scanner;

public class Cilindro extends FormasEspaciais{
    public void calcularVolume(double num1, double num2) {
        System.out.println("Volume: "+num2*Math.PI*Math.pow(num1, 2));
    }
    public void calcularAreaSuperficial(double num1, double num2) {
        System.out.println("Área Superficial: "+2*Math.PI*num1*num2);
    }
    public void calcular() {
        Scanner input = new Scanner(System.in);
        double num1 = inputNumber(input, "Raio");
        double num2 = inputNumber(input, "Altura");
        calcularVolume(num1, num2);
        calcularAreaSuperficial(num1, num2);
    }
}
