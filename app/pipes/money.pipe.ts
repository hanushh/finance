import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({name: 'money'})
export class MoneyPipe implements PipeTransform {
  transform(value: number): string {
	
	  var x = value.toString();
	  var afterPoint = '';
	  if (x.indexOf('.') > 0)
		  afterPoint = x.substring(x.indexOf('.'), x.length);
	  var y = Math.floor(value);
	  x = y.toString();
	  var lastThree = x.substring(x.length - 3);
	  var otherNumbers = x.substring(0, x.length - 3);
	  if (otherNumbers != '')
		  lastThree = ',' + lastThree;
	  var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;

	  return "₹ " + res;



  }
}
