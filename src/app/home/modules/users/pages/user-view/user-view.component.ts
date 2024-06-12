import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { User } from "src/app/shared/interfaces/user";
import { UserService } from '../../../../../shared/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
    selector: 'app-user-view',
    templateUrl: './user-view.component.html',
    styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent {
    form!: FormGroup;
    idUser!: any;
    data!: User;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private actRoute: ActivatedRoute,
        private userService: UserService,
    ){
        this.form = fb.group({
            id: [],
            name: [''],
            username: [''],
            website: [''],
            phone: [''],
            email: [''],
            street: [''],
            suite: [''],
            zipcode: [''],
            city: [''],
            lat: [''],
            lng: [''],
            nameComp: [''],
            catchPhrase: [''],
            bs: [''],
          })
    }

    ngOnInit(): void {
        this.idUser = this.actRoute.snapshot.paramMap.get('id');
        this.data = this.userService.get(this.idUser);

        if( this.data !== null && this.data !== undefined ){
            this.form.controls['name'].setValue(this.data.name);
            this.form.controls['username'].setValue(this.data.username);
            this.form.controls['website'].setValue(this.data.website);
            this.form.controls['phone'].setValue(this.data.phone);
            this.form.controls['email'].setValue(this.data.email);
            this.form.controls['street'].setValue(this.data.address.street);
            this.form.controls['suite'].setValue(this.data.address.suite);
            this.form.controls['zipcode'].setValue(this.data.address.zipcode);
            this.form.controls['city'].setValue(this.data.address.city);
            this.form.controls['lat'].setValue(this.data.address.geo.lat);
            this.form.controls['lng'].setValue(this.data.address.geo.lng);
            this.form.controls['nameComp'].setValue(this.data.company.name);
            this.form.controls['catchPhrase'].setValue(this.data.company.catchPhrase);
            this.form.controls['bs'].setValue(this.data.company.bs);
        }
    }

    onCancel(){
        this.router.navigate(['app/users'])
    }
}