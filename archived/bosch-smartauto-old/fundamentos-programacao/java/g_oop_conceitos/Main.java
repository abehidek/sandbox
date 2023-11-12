package g_oop_conceitos;

public class Main {
    public static void main(String[] args) {
        Produto p1 = new Produto();
        p1.nome = "Notebook";
        p1.preco = 5000;
        p1.desconto = 0.1;
        p1.disponibilidade = true;

        System.out.println("Nome: " + p1.nome);
        System.out.println("Preço: " + p1.preco);
        System.out.println("Novo preço: " + p1.aplicarDesconto());
    }
}
