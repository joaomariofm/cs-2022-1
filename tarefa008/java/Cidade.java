package tarefa008.java;

/**
 * Classe que representa a entidade Cidade |
 * Autor: João Máiro |
 * Data: 15/07/22
 */
public class Cidade {
  Cidade(String nome) {
    this.nome = nome;
  }

  //atributos
  private String nome;
  private Estado estado;

  /**
   * Método que modifica o valor do atributo estado
   * @param estado
   */
  public void setEstado(Estado estado) {
    this.estado = estado;
  }

  /**
   * Método que retorna o valor do atributo nome
   * @return
   */
  public String getNome() {
    return this.nome;
  }

  /**
   * Método que retorna o valor do atributo estado
   * @return
   */
  public Estado getEstado() {
    return this.estado;
  }
}
