class Test{
    constructor(x){
    this.x=x;
    }
  PositiveOrNot(){
    if(this.x>0){
        console.log("positive");
    }
    else{
        console.log("negative");
    }
 }
  EvenOrNot(){
    if(this.x%2==0){
        console.log("even")}
    else{
        console.log("odd")
    }
  }
}