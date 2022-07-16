package tarefa008.java;

/**
 * Classe que representa a entidade Bairro |
 * Autor: João Máiro |
 * Data: 15/07/22
 */
public class Bairro {
  Bairro(String nome) {
    this.nome = nome;
  }

  private String nome;
  private Cidade cidade;

  /**
   * Método que modifica o valor do atributo cidade
   * @param cidade
   */
  public void setCidade(Cidade cidade) {
    this.cidade = cidade;
  }

  /**
   * Método que retorna o valor do atributo nome
   * @return
   */
  public String getNome() {
    return this.nome;
  }

  /**
   * Método que retorna o valor do atributo cidade
   * @return
   */
  public Cidade getCidade() {
    return this.cidade;
  }
}