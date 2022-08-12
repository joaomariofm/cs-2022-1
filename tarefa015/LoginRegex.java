import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class LoginRegex {
  public static void main(String args[]) {

    Scanner sc = new Scanner(System.in);
    System.out.print("Digite a expressão a ser testada: ");  
    String str = sc.nextLine(); 

    Pattern pattern = Pattern.compile("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{5,30}$", Pattern.UNICODE_CHARACTER_CLASS);
    Matcher matcher = pattern.matcher(str);

    boolean matchFound = matcher.find();
    if(matchFound) {
      System.out.println("Match found");
    } else {
      System.out.println("Match not found");
    }
  }
}
