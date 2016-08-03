import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {EmiPage} from '../emi/emi';

/*
  Generated class for the CarLoansPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/car-loans/car-loans.html',
})
export class CarLoansPage {
	items = [];
	searchQuery = "";

  constructor(public nav: NavController) {
	  this.searchQuery = '';
	  this.initializeItems();



  }


  initializeItems() {
	  this.items = [
		  {
			  name: 'SBI',
			  interest: 9.60,
			  maxTenture: 20,
			  imgUrl: "sbi/state-bank-of-india-home-loan.png"
		  },
		  {
			  name: 'Axis Bank Home Loan ',
			  interest: 9.50,
			  maxTenture: 20,
			  processingFee: "11500",
			  imgUrl: "sbi/state-bank-of-india-home-loan.png"
		  },
		  {
			  name: 'FEDERAL Bank',
			  interest: 9.40,
			  maxTenture: 20,
			  imgUrl: "sbi/state-bank-of-india-home-loan.png"
		  }
	  ];
  }

  getItems(searchbar) {
	  // Reset items back to all of the items
	  this.initializeItems();

	  // set q to the value of the searchbar
	  var q = searchbar.target.value;

	  // if the value is an empty string don't filter the items
	  if (q.trim() == '') {
		  return;
	  }


	  this.items = this.items.filter((v) => {
		  if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
			  return true;
		  }
		  return false;
	  })
  }


  goToEmiPage(bankDetails) {
	  this._navController.push(EmiPage, {
		  bankDetails: bankDetails
	  });
  }
}
