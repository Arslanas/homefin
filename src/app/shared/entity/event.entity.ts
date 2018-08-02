export class Event {
  constructor(
    public type: string,
    public amount: number,
    public category: string,
    public date: string,
    public description: string,
    public id?: number
  ) {
  }
}
