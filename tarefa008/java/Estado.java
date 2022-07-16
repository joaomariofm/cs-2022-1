package tarefa008.java;

/**
 * Classe que representa a entidade Estado |
 * Autor: João Máiro |
 * Data: 15/07/22
 */
public class Estado {
  Estado(String nome, String sigla) {
    this.nome = nome;
    this.sigla = sigla;
  }

  //atributos
  private String nome;
  private String sigla;
  private Pais pais;

  /**
   * Método que modifica o valor do atributo pais
   * @param novoPais
   */
  public void setPais(Pais novoPais) {
    this.pais = novoPais;
  }

  /**
   * Método que retorna o valor do atributo nome
   * @return
   */
  public String getNome() {
    return this.nome;
  }

  /**
   * Método que retorna o valor do atributo sigla
   * @return
   */
  public String getSigla() {
    return this.sigla;
  }

  /**
   * Método que retorna o valor do atributo pais
   * @return
   */  
  public Pais getPais() {
    return this.pais;
  }
}
