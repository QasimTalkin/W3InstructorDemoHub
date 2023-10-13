class Parent {

  protected int age;

  Parent() {
    System.out.println("Parent's default constructor called.");
  }

  Parent(int age) {
    System.out.println(age);
  }

  public void setAge(int age) {
    this.age = age;
    System.err.println("Parent's setAge() called.");
  }
}
