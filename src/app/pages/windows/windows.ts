import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WindowsService, WindowType } from '../../services/windows';

@Component({
  selector: 'app-windows',
  imports: [RouterLink],
  templateUrl: './windows.html',
  styleUrl: './windows.scss',
})
export class Windows {
  private windowsService = inject(WindowsService);
  windowTypes: WindowType[] = this.windowsService.getWindowTypes();
}
