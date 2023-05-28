import { Component, OnInit } from '@angular/core'
import { MovementService } from 'src/app/common/service/movement.service'
import { Page } from 'src/app/common/model/page'
import { Filter, Movement } from 'src/app/common/emt-schema'
import { saveAs } from 'file-saver'
import { FileSaverService } from 'ngx-filesaver'

@Component({
  selector: 'app-movement-list',
  templateUrl: './movement-list.component.html',
})
export class MovementListComponent implements OnInit {
  movements: Movement[] = []
  filter: Filter | null = null
  constructor(private movementService: MovementService, private fileSaverService: FileSaverService) {}
  ngOnInit(): void {
    this.movementService.movements().subscribe({
      next: (data: Movement[]) => (this.movements = data),
    })
  }

  downloadFile(): void {
    this.movementService.download(this.filter).subscribe((blob) => this.fileSaverService.save(blob, 'report.pdf'))
  }

  search($event: Filter) {
    this.filter = $event
    this.movementService.filter(this.filter).subscribe({
      next: (data: Movement[]) => (this.movements = data),
    })
  }

  clear() {
    this.movementService.movements().subscribe({
      next: (data: Movement[]) => (this.movements = data),
    })
  }
}
