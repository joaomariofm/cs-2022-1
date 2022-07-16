package tarefa008.java;

import java.sql.Date;

/**
 * Classe que representa a entidade Pessoa Física |
 * Autor: João Máiro |
 * Data: 15/07/22
 */
public class PessoaFisica {
  PessoaFisica(String nome, String sexo, Date dataNascimento) {
    this.nome = nome;
    this.sexo = sexo;
    this.dataNascimento = dataNascimento;
  }

  //atributos
  private String nome;
  private String sexo;
  private Date dataNascimento;
  private Endereco endereco;

  /**
   * Método que modifica o valor do atributo endereco
   * @param endereco
   */
  public void setEncereco(Endereco endereco) {
    this.endereco = endereco;
  }

  /**
   * Método que retorna o valor do atributo nome
   * @return
   */
  public String getNome() {
    return this.nome;
  }

  /**
   * Método que retorna o valor do atributo sexo
   * @return
   */
  public String getSexo() {
    return this.sexo;
  }

  /**
   * Método que retorna o valor do atributo dataNascimento
   * @return
   */
  public Date getDataNascimento() {
    return this.dataNascimento;
  }

  /**
   * Método que retorna o valor do atributo endereco
   * @return
   */
  public Endereco getEndereco() {
    return this.endereco;
  }
}
