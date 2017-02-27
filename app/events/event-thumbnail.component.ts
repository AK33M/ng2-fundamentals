import { Component, Input }  from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail" [routerLink]="['/events', event.id]">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">Time: {{event?.time}}
          <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
          <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
          <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: {{event?.price | currency }}</div>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location.address}}</span>
            <span class="pad-left">{{event?.location.city}}, {{event?.location.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
          Online URL: {{event?.onlineUrl}}
        </div>
    </div>`,
    styles: [
        `.pad-left { margin-left: 10px;}
      .well div {color: #bbb;}
      .thumbnail { min-height: 210px;}
      `
    ]
})

export class EventThumbnailComponent {
    @Input() event: any

    // getStartTimeClass() {
    //     const isEarlyStart = this.event && this.event.time === '8:00 am'
    //
    //     if (isEarlyStart)
    //       return 'green bold'
    //         // return ['green', 'bold'];
    //
    //     // return { green: isEarlyStart, bold :isEarlyStart}
    // }

    getStartTimeStyle(): any {
        const isEarlyStart = this.event && this.event.time === '8:00 am'

        if (isEarlyStart)
            return { color: '#003300', 'font-weight': 'bold' }

        return {}
    }
}
