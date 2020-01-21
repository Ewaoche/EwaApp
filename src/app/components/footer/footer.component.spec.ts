import { FooterComponent } from "./footer.component";

describe('Footer Component', ()=>{
 it('Exist', ()=>{
//assert
expect(FooterComponent).toBeDefined();

 });
 it('Can be built', ()=>{
   //act
   const component = new FooterComponent();
   //assert
   expect(component instanceof FooterComponent).toBe(true);
 });

 describe('General', ()=>{
  let component: FooterComponent;
  beforeEach(()=>{
    component = new FooterComponent();
  });
  it('Returns the current year', ()=>{
     //arrange
     const currentYear = new Date().getFullYear();

     //act
     const result = component.currentYear;

     //assert
     expect(result).toBe(currentYear);
  });

 });
 
});