import { Component } from '@angular/core';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { AddtaskfieldserviceService } from 'src/app/services/addtaskfieldservice.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {

  todo = ['Fall asleep'];
  inProgress = ['Wuff'];
  awaitingFeedback = ['Meow'];
  done = ['Get up'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  constructor(private popupService: AddtaskfieldserviceService) {}

  openTaskField() {
    this.popupService.openTaskField();
  }


  }


