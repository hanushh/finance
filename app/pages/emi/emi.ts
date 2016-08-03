import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {MoneyPipe} from '../../pipes/money.pipe';
import {EmiTenturePipe} from '../../pipes/emiTenture.pipe';
/*
  Generated class for the EmiPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/emi/emi.html',
  pipes: [MoneyPipe, EmiTenturePipe]
})
export class EmiPage {

	bankName = "";

	loanAmount = 950000;
	tentureMonth = 0;
	tentureYear = 7;
	interestRate = 0.1;
	totalAmountToPay = 0;
	emiValue = 0;

	constructor(public nav: NavController, navParams: NavParams) {
		
		let bankDetails = navParams.get('bankDetails');

		this.interestRate = bankDetails.interest;
		this.bankName = bankDetails.name;

		this.emiChange();
  }

  emiChange(){
	  
	  var loanAmount = this.loanAmount,
		  loanTerm = ((this.tentureYear * 12) + this.tentureMonth),
		  interestRate = this.interestRate,
		  r = interestRate / (12 * 100),
		  rp = 1 + r,
		  n = loanTerm,
		  rpn = Math.pow(rp, n),
		  calculatedAmount = loanAmount * r * (rpn / (rpn - 1)),
		  totalAmountToPay = calculatedAmount * loanTerm;

	  this.totalAmountToPay = parseFloat(totalAmountToPay.toFixed(2));
	  this.emiValue = parseFloat(calculatedAmount.toFixed(2));
	  
  }
}
