package tarefa016.configuracaodesoftwareemtempodeexec;

public class Item {
  private int code;
  private String name;
  private String description;
  
  public Item(int code, String name, String description) {
    this.code = code;
    this.name = name;
    this.description = description;
  }
  
  public int getCode() {
    return code;
  }
  
  public void setCode(int code) {
    this.code = code;
  }
  
  public String getName() {
    return name;
  }
  
  public void setName(String name) {
    this.name = name;
  }

  public String getDescription() {
    return description;
  }
  
  public void setDescription(String description) {
    this.description = description;
  }
}
