export class MockTitleService {
    public lastTitle : string = '';

    public setTitle(value: string): void{
      this.lastTitle = value;
    }
}