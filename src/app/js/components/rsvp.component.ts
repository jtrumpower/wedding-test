import {Component} from '@angular/core';
import {Guest} from './Guest';
import {GuestService} from './guest.service';
/**
 * Created by jtrumpower on 7/10/17.
 */


@Component({
    selector: 'app-rsvp-component',
    templateUrl: '../../html/rsvp.component.html'
})
export class RSVPComponent {
    guest: Guest = new Guest();
    submitted = false;

    constructor(private rsvpService: GuestService) {

    }

    addGuest() {
        this.rsvpService.create(this.guest).then(guest => {
            this.submitted = true;
        });
    }
}