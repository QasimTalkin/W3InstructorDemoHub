class Child extends Parent {
  Child() {
    // The superclass constructor is automatically called here
    super();
    System.out.println("Child's default constructor called.");
  }

  public void printInfo() {
    System.out.println("age = " + age);
  }

  public static void main(String[] args) {
    Child child = new Child();
    Parent c = new Child();
    c.setAge(5);
    child.printInfo();
  }
}
