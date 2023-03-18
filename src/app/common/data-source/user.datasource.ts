import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, catchError, finalize, Observable, of } from 'rxjs';
import { User } from '../emt-schema';
import { UserService } from '../service/user.service';

export class UserDataSource extends DataSource<User> {
  private collection = new BehaviorSubject<User[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();
  public count = 0;

  constructor(private userService: UserService) {
    super();
  }
  connect(collectionViewer: CollectionViewer): Observable<User[]> {
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
    this.userService
      .users(page, size, field, direction)
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
