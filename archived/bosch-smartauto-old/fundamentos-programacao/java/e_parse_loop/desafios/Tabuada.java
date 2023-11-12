package e_parse_loop.desafios;
import java.util.Arrays;
public class Tabuada {
    public static final String ANSI_RESET = "\u001B[0m";
    public static final String ANSI_BLACK = "\u001B[30m";
    public static final String ANSI_RED = "\u001B[31m";
    public static final String ANSI_GREEN = "\u001B[32m";
    public static final String ANSI_YELLOW = "\u001B[33m";
    public static final String ANSI_BLUE = "\u001B[34m";
    public static final String ANSI_PURPLE = "\u001B[35m";
    public static final String ANSI_CYAN = "\u001B[36m";
    public static final String ANSI_WHITE = "\u001B[37m";
    public static final String [] CORES = {ANSI_RED, ANSI_GREEN, ANSI_YELLOW, ANSI_BLUE, ANSI_PURPLE, ANSI_CYAN, ANSI_WHITE, ANSI_RED, ANSI_GREEN, ANSI_YELLOW, ANSI_BLUE};
    
    public static void tabuada1() {
        // int [][] array_result = {};
        // for (int j = 1; j<= 10; j++) {
        //     int [] result = {};
        //     for (int i = 1; i <= 10; i++) {
        //         System.out.printf("%d x %d = %d\n", j, i, j*i);
        //         result = Arrays.copyOf(result, result.length+1);
        //         result[result.length-1] = j * i;
        //     }
        //     System.out.println(Arrays.toString(result));
        //     array_result = Arrays.copyOf(array_result, array_result.length+1);
        //     array_result[array_result.length-1] = result;
        // }
        // System.out.println(Arrays.toString(array_result));
        String [] array_result = {};
        for (int j = 1; j<= 10; j++) {
            int [] result = {};
            for (int i = 1; i <= 10; i++) {
                // System.out.printf("%d x %d = %d\n", j, i, j*i);
                System.out.println(CORES[j] + String.format("%d x %d = %d", j, i, j*i) + ANSI_RESET);
                result = Arrays.copyOf(result, result.length+1);
                result[result.length-1] = j * i;
            }
            System.out.println("=================================");
            array_result = Arrays.copyOf(array_result, array_result.length+1);
            array_result[array_result.length-1] = CORES[j] + Arrays.toString(result) + " " + ANSI_RESET;
        }
        System.out.println(Arrays.toString(array_result));
    }
    public static void tabuada2() {
        int j = 1;
        while (j<= 10) {
            int i = 1;
            while (i <= 10) {
                System.out.printf("%d x %d = %d\n", j, i, j*i);
                i++;
            }
            System.out.printf("\n");
            j++;
        }
    }
    public static void main(String[] args) {
        tabuada1();
    }
}
