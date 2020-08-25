import { SideNavComponent } from "./side-nav.component";
import { Component } from '@angular/core';

describe('SideNav Component', ()=>{
   it('Exist', ()=>{
   //assert
   expect(SideNavComponent).toBeDefined(true)
   });
   it('Can be built', ()=>{

    //act
    const component = new SideNavComponent();
    //assert
    expect(component instanceof SideNavComponent).toBe(true);
   })
   describe('General', ()=>{
       let component:SideNavComponent;
       beforeEach(()=>{
         component = new SideNavComponent();
       });

      describe('Initialization', ()=>{
        it('Menu is closed', ()=>{
        //assert
        expect(component.isclosed).toBe(true);
        });

        it('opens menu', ()=>{
          //arrange
          component.isclosed = true;
   
          //act
          component.openMenu();
   
          //assert
          expect(component.isclosed).toBe(false);
        });
          it('closeMenu', ()=>{
            //arrange
            component.isclosed =false;
  
            //act
            component.closeMenu();
  
            //assert
            expect(component.isclosed).toBe(true);
          });
       
      });
   });
});


