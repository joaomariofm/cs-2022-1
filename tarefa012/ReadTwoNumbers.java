package tarefa012;

import java.util.InputMismatchException;
import java.util.Scanner;

public class ReadTwoNumbers{

  public int[] receberValores() {

    try {
      int[] values = new int[2];
      Scanner scanner = new Scanner(System.in);
      System.out.println("Informe o dividendo: ");
      values[0] = scanner.nextInt();
      System.out.println("Informe o divisor: ");
      values[1] = scanner.nextInt();

      return values;
    }catch (InputMismatchException im) {
      throw new InputMismatchException("O valor informado deve ser um número inteiro");
    }
  }

  public int dividir(int a, int b) {
    if (b == 0)
      throw new ArithmeticException("O divisor não pode ser 0");

    return a / b;
  }
 
  public static void main(String[] args) {
    ReadTwoNumbers calc = new ReadTwoNumbers();
    int[] inputs = new int[2];

    try{
      inputs = calc.receberValores();
      System.out.println( inputs[0] + "/" + inputs[1] + " = " + calc.dividir(inputs[0],inputs[1]));
    }catch (ArithmeticException ae){
      System.out.println(ae.getMessage());
    }catch (InputMismatchException im){
      System.out.println(im.getMessage());
    }
  }
}