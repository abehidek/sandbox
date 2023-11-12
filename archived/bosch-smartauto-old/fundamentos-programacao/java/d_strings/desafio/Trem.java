package d_strings.desafio;

public class Trem {
    String nome;
    double posicao;
    double velocidade;

    public void exibirInfo() {
        System.out.println("-------------------");
        System.out.println("| Nome: "+this.nome);
        System.out.println("| Posicao: Km "+this.posicao);
        System.out.println("| Velocidade: "+this.velocidade+" Km/h");
        System.out.println("");
    }
}
