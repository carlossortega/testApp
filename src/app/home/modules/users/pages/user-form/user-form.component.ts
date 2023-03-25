import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../../shared/services/user.service';
import { FirebaseService } from '../../../../../shared/services/firebase.service';
import { User } from '../../../../../shared/interfaces/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  form!: FormGroup;
  idUser!: any;
  edit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private actRoute: ActivatedRoute,
    private userService: UserService,
    private firebaseService: FirebaseService,
  ){
    this.form = fb.group({
      id: [],
      name: ['', Validators.required],
      username: ['', Validators.required],
      website: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      street: ['', Validators.required],
      suite: ['', Validators.required],
      zipcode: ['', Validators.required],
      city: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required],
      nameComp: ['', Validators.required],
      catchPhrase: ['', Validators.required],
      bs: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    //idUser es el index del elemento a editar
    this.idUser = this.actRoute.snapshot.paramMap.get('id');
    if( this.idUser != null ){
      this.edit = true;
      const data: User = this.userService.get(this.idUser);
      let phone = data.phone.split(' ')[0];
      this.form.controls['name'].setValue(data.name);
      this.form.controls['username'].setValue(data.username);
      this.form.controls['website'].setValue(data.website);
      this.form.controls['phone'].setValue(phone);
      this.form.controls['email'].setValue(data.email);
      this.form.controls['street'].setValue(data.address.street);
      this.form.controls['suite'].setValue(data.address.suite);
      this.form.controls['zipcode'].setValue(data.address.zipcode);
      this.form.controls['city'].setValue(data.address.city);
      this.form.controls['lat'].setValue(data.address.geo.lat);
      this.form.controls['lng'].setValue(data.address.geo.lng);
      this.form.controls['nameComp'].setValue(data.company.name);
      this.form.controls['catchPhrase'].setValue(data.company.catchPhrase);
      this.form.controls['bs'].setValue(data.company.bs);
    }
  }

  onCancel(){
    this.router.navigate(['app/menu/users/list'])
  }

  onClick(){
    if( this.form.valid ){
      if( !this.idUser ){
        const data: User = {
          id: this.userService.leng+1,
          name: this.form.controls['name'].value,
          username: this.form.controls['username'].value,
          website: this.form.controls['website'].value,
          phone: this.form.controls['phone'].value,
          email: this.form.controls['email'].value,
          address: {
            street: this.form.controls['street'].value,
            suite: this.form.controls['suite'].value,
            zipcode: this.form.controls['zipcode'].value,
            city: this.form.controls['city'].value,
            geo: {
              lat: this.form.controls['lat'].value,
              lng: this.form.controls['lng'].value
            }
          },
          company: {
            name: this.form.controls['nameComp'].value,
            catchPhrase: this.form.controls['catchPhrase'].value,
            bs: this.form.controls['bs'].value,
          }
        }
        this.userService.post(data);
        this.firebaseService.code('user-created');
        this.router.navigate(['app/menu/users/list']);
      } else {
        //recibo id
        const data: User = {
          id: this.idUser,
          name: this.form.controls['name'].value,
          username: this.form.controls['username'].value,
          website: this.form.controls['website'].value,
          phone: this.form.controls['phone'].value,
          email: this.form.controls['email'].value,
          address: {
            street: this.form.controls['street'].value,
            suite: this.form.controls['suite'].value,
            zipcode: this.form.controls['zipcode'].value,
            city: this.form.controls['city'].value,
            geo: {
              lat: this.form.controls['lat'].value,
              lng: this.form.controls['lng'].value
            }
          },
          company: {
            name: this.form.controls['nameComp'].value,
            catchPhrase: this.form.controls['catchPhrase'].value,
            bs: this.form.controls['bs'].value,
          }
        }
        this.userService.put(data);
        this.firebaseService.code('user-updated');
        this.router.navigate(['app/menu/users/list']);
      }
    }
  }


}
