package login;

public class Teste {
  public static void main(String args[]) {
    Login novoLogin = new Login("joao", "1234");

    try {
      novoLogin.fazer_login("joao", "123");
    }catch (LoginInvalidoException lie){
      System.out.println(lie.getMessage());
    }
  }
}
