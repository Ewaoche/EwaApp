export class Topic{
    public id:string;
    public label: string

    constructor(data?:any){
        const defaults = {
            id: '',
            label: '',
            ...data
        };

        this.id = defaults.id;
        this.label = defaults.label;
    }
}