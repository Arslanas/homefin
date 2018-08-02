export class Category {
  public name:string;
  public capacity:number;
  public id?:number;

  constructor(name:string, capacity:number, id?:number){
    this.name = name;
    this.capacity = capacity;
    if(id){
      this.id = id;
    }
  }
}
