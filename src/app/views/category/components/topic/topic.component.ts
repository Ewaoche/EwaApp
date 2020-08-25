import { Component, Input } from '@angular/core';
import { Topic } from '../../models/topic.model';


@Component({
selector: 'app-topic',
templateUrl:'./topic.component.html',
styleUrls:['./topic.component.scss']
})

export class TopicComponent{
@Input() public topic:Topic = new Topic();
}