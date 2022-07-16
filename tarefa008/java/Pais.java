package tarefa008.java;

/**
 * Classe que representa a entidade Pais |
 * Autor: João Máiro |
 * Data: 15/07/22
 */
public class Pais {
  Pais(String nome) {
    this.nome = nome;
  }

  //atributos
  private String nome;

  /**
   * Método que retorna o valor do atributo nome
   * @return
   */
  public String getNome() {
    return this.nome;
  }
}
