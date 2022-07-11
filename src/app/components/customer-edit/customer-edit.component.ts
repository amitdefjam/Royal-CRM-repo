import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, take } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss'],
})
export class CustomerEditComponent implements OnInit {
  id: string = '';
  customer$?: Observable<Required<Customer>>;

  form: Required<Customer> = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private customersService: CustomersService,
    private routerService: Router
  ) {}

  async onSubmit({ valid }: NgForm) {
    if (valid) {
      await this.customersService.update(this.form);
      this.routerService.navigate(['../..'], {
        relativeTo: this.activatedRoute,
      });
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((param) =>
          this.customersService.getById(param['id']).pipe(take(1))
        )
      )
      .subscribe((customer) => {
        this.form = customer;
      });
  }
}
