import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';
import quotes from '../../data/quotes';

/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quotesPage = 'QuotesPage';
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];
  ngOnInit() {
    this.quoteCollection = quotes;
  }

}
