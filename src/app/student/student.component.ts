import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'student',
  templateUrl: 'student.component.html',
  styleUrls: ['student.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class StudentComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['status', 'homework', 'date', 'teacher'];
  expandedElement: PeriodicElement | null | undefined;
}

export interface PeriodicElement {
  status: string;
  homework: string;
  description: string,
  date: number;
  teacher: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    status: '1',
    homework: 'HW1',
    description: 'description HW1',
    date: 1,
    teacher: 'TEACHER1',
  },
  {
    status: '1',
    homework: 'HW2',
    description: 'description HW2',
    date: 2,
    teacher: 'TEACHER2',
  },
  {
    status: '1',
    homework: 'HW3',
    description: 'description HW3',
    date: 3,
    teacher: 'TEACHER3',
  },
  {
    status: '1',
    homework: 'HW4',
    description: 'description HW4',
    date: 4,
    teacher: 'TEACHER4',
  },
  {
    status: '1',
    homework: 'HW5',
    description: 'description HW5',
    date: 5,
    teacher: 'TEACHER5',
  },
];
