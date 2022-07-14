package conta_bancaria;

public class SaldoInsuficienteException extends Exception {
  public SaldoInsuficienteException(String errorMessage) {
    super(errorMessage);
  }
}
