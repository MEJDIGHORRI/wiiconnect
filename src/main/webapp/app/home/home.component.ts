import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoginModalService } from 'app/core/login/login-modal.service';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';
import { faLightbulb, faTint, faThermometerHalf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  account: Account | null = null;
  authSubscription?: Subscription;
  faLightbulb = faLightbulb;
  faThermometerHalf = faThermometerHalf;
  faTint = faTint;
  tempIcone: any = '../../../content/icons/temp.png';
  humIcone: any = '../../../content/icons/hum2.png';
  bulbIcone: any = '../../../content/icons/bulb.png';
  shutterIcone: any = '../../../content/icons/shutter.png';
  storeIcone: any = '../../../content/icons/store.png';
  heatingIcone: any = '../../../content/icons/heating.png';
  camIcone: any = '../../../content/icons/cam.png';
  gpsIcone: any = '../../../content/icons/gps.png';
  livingroom: any = '../../../content/images/zone/living-room.jpg';
  bedroom: any = '../../../content/images/zone/bedroom.jpg';
  bedroom2: any = '../../../content/images/zone/bedroom2.jpg';
  kitchen: any = '../../../content/images/zone/kitchen.jpg';
  garden: any = '../../../content/images/zone/garden.jpg';
  swimmingpool: any = '../../../content/images/zone/swimming-pool.jpg';
  bathroom: any = '../../../content/images/zone/bathroom.jpg';
  hall: any = '../../../content/images/zone/hall.jpg';
  terrace: any = '../../../content/images/zone/terrace.jpg';

  constructor(private accountService: AccountService, private loginModalService: LoginModalService) {}

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  login(): void {
    this.loginModalService.open();
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
