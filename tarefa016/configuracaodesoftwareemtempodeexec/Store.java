package tarefa016.configuracaodesoftwareemtempodeexec;

import java.util.Iterator;
import java.util.List;

public class Store {
  public List<Item> items;

  public Store(List<Item> items) {
    this.items = items;
  }

  public void displayItems() {
    for(Iterator<Item> i = this.items.iterator(); i.hasNext();) {
      Item item = i.next();
      System.out.println(item.getCode()+ ": " + item.getName());
    }
  }
}
