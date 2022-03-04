package d_strings.desafio;

import java.util.Scanner;

public class Main {

    public static double inputVelocidade(Trem trem) {
        Scanner input = new Scanner(System.in);
        System.out.println("Digite a velocidade do trem "+trem.nome+": ");
        double velocidade = input.nextDouble();
        return velocidade;
    }
    public static void main(String[] args) {
        
        Scanner input = new Scanner(System.in);

        Trem tremA = new Trem();

        System.out.println("Digite o nome do trem: ");
        tremA.nome = input.nextLine();
        System.out.println("Digite a linha do trem "+tremA.nome+": ");
        tremA.linha = input.nextLine();
        System.out.println("Digite a posicao do trem "+tremA.nome+": ");
        tremA.posicao = input.nextDouble();
        tremA.velocidade = inputVelocidade(tremA);
        input.nextLine();
        
        Trem tremB = new Trem();

        System.out.println("Digite a linha do trem B: ");
        tremB.linha = input.nextLine();
        System.out.println("Digite a posicao do trem B: ");
        tremB.posicao = input.nextDouble();
        System.out.println("Digite a velocidade do trem B: ");
        tremB.velocidade = input.nextDouble()*-1;
        if (tremA.posicao > tremB.posicao)
            System.out.println("Os trems não irão colidir");
        else {
            double tempo = (tremA.posicao-tremB.posicao)/(tremB.velocidade-tremA.velocidade);
            System.out.println(tempo + " hora(s)");
        }
        tremA.exibirInfo();
        tremB.exibirInfo();
        
        input.close();
    }
}
