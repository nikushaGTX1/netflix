import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  prevScrollPos: number = window.pageYOffset; // Initial scroll position
  navbarHidden: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  // Listen for the window scroll event
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    let currentScrollPos = window.pageYOffset;

    if (this.prevScrollPos > currentScrollPos) {
      // Scroll up: show the navbar
      this.navbarHidden = false;
    } else {
      // Scroll down: hide the navbar
      this.navbarHidden = true;
    }

    this.prevScrollPos = currentScrollPos; // Update the scroll position
  }
}
