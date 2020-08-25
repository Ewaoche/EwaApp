import { ALocalStorage } from './alocal.storage.model';

export class LocalStorage extends ALocalStorage{
    public getItem(key:string):string{
        return localStorage.getItem(key);
    }

    public setItem(key:string, value:string):void{
        localStorage.setItem(key, value);
    }
}