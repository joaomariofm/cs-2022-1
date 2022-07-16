package tarefa012.conta_bancaria;

public class ContaBancaria {
  
  private double saldo;

  public void depositar(double saldo) {
    this.saldo += saldo;
  }

  public void sacar(double saldo) throws SaldoInsuficienteException {
    if((this.saldo -= saldo) < 0) {
      throw new SaldoInsuficienteException("Seu saldo é insuficiente para realizar esse saque");
    }
    this.saldo -= saldo;
  }

  public void setSaldo(double saldo) {
    this.saldo = saldo;
  }

  public double getSaldo() {
    return this.saldo;
  }
}
