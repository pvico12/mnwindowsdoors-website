import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  services = [
    {
      icon: 'window',
      title: 'Window Installation',
      description: 'Professional installation of all window types including casement, double-hung, bay, and more. We ensure perfect fit and seal for maximum energy efficiency.'
    },
    {
      icon: 'door',
      title: 'Door Installation',
      description: 'Expert installation of entry doors, patio doors, and storm doors. Enhance your home\'s security and curb appeal with our quality door services.'
    },
    {
      icon: 'replace',
      title: 'Window Replacement',
      description: 'Upgrade your old, drafty windows with modern, energy-efficient alternatives. We handle complete removal and installation with minimal disruption.'
    },
    {
      icon: 'repair',
      title: 'Repairs & Maintenance',
      description: 'Keep your windows and doors functioning properly with our repair services. From hardware replacement to weatherstripping, we\'ve got you covered.'
    },
    {
      icon: 'energy',
      title: 'Energy Efficiency Upgrades',
      description: 'Reduce your energy bills with our efficiency-focused solutions. We offer Low-E glass, double and triple pane options, and proper insulation.'
    },
    {
      icon: 'consult',
      title: 'Free Consultations',
      description: 'Not sure what you need? Our expert team provides free in-home consultations to assess your needs and provide honest recommendations.'
    }
  ];
}
