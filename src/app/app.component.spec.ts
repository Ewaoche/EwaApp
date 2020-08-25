import { AppComponent } from "./app.component";
import { Component } from '@angular/core';
import { MockRouter } from './shared/mocks/mock-router';
import { MockTitleService } from './shared/mocks/mock-title.service';

describe('App Component', ()=>{
   it('Exist', ()=>{
   //assert
   expect(AppComponent).toBeDefined(true)
   });
   it('Can be built', ()=>{

    //act
    const component = new AppComponent(null, null);
    //assert
    expect(component instanceof AppComponent).toBe(true);
   });

   describe('General', () => {
      let component: AppComponent;
      let mockRouter: any;
      let mockTitleService: any; 

      beforeEach( () => {
         mockRouter = new MockRouter();
         mockTitleService = new MockTitleService()
        component = new AppComponent(mockRouter, mockTitleService);
      });
      describe('On Init', () => {
         it('Only pushes through Navigation and Events ', () => {
            //arrange
            mockTitleService.lastTitle = '';
            //act
            component.ngOnInit();
            //assert
            expect(mockTitleService.lastTitle).toBe('');
         });
      });
     
   });
});