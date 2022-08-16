package tarefa016.logging;

import java.util.logging.Level;
import java.util.logging.Logger;

public class MyLogger {
  public static void main(String[] args) {
    Logger logger = Logger.getLogger(MyLogger.class.getName());

    logger.log(Level.SEVERE, "Minha mensagem");
  }
}
