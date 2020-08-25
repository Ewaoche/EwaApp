import { TopicComponent } from "./topic.component";

describe('Topic Component', ()=>{
    it('Exist', ()=>{
        //assert
        expect(TopicComponent).toBeDefined();
    });

    it('Can be built', ()=>{
        //act
        const component = new TopicComponent();

        //assert
        expect(component instanceof TopicComponent).toBe(true);
    });
});