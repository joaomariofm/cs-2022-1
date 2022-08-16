package tarefa016.closure;

import tarefa016.configuracaodesoftwareemtempodeexec.Item;
import tarefa016.generics.Apple;
import tarefa016.generics.Orange;
import tarefa016.generics.Pear;

public class FabricaDeFrutas {
  private int code = 0;

  public Item criarItem(String name, String description, String tipoDaFruta ) {
    switch (tipoDaFruta) {
      case "apple":
        Apple newApple = new Apple(code, name, description);
        this.code++;
        return newApple;
      case "orange": 
        Orange newOrange = new Orange(code, name, description);
        this.code++;
        return newOrange;
      case "pear":
        Pear newPear = new Pear(code, name, description);
        this.code++;
        return newPear;
      default:
        throw new Error("O tipo de fruta informado é incalido");
    }
  }
}
