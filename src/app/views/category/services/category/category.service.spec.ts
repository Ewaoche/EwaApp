import { CategoryService } from "./category.service";

describe('category', ()=>{
  it('Exists', ()=>{
      //assert
      expect(CategoryService).toBeDefined(true);
  });

  it('it can be build', ()=>{
      //act
      const service = new CategoryService();

      //assert
      expect(service instanceof CategoryService).toBe(true);
  });
});