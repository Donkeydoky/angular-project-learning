import { Component, OnInit } from '@angular/core';

//import the class SalesPerson from the path
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  // commit3, step 5:
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //step 6: populate some data into the modules
  salesPersonList: SalesPerson[] = [
    new SalesPerson("adma", "Kumar", "KumarAdaa@gmail.com", 50000),
    new SalesPerson("Oscar", "Xu", "xulloscar@gmail.com", 150000),
    new SalesPerson("fei", "zhang", "23948734561@qq.com", 66666),
    new SalesPerson("jie", "cao", "jiecao@163.com", 88888),
  ];
}
