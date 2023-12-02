import { Component } from '@angular/core';
import { CountService } from '../services/count.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  count$ = this.countService.count$;
  constructor(private countService: CountService) {}
}
