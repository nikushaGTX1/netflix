import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  standalone: false,
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0px', opacity: 0, overflow: 'hidden', padding: '0px' })),
      state('expanded', style({ height: '*', opacity: 1, padding: '15px' })),
      transition('collapsed <=> expanded', [
        animate('200ms ease-in-out')
      ])
    ])
  ]
})
export class QuestionsComponent {
  showInfoState: any = {}; // Track visibility of each question

  toggleInfo(questionId: string): void {
    // If the clicked info box is already open, close it
    if (this.showInfoState[questionId]) {
      this.showInfoState[questionId] = false;
    } else {
      // Close all other info boxes first
      for (let key in this.showInfoState) {
        if (this.showInfoState.hasOwnProperty(key)) {
          this.showInfoState[key] = false;
        }
      }

      // Then open the selected info box
      this.showInfoState[questionId] = true;
    }
  }
}
