import { Component, OnInit, QueryList, ViewChild } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/interfaces/user';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { FirebaseService } from '../../../shared/services/firebase.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  selection!: SelectionModel<User>;
  dataUsers!: User[];
  columns: string[] = ['name','email','website','company','city','zipcode','actions'];
  loading: boolean = false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( 
    private router: Router,
    private userService: UserService,
    private firebaseService: FirebaseService,
  ){}

  ngOnInit(): void {
    this.getData();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filter(event: Event){
    const filter = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filter.trim().toLowerCase();
  }

  getData(){
    this.loading = true;
    this.dataUsers = this.userService.getAll();
    this.dataSource = new MatTableDataSource(this.dataUsers);
    this.loading = false;
  }

  onCreate(){
    this.router.navigate(['app/menu/users/post']);
  }

  onEdit(id: number){
    this.router.navigate(['app/menu/users/edit', id]);
  }

  onSee(id: any){
    this.router.navigate(['app/menu/users/view', id]);
  }

  onDelete(id: number){
    Swal.fire({
      icon: 'question',
      titleText: 'Delete User!',
      text: 'Are you sure you want to delete it?',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      cancelButtonColor: '#d11815',
      confirmButtonText: 'Delete',
      confirmButtonColor: '#4759fe',
      focusConfirm: true,
    }).then( (resp) => {
      if( resp.isConfirmed ){
        this.userService.delete(id);
        this.firebaseService.code('user-deleted');
        this.getData();
        this.ngAfterViewInit();
      }
    });
  }


 


}
