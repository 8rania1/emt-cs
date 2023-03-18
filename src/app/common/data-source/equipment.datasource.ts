import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, catchError, finalize, Observable, of } from 'rxjs';
import { Equipment, User } from '../emt-schema';
import { Page } from '../model/page';
import { EquipmentService } from '../service/equipment.service';
import { UserService } from '../service/user.service';

export class EquipmentDataSource extends DataSource<Equipment> {
  private collection = new BehaviorSubject<Equipment[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();
  public count = 0;

  constructor(private equipmentService: EquipmentService) {
    super();
  }
  connect(collectionViewer: CollectionViewer): Observable<Equipment[]> {
    return this.collection.asObservable();
  }
  disconnect(collectionViewer: CollectionViewer) {
    this.collection.complete();
    this.loadingSubject.complete();
  }

  load(
    field: string = '',
    direction: string = 'asc',
    page: number = 0,
    size: number = 10
  ) {
    this.loadingSubject.next(true);
    this.equipmentService
      .equipments(page, size, field, direction)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe({
        next: (data: any) => {
          this.collection.next(data.content);
          this.count = data.totalElements;
        },
      });
  }
}
