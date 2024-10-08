import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SideBarComponent} from '../side-bar/side-bar.component';
import {ProfileService} from '../../data/services/profile.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    SideBarComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  profileService = inject(ProfileService);

  ngOnInit() {
    this.profileService.getUser();
  }
}
