package tarefa008.java;
import tarefa008.java.enums.TipoEndereco;

public class Testing {
  public static void main(String args[]) {
    Endereco endereco = new Endereco(1423, "quadra 7", 7534245, TipoEndereco.Residencial);

    System.out.println(endereco.getNumero());
    System.out.println(endereco.getComplemento());
    System.out.println(endereco.getCEP());
    System.out.println(endereco.getTipoEndereco());
  }
}
