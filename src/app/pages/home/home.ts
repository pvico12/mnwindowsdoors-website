import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WindowsService, WindowType } from '../../services/windows';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private windowsService = inject(WindowsService);
  featuredWindows: WindowType[] = this.windowsService.getWindowTypes().slice(0, 6);
}
