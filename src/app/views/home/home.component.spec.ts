import { HomeComponent } from "./home.component"

describe('Home Component', ()=>{
    it('Exists', ()=>{
      //assert
      expect(HomeComponent).toBeDefined();
    });
    it('Can be built', ()=>{
        //act
        const component = new HomeComponent();
        //assert
        expect(component instanceof HomeComponent).toBe(true);
    });
});