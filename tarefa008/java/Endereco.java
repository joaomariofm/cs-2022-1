package tarefa008.java;
import tarefa008.java.enums.TipoEndereco;

/**
 * Classe que representa a entidade Endereco |
 * Autor: João Máiro |
 * Data: 15/07/22
 */
public class Endereco {
  Endereco(int numero, String complemento, int CEP, TipoEndereco tipoEndereco) {
    this.numero = numero;
    this.complemento = complemento;
    this.CEP = CEP;
    this.tipoEndereco = tipoEndereco;
  }

  //atributos
  private int numero;
  private String complemento;
  private int CEP;
  private TipoEndereco tipoEndereco;
  private Bairro bairro;

  /**
   * Método que modifica o valor do atributo estado
   * @param tipoEndereco
   */
  public void setTipoEndereco(TipoEndereco tipoEndereco) {
    this.tipoEndereco = tipoEndereco;
  }

  /**
   * Método que modifica o valor do atributo bairro
   * @param bairro
   */
  public void setBairro(Bairro bairro) {
    this.bairro = bairro;
  }

  /**
   * Método que retorna o valor do atributo numero
   * @return
   */
  public int getNumero() {
    return this.numero;
  }

  /**
   * Método que retorna o valor do atributo complemento
   * @return
   */
  public String getComplemento() {
    return this.complemento;
  }

  /**
   * Método que retorna o valor do atributo CEP
   * @return
   */
  public int getCEP() {
    return this.CEP;
  }

  /**
   * Método que retorna o valor do atributo endereco
   * @return
   */
  public TipoEndereco getTipoEndereco() {
    return this.tipoEndereco;
  }

  /**
   * Método que retorna o valor do atributo bairro
   * @return
   */
  public Bairro getBairro() {
    return this.bairro;
  }
}
