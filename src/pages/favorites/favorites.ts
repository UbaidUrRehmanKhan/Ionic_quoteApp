import { SettingsService } from './../../services/settings';
import { QuotesService } from './../../services/quotes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];
  constructor(public navCtrl: NavController,
    private quotesService:QuotesService,
    private modalCtrl: ModalController,
     public navParams: NavParams,
     private settingService: SettingsService) {

  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }
  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create('QuotePage', quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      console.log(remove);
      if( remove ){
        this.quotesService.removeQuoteFromFavorites(quote);
        const position = this.quotes.findIndex((quoteEl: Quote) => {
          return quoteEl.id == quote.id;
        });
        this.quotes.splice(position, 1);
      }
    });

  }
  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
        const position = this.quotes.findIndex((quoteEl: Quote) => {
          return quoteEl.id == quote.id;
        });
        this.quotes.splice(position, 1);
  }

  getBackground(){
    return this.settingService.isAltBackground()? 'altQuoteBackground' : 'quoteBackground';
  }

  isAltBackground(){
    return this.settingService.isAltBackground();
  }

}
