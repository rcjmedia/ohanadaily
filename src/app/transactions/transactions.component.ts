import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { TransactionService } from './transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  version: string = environment.version;
  isLoading: boolean;
  saleTransaction: any[];

  constructor(private transactionService: TransactionService) {
    this.saleTransaction = [];
  }

  alphaSort(result: any) {
    this.saleTransaction = result.sort((a: any, b: any) => {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    });
  }

  ngOnInit() {
    this.isLoading = true;
    this.transactionService.getTransaction().then(result => {
      this.alphaSort(result);
    });
  }
}
