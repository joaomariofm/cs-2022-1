package tarefa012.login;

public class LoginInvalidoException extends Exception{
  public LoginInvalidoException(String errorMessage) {
    super(errorMessage);
  }
}
