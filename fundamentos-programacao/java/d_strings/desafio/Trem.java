package d_strings.desafio;

public class Trem {
    String nome;
    String linha;
    double posicao;
    double velocidade;
    double aceleracao;


    // public Trem(String linha, double posicao, double velocidade) {
    //     this.linha = linha;
    //     this.posicao = posicao;
    //     this.velocidade = velocidade;
    //     this.aceleracao = 0;
    // }

    public void exibirInfo() {
        System.out.println("-------------------");
        System.out.println("| Linha: "+this.linha);
        System.out.println("| Posicao: Km "+this.posicao);
        System.out.println("| Velocidade: "+this.velocidade+" Km/h");
        System.out.println("");
    }

    public void percorrer(int tempo) {
        this.posicao += this.velocidade * tempo;
    }

    public void acelerar(int tempo) {
        this.velocidade += this.aceleracao * tempo;
    }

}
