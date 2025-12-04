import { Injectable } from '@angular/core';

export interface WindowType {
  id: string;
  name: string;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class WindowsService {
  private windowTypes: WindowType[] = [
    {
      id: 'fixed',
      name: 'Fixed',
      image: 'assets/window_types/fixed.png',
      description: 'Non-opening windows that provide unobstructed views and maximum natural light.'
    },
    {
      id: 'awning',
      name: 'Awning',
      image: 'assets/window_types/awning.png',
      description: 'Hinged at the top, these windows open outward for excellent ventilation even during light rain.'
    },
    {
      id: 'casement',
      name: 'Casement',
      image: 'assets/window_types/casement.png',
      description: 'Side-hinged windows that open outward with a crank, offering full ventilation and easy cleaning.'
    },
    {
      id: 'singleHang',
      name: 'Single Hung',
      image: 'assets/window_types/singleHang.png',
      description: 'Classic design with a fixed top sash and operable bottom sash for traditional aesthetics.'
    },
    {
      id: 'doubleHang',
      name: 'Double Hung',
      image: 'assets/window_types/doubleHang.png',
      description: 'Both sashes operate independently, allowing for versatile ventilation options.'
    },
    {
      id: 'bay',
      name: 'Bay',
      image: 'assets/window_types/bay.png',
      description: 'Elegant protruding windows that create extra space and stunning architectural interest.'
    },
    {
      id: 'singleSlide',
      name: 'Single Slide',
      image: 'assets/window_types/singleSlide.png',
      description: 'One fixed panel with one sliding panel, perfect for areas with limited exterior space.'
    },
    {
      id: 'doubleSlide',
      name: 'Double Slide',
      image: 'assets/window_types/doubleSlide.png',
      description: 'Both panels slide horizontally for flexible ventilation and easy operation.'
    },
    {
      id: 'endVent',
      name: 'End Vent',
      image: 'assets/window_types/endVent.png',
      description: 'Large fixed center panel flanked by operable venting units for panoramic views.'
    },
    {
      id: 'shutters',
      name: 'Shutters',
      image: 'assets/window_types/shutters.png',
      description: 'Decorative and functional window treatments that add privacy and style.'
    }
  ];

  getWindowTypes(): WindowType[] {
    return this.windowTypes;
  }

  getWindowTypeById(id: string): WindowType | undefined {
    return this.windowTypes.find(w => w.id === id);
  }
}
