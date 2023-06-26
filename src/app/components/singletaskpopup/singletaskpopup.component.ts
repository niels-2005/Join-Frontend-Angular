import { Component, Input } from '@angular/core';
import { AddtaskfieldserviceService } from 'src/app/services/addtaskfieldservice.service';

@Component({
  selector: 'app-singletaskpopup',
  templateUrl: './singletaskpopup.component.html',
  styleUrls: ['./singletaskpopup.component.scss']
})
export class SingletaskpopupComponent {

  @Input() selectedTask: any = null;

  constructor(private popupService: AddtaskfieldserviceService) {}

  getInitials(name: string): string {
    const names = name.split(",");
    const initials = names.map((n) => {
      const parts = n.trim().split(" ");
      return parts
        .map((p) => p.charAt(0))
        .join("");
    });
    return initials.join(", ");
  }

  closePopup(){
    this.popupService.removeOpacity();
    this.selectedTask = null;
  }

}
