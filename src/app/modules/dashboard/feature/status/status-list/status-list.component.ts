import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Status } from 'src/app/common/emt-schema';
import { StatusService } from 'src/app/common/service/status.service';
import { StatusFormComponent } from '../status-form/status-form.component';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
})
export class StatusListComponent implements OnInit {
  statuses: Status[] = [];
  constructor(private statusService: StatusService,private modalService: NgbModal) {}
  ngOnInit(): void {
    this.statusService.collection().subscribe({
      next: (data:Status[]) => (this.statuses = data),
    });
  }

  status() {
    this.modalService.open(StatusFormComponent).result
      .then((reason: Status) => this.statuses.push(reason));
  }
}
