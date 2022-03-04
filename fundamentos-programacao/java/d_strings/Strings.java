package d_strings;

public class Strings {
    public static void main(String[] args) {
        String minhaString = "Like a bosch";
        System.out.println(minhaString + "!");
        System.out.println(minhaString.concat("!!!"));
        minhaString = minhaString.concat("!!");
        System.out.println(minhaString.charAt(0));
        System.out.println(minhaString.startsWith("like"));
        System.out.println(minhaString.toUpperCase());
        System.out.println(minhaString.equalsIgnoreCase("Like")); // Para ignorar a diferença de maiuscula e minuscula
        if (minhaString.equalsIgnoreCase("Like")) {
            // Para ignorar a diferença de maiuscula e minuscula
        }
        System.out.println(minhaString=="Like a bosch!!");
        System.out.println(minhaString.equals("Like a bosch!!"));
    }
}
