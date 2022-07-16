package tarefa012.login;

public class Login {
  public Login(String usuario, String senha) {
    this.usuario = usuario;
    this.senha = senha;
  }

  private String usuario;
  private String senha;

  public void fazer_login(String usuario, String senha) throws LoginInvalidoException {
    if (usuario != this.usuario || senha != this.senha) {
      throw new LoginInvalidoException("Usuário ou senha invalidos");
    }
  }
}
