import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AddtaskfieldserviceService } from 'src/app/services/addtaskfieldservice.service';


@Component({
  selector: 'app-addtaskboardbutton',
  templateUrl: './addtaskboardbutton.component.html',
  styleUrls: ['./addtaskboardbutton.component.scss'],
  animations: [
    trigger('slide', [
      state('in', style({ right: '140px' })),
      state('out', style({ right: '-2000px' })),
      transition('void => *', animate('1s ease-in-out')), // Wenn das Element erzeugt wird
      transition('* => void', animate('1s ease-in-out'))  // Wenn das Element zerstört wird
    ])
  ]
})
export class AddtaskboardbuttonComponent implements OnInit {


  constructor (private popupService: AddtaskfieldserviceService) {}

  closeTaskField(){
    this.popupService.closeTaskField();
  }

  ngOnInit(): void {

  }

    selectedPrio(id1: string, id2: string, id3: string, classnameToggle: string, removedClassOne: string, removedClassTwo: string) {
    document.getElementById(id1)!.classList.toggle(classnameToggle);
    document.getElementById(id2)!.classList.remove(removedClassOne);
    document.getElementById(id3)!.classList.remove(removedClassTwo);
  }


}
