import { Component, OnInit } from '@angular/core';
import { AddtaskfieldserviceService } from 'src/app/services/addtaskfieldservice.service';


@Component({
  selector: 'app-addtaskboardbutton',
  templateUrl: './addtaskboardbutton.component.html',
  styleUrls: ['./addtaskboardbutton.component.scss'],
})
export class AddtaskboardbuttonComponent implements OnInit {


  constructor (private popupService: AddtaskfieldserviceService) {}

  closeTaskField(id1: string){
    this.popupService.closeTaskField(id1);
  }

  ngOnInit(): void {

  }

    selectedPrio(id1: string, id2: string, id3: string, classnameToggle: string, removedClassOne: string, removedClassTwo: string) {
    document.getElementById(id1)!.classList.toggle(classnameToggle);
    document.getElementById(id2)!.classList.remove(removedClassOne);
    document.getElementById(id3)!.classList.remove(removedClassTwo);
  }


}
