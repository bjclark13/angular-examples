import { Component } from '@angular/core';

export interface ITransaction {
  title: string;
  cost: number;
  date: Date
};

class Transaction implements ITransaction {
  date: Date;

  constructor(public title: string = '', public cost: number = 0) {
    this.date = new Date();
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'budget-buddy';

  budget : number  = 100;

  newTransaction = new Transaction();

  transactions : ITransaction[] = [
    {
      title: 'Pizza',
      cost: 23.54,
      date: new Date('December 17, 2019 03:24:00')
    },
    {
      title: 'Movies',
      cost: 49.20,
      date: new Date('January 12, 2020 09:12:00')
    },
    {
      title: 'Bacon',
      cost: 3,
      date: new Date('January 17, 2020 12:24:00')
    }
  ]

  onAdd() {
    this.transactions.push(this.newTransaction);

    this.newTransaction = new Transaction();
  }

  getTotal() {
    return this.transactions.reduce( (prev, tran) => prev + tran.cost , 0 );
  }
}
