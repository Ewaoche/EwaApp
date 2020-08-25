export abstract class ALocalStorage{
 abstract setItem(key:string, value:string):void;
 abstract getItem(key:string):string;
 
}