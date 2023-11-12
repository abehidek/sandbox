package d_strings;

public class OperadorTernario {

    public static void print(String text) {
        System.out.println(text);
    }
    public static void main(String[] args) {
        double media = 7.1;
        int faltas = 20;
        boolean postura = true;
        if (media>=5.0 && faltas<25 && postura)
            System.out.println("Aprovado");
        else if (media<5.0 && faltas<25 && postura)
            System.out.println("Recuperação");
        else if (media>=5.0 && faltas>=25 && postura)
            System.out.println("Sem férias");
        else if (media>5.0 && faltas<25 && !postura)
            System.out.println("Chamar para conversar");
        else 
            System.out.println("Reprovado");
    }
}
