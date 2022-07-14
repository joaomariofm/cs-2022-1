import java.util.InputMismatchException;
import java.util.Scanner;

public class ArrayWithTenSpaces {
  
  public int[] receberValores() {

    try {
      int[] values = new int[10];
      Scanner scanner = new Scanner(System.in);

      for(int i = 0;;i++) {
        if (i == 0) {
          System.out.println("Informe um valor para ser inserido no array:");
          values[i] = scanner.nextInt();
          continue;
        } 

        System.out.println("Informe outro para ser inserido no array:");
        values[i] = scanner.nextInt();

        if (values[i] == 0) break;
      }

      return values;
    }catch (ArrayIndexOutOfBoundsException aiobe) {
      throw new ArrayIndexOutOfBoundsException("Você já forneceu o número máximo de elementos possíveis");
    }catch (InputMismatchException ime) {
      throw new InputMismatchException("O valor fornecido deve ser um número inteiro");
    }
  }

  public static void main(String[] args) {
    ArrayWithTenSpaces arrayInterector = new ArrayWithTenSpaces();

    try {
      arrayInterector.receberValores();
    }catch (ArrayIndexOutOfBoundsException aiobe){
      System.out.println(aiobe.getMessage());
    }catch (InputMismatchException ime){
      System.out.println(ime.getMessage());
    }
  }
}
