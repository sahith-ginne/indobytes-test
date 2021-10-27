// import { CustomerService } from './customer.service';
import { Component, OnInit } from '@angular/core';
// import { Customer } from './customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'customer-registration-form';
  // customer :Customer = new Customer();
  
  // constructor(private service : CustomerService) {}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }


  
  // createCustomer(){
    
  //   this.service.createCustomer(this.customer).subscribe(
  //     (      res: any) => console.log(res),
  //     (      err: any) => console.log(err)
  //   )

  // }
}
