export class Recipe {
  public name: string | null = null
  public description: string | null = null
  public imagePath: string | null = null

  constructor(name: string, description: string, imagePath: string) {
    this.name = name
    this.description = description
    this.imagePath = imagePath
  }
}
