export class Ingredient {
  public name: string | null = null
  public amount: number | null = null

  constructor(name: string, amount: number) {
    this.name = name
    this.amount = amount
  }
}
