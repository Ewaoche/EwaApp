import { FooterComponent } from "./footer.component";
import { Component } from '@angular/core';

describe('Footer Component', ()=>{
   it('Exist', ()=>{
   //assert
   expect(FooterComponent).toBeDefined(true)
   });
   it('Can be built', ()=>{

    //act
    const component = new FooterComponent();
    //assert
    expect(component instanceof FooterComponent).toBe(true);
   })
   describe('General', ()=>{
       let component:FooterComponent;
       beforeEach(()=>{
         component = new FooterComponent();
       });

       it('Returns the currentYear', ()=>{
          //arrange
          const currentYear = new Date().getFullYear();
          //act
          const result = component.currentYear;
          //assert
          expect(result).toBe(currentYear);
       });
   });
});