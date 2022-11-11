// 1.
class Shape {
    constructor(name, sides, sideLength) {
      this.name = name;
      this.sides = sides;
      this.sideLength = sideLength;
      this.calcPerimeter = () => {
        let peri = this.sides * this.sideLength;
        console.log(peri);
      };
    }
  }
  class Square extends Shape {
    constructor(sideLength) {
      super("square", 4, sideLength);
    }
  
    calcArea() {
      return this.sideLength * this.sideLength;
    }
  
    calcPerimeter() {
      return this.sides * this.sideLength;
    }
  }
  
  class Triangle extends Shape {
    constructor(sideLength) {
      super("Triangle", 3, sideLength);
    }
  
    calcArea() {
      return this.sideLength * this.sideLength;
    }
    calcPerimeter() {
      return this.sides * this.sideLength;
    }
  }
  
  let square = new Square(5);
  console.log(square.name);
  console.log(square.sides);
  console.log(square.calcArea());
  console.log(square.calcPerimeter());
  
  let triangle = new Triangle(3);
  console.log(triangle.name);
  console.log(triangle.sides);
  console.log(triangle.calcArea());
  console.log(triangle.calcPerimeter());
  
  // 2.
  class Player {
    constructor(
      PlayerID,
      PlayerName,
      PlayerRuns,
      PlayerDateofBirth,
      PlayerShirtNumber
    ) {
      this.PlayerID = PlayerID;
      this.PlayerName = PlayerName;
      this.PlayerRuns = PlayerRuns;
      this.PlayerDateofBirth = PlayerDateofBirth;
      this.PlayerShirtNumber = PlayerShirtNumber;
    }
    DisplayInfo = () => {
      console.log(this.PlayerID);
      console.log(this.PlayerName);
      console.log(this.PlayerRuns);
      console.log(this.PlayerDateofBirth);
      console.log(this.PlayerShirtNumber);
    };
    GetRuns = () => {
      console.log(this.PlayerRuns);
    };
    AddRuns = (val) => {
      this.PlayerRuns += val;
    };
  }
  let player = new Player(1, "Aqib", 110, "12/12/1989", 25);
  
  player.DisplayInfo();
  console.log("Before adding runs");
  player.GetRuns();
  player.AddRuns(35);
  console.log("After adding runs");
  player.GetRuns();
  
  // 3.
  let library = [
    {
      title: "Bill Gates",
      author: "The Road Ahead",
      readingStatus: true,
    },
    {
      title: "Steve Jobs",
      author: "Walter Isaacson",
      readingStatus: true,
    },
    {
      title: "Mockingjay: The Final Book of The Hunger Games",
      author: "Suzanne Collins",
      readingStatus: false,
    },
  ];
  
  let readingStat = () => {
    for (let i = 0; i < library.length; i++) {
      let book = "'" + library[i].title + "'" + " by " + library[i].author + ".";
      if (library[i].readingStatus) {
        console.log("Already read " + book);
      } else {
        console.log("You still need to read " + book);
      }
    }
  };
  readingStat();
  
  // 4.
  class bankAccount {
    #accountId;
    #accountTitle;
    #balance;
    #emailID;
    constructor(accountId,accountTitle,balance,emailID) {
      this.accountId = accountId ;
      this.accountTitle = accountTitle;
      this.balance = balance;
      this.emailID = emailID;
    }
    getaccountId (){
      return this.#accountId;
    }
    setaccountId (accountId){
      this.#accountId = accountId;
      console.log("Your accountId is "+accountId);
    }
    getaccountTitle (){
      return this.#accountTitle;
    }
    setaccountTitle (accountTitle){
      this.#accountTitle = accountTitle;
      console.log("Your accountTitle is "+accountTitle);
    }
    getbalance (){
      return this.#balance;
    }
    setbalance (balance){
      this.#balance = balance;
      console.log("Your current balance is "+balance);
    }
    getemailID (){
      return this.#emailID;
    }
    setemailID (emailID){
      this.#emailID =emailID;
      console.log("Your current balance is "+emailID);
    }
    depositAmount(amount) {
      this.#balance += amount;
      console.log("Your current balance is "+this.#balance);
    }
    withdrawAmount(amount) {
      let remaining = this.#balance - amount ;
      console.log("Your remaining balance is "+remaining);
    }
  }
  const acct = new bankAccount();
  acct.setaccountId(3456);
  acct.setaccountTitle("aqib");
  acct.setbalance(20000);
  acct.setemailID("aqib@gmail.com");
  acct.depositAmount(1000);
  acct.withdrawAmount(500);
  
  
  
  // 6.
  class Employee{
      #salary
      #nohpd
      constructor(salary,nohpd){
          this.#salary=salary;
          this.nohpd=nohpd;
      }
     
      set salary(sal){
          this.#salary=sal;
      }
      get salary(){
  return this.#salary;
      }
      set nohpd(noh){
      this.#nohpd=noh;
      }
      get nohpd(){
          return this.#nohpd;
      }
      getInfo(){
          console.log("Your salary is" + obj1.salary + "and your no of hours per day is:"  +  obj1.nohpd);
      }
      AddSal(){
  if(obj1.salary<500){
      obj1.salary=obj1.salary+10;
  }
      }
      AddWork(){
  if(obj1.nohpd>6){
      obj1.salary=obj1.salary+5;
  }
      }
      print(){
  console.log("Your total salry is:"+obj1.salary);    
      }
  }
  
  var obj1=new Employee;
  obj1.salary=600;
  obj1.nohpd=4;
  obj1.AddSal();
  obj1.AddWork();
  obj1.print();
  
// 7.
  
  class Game{
      info(msg){
          console.log(msg);
      }
  }
  class Cricket extends Game{
  info(msg){
      super.info(msg);
     
  }
  }
  class Football extends Game{
      info(msg){
          super.info(msg);
          
      }
  }
  
  let game=new Game;
  let cricket=new Cricket;
  let football=new Football;
  
  game.info("I love game and sports");
  cricket.info("I love cricket");
  football.info("I love football");
  
  // 8.
  class Car{
  constructor(name,make,color,speed){
      this.name=name;
      this.make=make;
      this.color=color;
      this.speed=speed;
  }
  
  setName(name){
  name=this.name;
  return this;
  }
  setMake(make){
      make=this.make;
      return this;
  }
  setColor(color){
      color=this.color;
      return this;
  }
  setSpeed(speed){
      speed=this.speed;
      return this;
  }
  print(){
    console.log(this.name,this.make,this.color,this.speed)
  }
  }
  
  var obj1=new Car("Cultus","Suzuki","White",200)
  obj1.setName().setMake().setColor().setSpeed().print();
  
  