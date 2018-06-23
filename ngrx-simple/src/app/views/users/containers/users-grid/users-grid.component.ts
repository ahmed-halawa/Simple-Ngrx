import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  ChangeDetectionStrategy,
  ElementRef
} from '@angular/core';

import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { merge } from 'rxjs/observable/merge';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import * as fromStore from '../../store';
import * as fromActions from '../../store/actions';

import {
  map,
  startWith,
  switchMap,
  catchError,
  takeUntil,
  mergeMap
} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.css'],
  animations: [
    trigger('detailExpand', [
      state(
        'collapsed',
        style({ height: '0px', minHeight: '0', visibility: 'hidden' })
      ),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      )
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersGridComponent implements OnInit, OnDestroy {
  displayedColumns = ['id', 'avatar_url', 'login', 'type'];
  dataSource: any = new MatTableDataSource();
  unsubscribe$: Subject<void> = new Subject<void>();
  @ViewChild('content') content: ElementRef;

  usersLoading$: Observable<boolean>;
  usersErr$: Observable<any>;
  expandedElement: any;

  constructor(private store: Store<fromStore.IFeatureState>) {}

  ngOnInit() {
    this.store.dispatch(new fromActions.LoadUsers());

    // observables selectors
    this.usersLoading$ = this.store
      .select(fromStore.getUsersLoading)
      .pipe(takeUntil(this.unsubscribe$));

    this.usersErr$ = this.store
      .select(fromStore.getUsersErr)
      .pipe(takeUntil(this.unsubscribe$));

    this.store
      .select(fromStore.getUsersEntitySelectAll)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(data => {
        let rows = [];
        data.forEach(element =>
          rows.push(element, { detailRow: true, element })
        );
        this.dataSource.data = rows;
      });
  }

  isExpansionDetailRow = (_, row: any) => row.hasOwnProperty('detailRow');

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
