import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, catchError, finalize, Observable, of } from 'rxjs';
import { Movement, User } from '../emt-schema';
import { MovementService } from '../service/movement.service';
import { UserService } from '../service/user.service';

export class MovementDataSource extends DataSource<Movement> {
  private collection = new BehaviorSubject<Movement[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();
  public count = 0;

  constructor(private movementService: MovementService) {
    super();
  }
  connect(collectionViewer: CollectionViewer): Observable<Movement[]> {
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
    this.movementService
      .movements(page, size, field, direction)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe((data: any) => {
        this.collection.next(data.content);
        this.count = data.totalElements;
      });
  }
}
