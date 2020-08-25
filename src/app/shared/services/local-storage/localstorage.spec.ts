import { LocalStorage } from "./localstorage.service";

describe('Local Storage Service', () => {
    it('Exists', () => {
        //assert
        expect(LocalStorage).toBeDefined();
    });

    it('Can be built', () => {
        //act
        const service = new LocalStorage();
        //assert
        expect(service instanceof LocalStorage).toBe(true);
    });

    describe('General', () =>{
        let service: LocalStorage;

        beforeEach( () => {
            service = new LocalStorage();
        });

        it('Gets item', () => {
            const key = 'somekey';
            //arrange
           spyOn(localStorage, 'getItem');
            //act
            service.getItem(key);

            //assert
            expect(localStorage.getItem).toHaveBeenCalledWith(key);

        });
        it('Sets item', () => {
            const key = 'somekey';
            const value = 'somevalue';
            //arrange
           spyOn(localStorage, 'setItem');
            //act
            service.setItem(key, value);

            //assert
            expect(localStorage.setItem).toHaveBeenCalledWith(key, value);

        });
    });
}); 