package tarefa012.conta_bancaria;

public class Teste {
  public static void main(String args[]) {
    ContaBancaria conta = new ContaBancaria();
    conta.depositar(1200.00);

    try {
      conta.sacar(1201);
    }catch (SaldoInsuficienteException sie) {
      System.out.println(sie.getMessage());
    }
  }
}
