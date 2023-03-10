import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/interfaces/user';
import { MatTableDataSource } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  selection!: SelectionModel<User>;
  dataUsers: any[]= [];
  columns: string[] = ['name','email','website','company','city','zipcode','actions'];

  constructor( private userService: UserService ){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe( resp => {
      this.dataUsers = resp;
      this.dataUsers.map( r => { r.checked = false; })
      this.dataSource = new MatTableDataSource<User[]>(this.dataUsers);
    })
  }


  isCheckedAll(){
    return this.dataSource.data.every( item => item.checked );
  }

  checkedAll(event: any){
    let ev = event.target.checked;
    this.dataSource.data.forEach( item => item.checked = ev);
  }

 


}
