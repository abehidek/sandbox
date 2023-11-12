package g_oop_conceitos.desafios.formasEspaciais;

import java.util.Scanner;

public class Cone extends FormasEspaciais{
    public void calcularVolume(double num1, double num2) {
        System.out.println("Volume: "+(1/3)*Math.PI*num2*num1*num1);
    }
    public void calcularAreaSuperficial(double num1, double num2) {
        System.out.println("Área Superficial: "+(num1*num1*Math.PI)+(Math.PI*num2*num1));
    }
    public void calcular() {
        Scanner input = new Scanner(System.in);
        double num1 = inputNumber(input, "Raio");
        double num2 = inputNumber(input, "Geratriz");
        calcularVolume(num1, num2);
        calcularAreaSuperficial(num1, num2);
    }
}
