package tarefa008.java;
import tarefa008.java.enums.TipoLogradouro;

/**
 * Classe que representa a entidade Logradouro |
 * Autor: João Máiro |
 * Data: 15/07/22
 */
public class Logradouro {
  Logradouro(String nome) {
    this.nome = nome;
  }

  //atributos
  private String nome;
  private TipoLogradouro tipoLogradouro;

  /**
   * Método que modifica o valor do atributo tipoLogradouro
   * @param tipoLogradouro
   */
  public void setTipoLogradouro(TipoLogradouro tipoLogradouro) {
    this.tipoLogradouro = tipoLogradouro;
  }

  /**
   * Método que retorna o valor do atributo nome
   * @return
   */
  public String getNome() {
    return this.nome;
  }

  /**
   * Método que retorna o valor do atributo tipoLogradouro
   * @return
   */
  public TipoLogradouro getTipoLogradouro() {
    return this.tipoLogradouro;
  }
}
