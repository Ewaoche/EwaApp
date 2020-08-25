import {HomeComponent} from './home.component';
describe('Home Component', ()=>{
it('Exist', ()=>{
    //assert
    expect(HomeComponent).toBeDefined(true);
});

it('can be built', ()=>{
    //act
  const  component = new HomeComponent();

  //assert
  expect(component instanceof HomeComponent).toBe(true);
});

});