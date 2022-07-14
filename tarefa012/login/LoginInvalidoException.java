package login;

public class LoginInvalidoException extends Exception{
  public LoginInvalidoException(String errorMessage) {
    super(errorMessage);
  }
}
