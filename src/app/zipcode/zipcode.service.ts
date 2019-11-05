import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { isNullOrUndefined } from 'util';

@Injectable()
export class ZipCodeService {

  /*
  This function is responsible to parse the input zipcode array string into array of array and 
  use that object to validate and return the string array object 
  */
  validateZipCode(zipCodeValues: any) {

    if (!isNullOrUndefined(zipCodeValues) && zipCodeValues.trim() !== "") {
      const zipcodeArr = this.convertStringToArray(zipCodeValues);
      return this.parseZipcode(zipcodeArr);
    }
  }

  /*
    This function used to validate the input zipcode array contains the [min, max] values. It check the array and compare
    the "min" value of current index is greater than the next index value then use next index value and so on. 
    Reverse case for the max value. If the array length is equal to one then return the current index values.
  */
  private parseZipcode(zipCodeValues: any) {
    let output = "";
    
    if (zipCodeValues.length > 1) {
      zipCodeValues.sort(this.sortFunction);

      zipCodeValues.map((item, index) => {
        const nextIndex = index + 1;

        if (index <= nextIndex && nextIndex < zipCodeValues.length) {
          const currentIndexMinValue = item[0];
          const currentIndexMaxValue = item[1];

          const nextIndexMinValue = zipCodeValues[nextIndex][0];
          const nextIndexMaxValue = zipCodeValues[nextIndex][1];

          if (currentIndexMaxValue >= nextIndexMinValue) {

            if (currentIndexMaxValue >= nextIndexMaxValue) {
              output += "[" + [currentIndexMinValue, currentIndexMaxValue] + "]";
            }
            else {
              output += "[" + [currentIndexMinValue, nextIndexMaxValue] + "]";
            }
          } else {
            output += "[" + [currentIndexMinValue, currentIndexMaxValue] + "]";
          }
        }
        else {
          const previousIndexMinValue = zipCodeValues[index - 1][0];
          const previousIndexMaxValue = zipCodeValues[index - 1][1];

          const currentIndexMinValue = item[0];
          const currentIndexMaxValue = item[1];

          if ((previousIndexMaxValue < currentIndexMinValue) && (currentIndexMinValue > previousIndexMinValue)) {

            if (currentIndexMaxValue >= previousIndexMaxValue) {
              output += "[" + [currentIndexMinValue, currentIndexMaxValue] + "]";
            }
          }
        }
      });
    } else {
      output = "[" + zipCodeValues + "]";
    }

    return output;
  }

  /*
    Function used to convert the string Array into Array of array to loop through
  */
  private convertStringToArray(values) {  
    let zipcodeArr = [];
    if (!isNullOrUndefined(values)) {
      const splitArray = values.split('[');

      if (!isNullOrUndefined(splitArray) && splitArray.length > 0) {

        splitArray.map((data) => {
          if (data != null && data != undefined && data.trim() != "") {
            const splitArr = data.split(',');
            let arr = [];

            if (splitArr != null && splitArr != undefined && splitArr.length > 0) {
              splitArr.map((val) => {
                if (val.indexOf(']') > -1) {
                  arr.push(val.replace("]", "").trim());
                } else {
                  arr.push(val.trim());
                }
              });
            }

            zipcodeArr.push(arr);
          }
        });
      }

      return zipcodeArr;
    }
  }

  /*
  This is the custom sort function to sort the array of array contain number
  to sort numerically
  */
  private sortFunction(a, b) {
    if (!isNullOrUndefined(a) && !isNullOrUndefined(b)) {
      if (a[0] === b[0]) {
        return 0;
      }
      else {
        return (a[0] < b[0]) ? -1 : 1;
      }
    }
  }
}