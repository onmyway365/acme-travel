export class Currency {
  public value: string;
  public viewValue: string;

  constructor(value: string, viewValue: string) {
    this.value = value;
    this.viewValue = viewValue;
  }
}
