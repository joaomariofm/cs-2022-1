package tarefa016;
import java.util.*;

import tarefa016.closure.FabricaDeFrutas;
import tarefa016.configuracaodesoftwareemtempodeexec.*;

public class SystemDoor {
  public static void main(String[] args) {
    FabricaDeFrutas fabricaDeFrutas = new FabricaDeFrutas();
    List<Item> items = new ArrayList<Item>();

    items.add(fabricaDeFrutas.criarItem("pera", "uma fruta verde", "pear"));
    items.add(fabricaDeFrutas.criarItem("maça", "uma fruta vermelha", "apple"));
    items.add(fabricaDeFrutas.criarItem("laranja", "uma fruta laranja", "orange"));

    Store store = new Store(items);

    store.displayItems();
  }
}
