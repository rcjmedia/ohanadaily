import { Component, OnInit } from '@angular/core';
import { TransactionsService } from './transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  isLoading: boolean;
  transactionsList: any[];

  constructor(private transactionsService: TransactionsService) {
    this.transactionsList = [];
  }

  renderTransactions(result: any) {
    this.transactionsList = result.sort((a: any, b: any) => {
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
    this.transactionsService.getTransactions().then(result => {
      this.renderTransactions(result);
    });
  }
}
