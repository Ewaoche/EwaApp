import { SideNavComponent} from './side-nav.component';
describe('Side Nav Component', ()=>{
 it('Exist', ()=>{
//assert
expect(SideNavComponent).toBeDefined();

 });
 it('Can be built', ()=>{
   //act
   const component = new SideNavComponent();
   //assert
   expect(component instanceof SideNavComponent).toBe(true);
 });

 describe('General', ()=>{
  let component: SideNavComponent;
  beforeEach(()=>{
    component = new SideNavComponent(); 
  });

  describe('Initialization', ()=>{
    it('Menu is closed',()=>{
      //assert
      expect(component.isClosed).toBe(true);
    });

    it('Opens Menu ', ()=>{
      //arrange
      component.isClosed = true;

      //act
      component.openMenu();
      //assert
      expect(component.isClosed).toBe(false);
    })
  });
 
 });
 
});