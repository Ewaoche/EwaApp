import { Component, Input } from '@angular/core';


@Component({
    selector:'app-star-list',
    templateUrl:'./star-list.component.html',
    styleUrls: ['./star-list.component.scss']
})
export class StarListComponent{
   @Input() public rating:number = 5;

    public get fullStars(): any[]{
        const totalFullStars = Math.floor(this.rating);
        return Array(totalFullStars).fill(0);
    }

    public get halfStars():boolean{
        const hasHalfStar = (this.rating - Math.floor(this.rating ) >= 0.5) && this.rating !== 5;
        return hasHalfStar ;
    }

    public get emptyStars():any[]{
        const highestRating = 5;
        const totalEmptyStars = Math.floor(highestRating - this.rating);
        return Array(totalEmptyStars).fill(0);
       
    }
}