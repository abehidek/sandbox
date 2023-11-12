package g_oop_conceitos.desafios.formasEspaciais;

import java.util.Scanner;

public class Esfera extends FormasEspaciais{
    public void calcularVolume(double num1) {
        System.out.println("Volume: "+(4/3)*Math.PI*Math.pow(num1, 3));
    }
    public void calcularAreaSuperficial(double num1) {
        System.out.println("Área Superficial: "+4*Math.PI*(num1*num1));
    }
    public void calcular() {
        Scanner input = new Scanner(System.in);
        double num1 = inputNumber(input, "Raio");
        calcularVolume(num1);
        calcularAreaSuperficial(num1);
    }
}
