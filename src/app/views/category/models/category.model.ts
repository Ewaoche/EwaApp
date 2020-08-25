import { Topic } from './topic.model';
import { Categories } from './enums/categories.enum';


export class Category{
    public id: string;
    public title:string;
    public description:string;
    public topics: Topic[];
    

    public  iconClasses:string;
    
    

    constructor(data?:any){
        const defaults = {
            id: '',
            title:'',
            description:'',
            topics:[],
            ...data
           
        };

        this.id = defaults.id;
        this.title = defaults.title;
        this.description = defaults.description;
        this.topics = defaults.topics.map(topic=>new Topic(topic));
        this.iconClasses = this.getIconClasses(this.id);
    }
    private getIconClasses(id:string){
        switch (id){
            case Categories.JavaScript:
                return 'fab fa-js';

                default:
                    return '';
        }
    }
   
}