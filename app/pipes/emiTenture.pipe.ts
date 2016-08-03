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
@Pipe({name: 'emiTenture'})
export class EmiTenturePipe implements PipeTransform {
  transform(value: number): string {
	 
	 if (value <12){
		 return "${value} months";
	 } else{
		 let years = value / 12,
		 months = value%12,
		 outputStr:string = "${years} years, ${months} months";

		return outputStr;


	 }





  }
}
