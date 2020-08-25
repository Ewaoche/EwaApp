import {ResourcesComponent} from './resources.component';
describe('Home Component', ()=>{
it('Exist', ()=>{
    //assert
    expect(ResourcesComponent).toBeDefined(true);
});

it('can be built', ()=>{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    //act
  const  component = new ResourcesComponent();

  //assert
  expect(component instanceof ResourcesComponent).toBe(true);
});

});