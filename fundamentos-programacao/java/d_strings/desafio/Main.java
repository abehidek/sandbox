package d_strings.desafio;

import java.util.Calendar;
import java.util.Date;
import java.util.Scanner;

public class Main {
    public static boolean Numerico(String stringNum) {
        // Função que verifica se o número digitado (String) é númerico
        if (stringNum == null)
            return false;
        try {
            double d = Double.parseDouble(stringNum);
        } catch (NumberFormatException nfe) {
            return false;
        }
        return true;
    }
    public static Date calcularData(long dataMilisegundos, int segundos) {
        // aqui ele pega a data em milisegundos e adiciona nele o tempo até a colisão dos trens
        Date dataAdicionado = new Date(dataMilisegundos + (segundos*1000)); 
        return dataAdicionado; 
    }
    public static Trem entrarTrem(Scanner input, Trem trem) {
        // Função criada para preencher os atributos do objeto trem criados a partir da classe Trem
        while (true) {
            System.out.println("Digite o nome do trem: ");
            if(input.hasNextLine()) {
                String nome = input.nextLine();
                if (nome.isEmpty())
                    System.out.println("Nome vazio!!, Digite novamente\n");
                else {
                    trem.nome = nome;
                    break;
                }
            }
            else
                System.out.println("\nAconteceu algum erro!, por favor digite novamente\n\n");
        }
        while (true) {
            System.out.println("Digite a posicao (do Km 0 ate Km 10000) do trem "+trem.nome+": (Km)");
            if(input.hasNextLine()) {
                String posicao = input.nextLine();
                if (Numerico(posicao))  {
                    trem.posicao = Double.parseDouble(posicao);
                    if (trem.posicao < 0 || trem.posicao > 10000)
                        System.out.println("A posicao deve ser entre o Km 0 e Km 10000!!, Digite novamente\n");
                    else
                        break;
                }
                else
                    System.out.println("Digite um número válido!!, Digite novamente\n");
            }            
            else
                System.out.println("\nAconteceu algum erro!, por favor digite novamente\n\n");       
        }
        while (true) {
            System.out.println("Digite a velocidade do trem "+trem.nome+": (Km/h)");
            if(input.hasNextLine()) {
                String velocidade = input.nextLine();
                if (Numerico(velocidade)) {
                    trem.velocidade = Double.parseDouble(velocidade);
                    if (trem.velocidade < 0 || trem.velocidade > 300)
                        System.out.println("A velocidade não pode ser negativa ou acima de 300 Km/h!! , Digite novamente\n");
                    else
                        break;
                }
                else
                    System.out.println("Digite um número válido!!, Digite novamente\n");
            }
            else
                System.out.println("\nAconteceu algum erro!, por favor digite novamente\n\n");
        }
        return trem;
    }
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        while (true) {
            Trem tremA = new Trem();
            tremA = entrarTrem(input, tremA); // Chama o método entrarTrem passando o input e o objeto tremA como parâmetros
            System.out.println("\n\nAgora digite as informações do segundo trem: \n");
            Trem tremB = new Trem();
            tremB = entrarTrem(input, tremB);
            tremB.velocidade = tremB.velocidade*-1; // INVERTER A DIREÇÃO DO TREM PARA A COLISÃO
            tremA.exibirInfo(); // Acessa o método do objeto de exibir as informações
            tremB.exibirInfo();
            if (tremA.posicao > tremB.posicao) // Se o tremB estiver antes do tremA, eles nunca irão se encontrar pois ambos estão em direções opostas
                System.out.println("Os trens nunca irão se colidir");
            else {
                double tempo = (tremA.posicao-tremB.posicao)/(tremB.velocidade-tremA.velocidade);
                int tempo_segundos = (int) (tempo * 3600);
                System.out.println(tempo_segundos + " segundos");
                double posicao_colisao = tremA.posicao+(tremA.velocidade*tempo);
                // Aqui é onde acontece a criação de um objeto a partir da classe Calendar para fazer contas envolvendo tempo e horário
                Calendar dataSaida = Calendar.getInstance();
                dataSaida.set(Calendar.MONTH, 2);
                dataSaida.set(Calendar.YEAR, 2022);
                dataSaida.set(Calendar.DAY_OF_MONTH, 1);
                dataSaida.set(Calendar.HOUR_OF_DAY, 17);
                dataSaida.set(Calendar.MINUTE, 0);
                dataSaida.set(Calendar.SECOND, 0);
                long dataSaidaSegundos = dataSaida.getTimeInMillis(); // Conversão do objeto Calendar em um inteiro em milisegundos, que conta quantos milisegundos se passaram desde 1970 até a data em questão

                Date dataDaSaida = new Date(dataSaidaSegundos); // Conversão do inteiro em um objeto da classe Date
                Date dataColisao = calcularData(dataSaidaSegundos, tempo_segundos); // Chama o método que adiciona nas horas o tempo até a colisão dos trems para obter a a data da colisão dos trens
        
                System.out.println(String.format("A colisão dos trens acontecerá no KM %.2f e ocorrerá após %.3f horas, ", posicao_colisao, tempo));
                
                System.out.println("Data da saída: "+dataDaSaida);
                System.out.println("Data da colisão "+dataColisao);                
            }
            System.out.println("Deseja rodar o programa novamente? : S/N"); // Pergunta se o usuário quer rodar o programa de novo
            String opcao = input.nextLine().toUpperCase(); // Converte a entrada do usuário em letra maiúscula
            if (opcao.equals("S"))
                continue;
            else {
                System.out.println("FIM DO PROGRAMA");
                break;
            }
        }
        input.close();
    }
}
