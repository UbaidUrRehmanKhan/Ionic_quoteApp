import { QuotesService } from './../../services/quotes';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
  quoteGroup: {category: string, quotes: Quote[], icon: string}[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private alertCtrl: AlertController,
     private quotesService: QuotesService) {
  }
  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad QuotesPage');
  //   this.quoteGroup = this.navParams.data;
  // }

  onAddToFavorite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the Quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            console.log('OK');
            this.quotesService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text: 'No, I changed my Mind!',
          handler: () => {
            console.log('Cancelled!');
          }
        }
      ]
    });
    alert.present();
  }
  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
  }
  isFavorite(quote: Quote){
    return this.quotesService.isQuoteFavorite(quote);
  }
}
