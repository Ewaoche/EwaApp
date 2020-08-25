export class Book{
    public imageUrl:string;
    public title: string;
    public description:string;
    public href: string;
    public rating: number;

    constructor(data?:any){
     const defaults = {
         imageUrl: 'https://via.placeholder.com/150',
         title: 'Clean Code',
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eius',
         href: '',
         rating: 5,
         ...data
     }

     this.imageUrl = defaults.imageUrl;
     this.description = defaults.description;
     this.title = defaults.title;
     this.rating = defaults.rating;
     this.href = defaults.href;
    }
   
}
