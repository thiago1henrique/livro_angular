import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatTableModule, MatTable, MatTableDataSource} from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { CategoriesDataSource, CategoriesItem } from './categories-datasource';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Category } from './category.dto';
import {CategoryService} from './category';
import {lastValueFrom} from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: `
    .full-width-table {
      width: 100%;
    }

  `,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule, MatButtonModule]
})
export class CategoriesComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CategoriesItem>;
  constructor(private categoryService: CategoryService) {}

  dataSource = new MatTableDataSource<Category>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit(): void {
    this.loadCategories()
  }

  async loadCategories(): Promise<void> {
    const categories = await lastValueFrom(this.categoryService.getAll())
    this.dataSource = new MatTableDataSource(categories)
    this.table.dataSource = this.dataSource
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
  }
}
