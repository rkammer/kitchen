import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

    groups : {id : number, name : string}[] = [
        {id: 1, name: 'Channel Islands Masonic Lodge'},
        {id: 2, name: 'Rainbow Girls'},
        {id: 3, name: 'Jobs Daughters'}
    ];

    checkInForm  : FormGroup;
    group        : number  = null;
    name         : string  = null;
    email        : string  = null;
    counterClean : boolean = null;
    floorClean   : boolean = null;
    utensils     : boolean = null;
    comments     : string  = null;

    public cancel() : void {
        this.router.navigate(['/dashboard']);
    }

    public validate() : void {
        Object.keys(this.checkInForm.controls).forEach(field => {
            this.checkInForm.get(field).markAsTouched({ onlySelf: true });
        });
    }

    public submit() : void {
        if (!this.checkInForm.valid) {
            this.validate();
        } else {
            // console.log(this.checkInForm.value);
            this.router.navigate(['/dashboard', 'success']);
        }
    }

    constructor(formBuilder : FormBuilder, private router: Router) {
        this.checkInForm = formBuilder.group({
            'group'  : [this.group, Validators.required],
            'name'   : [this.name,  Validators.required],
            'email'  : [this.email, Validators.compose([
                Validators.required,
                Validators.email
            ])],
            'counterClean' : [this.counterClean, Validators.required],
            'floorClean'   : [this.floorClean,   Validators.required],
            'utensils'     : [this.utensils,     Validators.required],
            'comments'     : [this.comments,     Validators.minLength(10)]
        });

        // tslint:disable-next-line:no-unused-expression
        // this.checkInForm.controls['rEmail'].errors?.email;
    }

    ngOnInit() {
    }

}
