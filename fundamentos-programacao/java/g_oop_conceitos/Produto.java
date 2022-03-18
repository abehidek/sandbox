package g_oop_conceitos;

public class Produto {
    String nome;
    double preco;
    double desconto;
    boolean disponibilidade;

    public double aplicarDesconto() {
        return preco*(1-desconto);
    }

    // void dizerOi() {
    //     System.out.println("Olá");
    // }
}
