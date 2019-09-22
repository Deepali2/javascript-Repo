/**
 * JavaScript Take-home
Directions: Please answer all questions in vanilla JavaScript. ES6 syntax is preferred.
1. Write a custom method to replace the string "The quick brown fox jumps
over the lazy dog" with the string "The1 quick2 brown3 fox4 jumps5
over6 the7 lazy8 dog9"
2. Using a single line of code, reverse the order of words in the string below:
var dwarves = "bashful doc dopey grumpy happy sleepy
sneezy"
3. Write a function that takes a number (from 1 to 12) and return its corresponding month
name as a string.
4. Write a regular expression that matches any string containing at least one digit.
5. Write a function that returns true if two arrays are identical, and false otherwise.
6. In the object defined below, set each property to its described value using the sample
response payload provided on the next page:
oSiteCatalyst.products = {
 "prod": "", // Extract them item's productId from
"itemPageUrl" (the substring beginning with "prod2246...")
 "quantity": "", // The value of "qty", converted to a
string
 "shipdays": "", // The value of "minDeliveryDate",
converted from an epoch date to a whole number
 "shipvalue": "", // If the item is
"shippingDiscountEligible", set to "free-plus"
 "subtotal": "", // The product of "qty" and
"listPriceInCents", converted to a readable dollar amount
 "uprice": "" // The value of "listPriceInCents",
converted to a readable dollar amount
};
Sample Response Payload to Use for Question #6:
var response = {
 "cartItems": [{
"id": "ci186012014536",
"qty": 3,
"itemInfo": {
"model": "UN55NU6950FXZA",
"itemNo": "980142010",
"minDeliveryDate": 1561938400000,
"name": "UN55NU6950FXZA - SAMSUNG 55\" Class 4K
(2160p) Ultra HD Smart LED TV",
"skuId": "sku23018986",
"itemPageUrl": "/sams/samsung-55in-4k-2160p-uhdsmart-led-tv-6000-series/prod22464496.ip"
},
"inventoryInfo": {
"minQtyLimit": -1,
"lowStockLevel": 5,
"maxQtyLimit": -1,
"itemLowInStockFlag": false,
"stockLevel": "inStock"
},
"priceInfo": {
"mapPriceInCents": 0,
"listPriceInCents": 44900,
"shippingAmountInCents": 0,
"shippingAmount": 0,
"originalPrice": 0,
"itemTotalInCents": 44900,
"totalMapPrice": 0,
"originalPriceInCents": 0,
"salesTax": 3500
},
"props": {
"selectedChannel": "ONLINE",
"shippingChargeIncluded": false,
"shippingDiscountEligible": true,
"freeShipEligible": false,
"specialItem": false,
"weightedItem": false,
"onlineChannelMinLimitQty": -1,
}
 }]
};
 */
/** 
 1. Write a custom method to replace the string "The quick brown fox jumps
over the lazy dog" with the string "The1 quick2 brown3 fox4 jumps5
over6 the7 lazy8 dog9"
 
input: string, output: string

 * logic:
 * break up the string into an array of words
 * add the index+1 at the end of each word
 * join the array elements and return as a string
 */

const q1_addWordIndex = (str) => {
  let arr = str.trim().replace(/\s+/g, ' ').split(' ');
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    arr[i] = ele + (i + 1);
  }
  return arr.join(' ');

}
console.log(q1_addWordIndex('The quick brown fox jumps over the lazy dog'));

/*
2. Using a single line of code, reverse the order of words in the string below:
var dwarves = "bashful doc dopey grumpy happy sleepy
sneezy"

input: string
output: string
*/

const q2_reverseOrderOfWords = (str) => {
  return str.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ');
}

console.log(q2_reverseOrderOfWords("bashful doc dopey grumpy happy sleepy sneezy"));

/*
3. Write a function that takes a number (from 1 to 12) and return its corresponding month
name as a string.
*/
const q_3_tellMonth = (num) => {
  const obj = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
  }
  if (num < 1 || num > 12) return 'give number between 1 and 12';
  return obj[num];
}
console.log(q_3_tellMonth(11));

/*
4. Write a regular expression that matches any string containing at least one digit.
*/
//The regular expression would be !!str.match(/\d/g) 
//See below for how the expression can be used in a function that checks if a given string contains at least one digit
const q_4_containsAtLeastOneDigit = (str) => {
  return !!str.match(/\d/g);
}
console.log(q_4_containsAtLeastOneDigit('wewf1re '));

/*
5. Write a function that returns true if two arrays are identical, and false otherwise.
*/

//For two arrays to be IDENTICAL the elements must be the same AND also must be in the same order 
const q_5_identicalArrays = (arr1, arr2) => {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

console.log(q_5_identicalArrays([1, 2, 3, 4], [1, 2, 3, 4]));

/*
6. In the object defined below, set each property to its described value using the sample
response payload provided on the next page:
oSiteCatalyst.products = {
 "prod": "", // Extract them item's productId from
"itemPageUrl" (the substring beginning with "prod2246...")
 "quantity": "", // The value of "qty", converted to a
string
 "shipdays": "", // The value of "minDeliveryDate",
converted from an epoch date to a whole number
 "shipvalue": "", // If the item is
"shippingDiscountEligible", set to "free-plus"
 "subtotal": "", // The product of "qty" and
"listPriceInCents", converted to a readable dollar amount
 "uprice": "" // The value of "listPriceInCents",
converted to a readable dollar amount
};
Sample Response Payload to Use for Question #6:
var response = {
 "cartItems": [{
"id": "ci186012014536",
"qty": 3,
"itemInfo": {
"model": "UN55NU6950FXZA",
"itemNo": "980142010",
"minDeliveryDate": 1561938400000,
"name": "UN55NU6950FXZA - SAMSUNG 55\" Class 4K
(2160p) Ultra HD Smart LED TV",
"skuId": "sku23018986",
"itemPageUrl": "/sams/samsung-55in-4k-2160p-uhdsmart-led-tv-6000-series/prod22464496.ip"
},
"inventoryInfo": {
"minQtyLimit": -1,
"lowStockLevel": 5,
"maxQtyLimit": -1,
"itemLowInStockFlag": false,
"stockLevel": "inStock"
},
"priceInfo": {
"mapPriceInCents": 0,
"listPriceInCents": 44900,
"shippingAmountInCents": 0,
"shippingAmount": 0,
"originalPrice": 0,
"itemTotalInCents": 44900,
"totalMapPrice": 0,
"originalPriceInCents": 0,
"salesTax": 3500
},
"props": {
"selectedChannel": "ONLINE",
"shippingChargeIncluded": false,
"shippingDiscountEligible": true,
"freeShipEligible": false,
"specialItem": false,
"weightedItem": false,
"onlineChannelMinLimitQty": -1,
}
 }]
};
*/

var response = {
  "cartItems": [{
    "id": "ci186012014536",
    "qty": 3,
    "itemInfo": {
      "model": "UN55NU6950FXZA",
      "itemNo": "980142010",
      "minDeliveryDate": 1561938400000,
      "name": "UN55NU6950FXZA - SAMSUNG 55\ Class 4K (2160p) Ultra HD Smart LED TV",
      "skuId": "sku23018986",
      "itemPageUrl": "/sams/samsung-55in-4k-2160p-uhdsmart-led-tv-6000-series/prod22464496.ip"
    },
    "inventoryInfo": {
      "minQtyLimit": -1,
      "lowStockLevel": 5,
      "maxQtyLimit": -1,
      "itemLowInStockFlag": false,
      "stockLevel": "inStock"
    },
    "priceInfo": {
      "mapPriceInCents": 0,
      "listPriceInCents": 44900,
      "shippingAmountInCents": 0,
      "shippingAmount": 0,
      "originalPrice": 0,
      "itemTotalInCents": 44900,
      "totalMapPrice": 0,
      "originalPriceInCents": 0,
      "salesTax": 3500
    },
    "props": {
      "selectedChannel": "ONLINE",
      "shippingChargeIncluded": false,
      "shippingDiscountEligible": true,
      "freeShipEligible": false,
      "specialItem": false,
      "weightedItem": false,
      "onlineChannelMinLimitQty": -1,
    }
  }]
};
const oSiteCatalystProducts = {
  "prod": response.cartItems[0].id,
  "itemPageUrl": response.cartItems[0].itemInfo.itemPageUrl.substr(response.cartItems[0].itemInfo.itemPageUrl.indexOf('prod')),//(the substring beginning with "prod2246...")
  "quantity": response.cartItems[0].qty.toString(), // The value of "qty", converted to a  string
  "shipdays": Math.round(response.cartItems[0].itemInfo.minDeliveryDate / (60 * 60 * 24)), // The value of "minDeliveryDate",  converted from an epoch date to a whole number
  "shipvalue": !!response.cartItems[0].props.shippingDiscountEligible ? 'free-plus' : '', // If the item is  "shippingDiscountEligible" set to "free-plus"
  "subtotal": (response.cartItems[0].qty * response.cartItems[0].priceInfo.listPriceInCents / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' }), // The product of "qty" and   "listPriceInCents" converted to a readable dollar amount
  "uprice": (response.cartItems[0].priceInfo.listPriceInCents / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })// The value of "listPriceInCents", converted to a readable dollar amount
};

console.log(oSiteCatalystProducts);



