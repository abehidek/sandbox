package d_strings;

public class Boolean {
    public static void print(String text) {
        System.out.println(text);
    }
    public static void main(String[] args) {
        boolean condicao1 = true;
        boolean condicao2 = 15<12;
        System.out.println(condicao1 && condicao2);
        System.out.println(condicao1 && !condicao2);
        System.out.println(condicao1 || condicao2);
        System.out.println(condicao1 || condicao2);
        print("Hello World"); // Python violado??
    }
}
