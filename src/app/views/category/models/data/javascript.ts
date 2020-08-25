import { Category } from '../category.model';
import { Topic } from '../topic.model';

export const JAVASCRIPT_DATA:any = {
 id:'javascript',
 title:'javascript',
 description:`JavaScript , often abbreviated as JS, is a high-level,
  interpreted programming language that conforms to 
  the ECMASCRIPT specification. ` ,
  iconClasses: 'fab fa-js',

  topics:[
    new Topic({id: 'boolean' , label:'Boolean'}),
    new Topic({id: 'boolean' , label:'Boolean'}),
    new Topic({id: 'boolean' , label:'Object'}),
    new Topic({id: 'boolean' , label:'Boolean'}),
    new Topic({id: 'boolean' , label:'Arrays'}),
    new Topic({id: 'boolean' , label:'Classes'}),
    new Topic({id: 'boolean' , label:'Boolean'}),
    new Topic({id: 'boolean' , label:'Map'}),
    new Topic({id: 'boolean' , label:'Boolean'}),
    new Topic({id: 'boolean' , label:'Functions'}),
    new Topic({id: 'boolean' , label:'Boolean'}),
    new Topic({id: 'boolean' , label:'Boolean'})


  ]
  
};