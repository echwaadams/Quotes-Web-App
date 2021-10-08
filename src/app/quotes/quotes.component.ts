import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'Welcome to Inspirational Quotes App';
  quotes: Quote[] = [
    new Quote (1,'Adams','Motivation','The best view comes after the hardest climb.','Anonymous', new Date(2012,10,1),0,0),
    new Quote (2,'Zarina','Opportunity','The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty..','Winston Churchil', new Date(1971,10,1),0,0),
    new Quote (3,'Johnny','Time','Don’t let yesterday take up too much of today.','Will Roger', new Date(2000,10,1),0,0),
    new Quote (4,'Hafa','Success','You learn more from failure than from success. Don’t let it stop you. Failure builds character.','Unknown', new Date(2021,5,1),0,0),
    new Quote (5,'Gibson','Goals','Goal setting is the secret to a compelling future.','Tonny Robins', new Date(2011,3,1),0,0),
    new Quote (5,'Ivan','Life','If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.','Steve Jobs', new Date(1991,8,17),0,0)
  ];
  get sortQuotes(){
    return this.quotes.sort((a,b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    })
  }

  displayInfo(index: number){
    this.quotes[index].showInfo = !this.quotes[index].showInfo
  }

  constructor() { }

  ngOnInit(): void {
  }

}
