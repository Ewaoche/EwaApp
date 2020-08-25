import {CategoryComponent} from './category.component';
import { ACategoryService } from './services/category/acategory.service';
import { MockCategoryService } from './services/category/mock.category.service';
import { of} from 'rxjs';
import { Categories } from './models/enums/categories.enum';
import { MockActivatedRoute } from 'src/app/shared/mocks/mock-activated-route';
describe('CategoryComponent Component', ()=>{
it('Exist', ()=>{
    //assert
    expect(CategoryComponent).toBeDefined(true);
});

it('can be built', ()=>{
    //act
  const  component = new CategoryComponent(null, null);

  //assert
  expect(component instanceof CategoryComponent).toBe(true);
});

describe('General', ()=>{
  let component: CategoryComponent;
  let categoryservice:ACategoryService;
   let activatedRoute:any;
  beforeEach(()=>{
    activatedRoute = new MockActivatedRoute();
    activatedRoute.params = of({id:Categories.JavaScript});
    categoryservice = new MockCategoryService();
    component = new CategoryComponent(activatedRoute, categoryservice);

    
    
    component = new CategoryComponent(activatedRoute, categoryservice);
    categoryservice = new MockCategoryService();
  });

  describe('On init', ()=>{
     it('Updates category', async ()=>{
       //arrange
       component.category= null;

      //act
      await component.ngOnInit();

       //assert
       expect(component.category.id).toBe(Categories.JavaScript);
     });
  });
});

});