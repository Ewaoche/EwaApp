import { AlertComponent } from "./alert.component";
import { AlertService } from './services/alert/alert.service';
import { ALocalStorage } from 'src/app/shared/services/local-storage/alocal.storage.model';
import { MockLocalStorageService } from 'src/app/shared/services/local-storage/mock-local-storage.service';
import { LocalStorageKey } from 'src/app/shared/models/enums/local-storage-key.enum';

describe('Alert Component', () => {
    it('Exists', () => {
        //assert
        expect(AlertComponent).toBeDefined();
    });

    it('Can be be built ', () => {
        //arrange
        const alertService = new AlertService();
       const  mockLocalStorageService = new MockLocalStorageService();


        
        //act 
        const component = new AlertComponent(alertService, null);


        //assert
        expect(component instanceof AlertComponent).toBe(true);
    });

    describe('General', () => {
        let component:  AlertComponent;
        let alertService: AlertService;
        let mockLocalStorageService:MockLocalStorageService;

        beforeEach(() =>{
            alertService = new AlertService();
            mockLocalStorageService = new MockLocalStorageService();

             component = new AlertComponent(alertService, mockLocalStorageService);
        });
        describe('On Init', () => {
         it('It calls CookiesNotification if not previously called', () => {
             //arrage
             mockLocalStorageService.storage = {}

             //act
             component.ngOnInit();

             //assert
             expect(component.alert.key).toBe(LocalStorageKey.CookieNotification);
             expect(component.isNeeded).toBe(true);
         });
        });

        describe('Close', () => {
            it('Closes alert', () => {
                //arrange
                component.isShown = true;
                //act
                component.close();
                //assert
                expect(component.isShown).toBe(false);
            });

            it('Update storage so alert is called just once', () => {
              //arrange
              const key = LocalStorageKey.CookieNotification;
               component.alert.key = key;

               //act
              component.close();

              //asserts
              expect(mockLocalStorageService.storage[key]).toBe('true');
            });
        });
    });
});