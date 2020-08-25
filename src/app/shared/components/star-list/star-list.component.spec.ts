import { StarListComponent } from "./star-list.component";

describe('StarList Component', ()=>{
    it('Exists', ()=>{
        //assert
        expect(StarListComponent).toBeDefined();
    });

    it('Can be built', ()=>{
        //act
        const component = new StarListComponent();

        //assert
        expect(component instanceof StarListComponent).toBe(true);
    });

    describe('General', () => {
        let component: StarListComponent;
        beforeEach(() =>{
            component = new StarListComponent();
        });

        describe('Defaults', () => {
            it('Rating has 5 star when no ratings', () => {
                //assert
                expect(component.rating).toBe(5);
            });

            let component: StarListComponent;
            beforeEach(() =>{
                component = new StarListComponent();
            });

            describe('General', () => {
                it('shows total full star rating ', () => {
                    //arrange
                    component.rating = 4.75;
                    //act
                    const result = component.fullStars;
                    //assert
                    expect(result.length).toBe(4);
                 });
            });

            describe('half star', () => {
                it('shows a full star rating when not a perfect rating', () => {
                    //arrange
                    component.rating = 4.75;
                    //act
                    const result = component.fullStars;
                    //assert
                    expect(result.length).toBe(4);
                 });
    
                it('Does not show half star rating when  a perfect rating', () => {
                    //arrange
                    component.rating = 55;
                    //act
                    const result = component.halfStars;
                    //assert
                    expect(result).toBe(false);
                 });

                 it('Gets total empty rating', () => {
                    //arrange
                    component.rating = 2.75;
                    //act
                    const result = component.emptyStars;
                    //assert
                    expect(result.length).toBe(2);
                });
            });

        });

       
    });
});