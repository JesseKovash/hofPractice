// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var multFiveCount = 0;
  _.each(numbers, function(number) {
    if (number % 5 === 0) {
      multFiveCount ++;
    }
  });
  return multFiveCount;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  var filtered;
  var correctFruit = _.filter(fruits, function (fruit, index) {
    if (fruit === targetFruit) {
      filtered = fruits.slice(index, index + 1);
    }
  });
  return filtered;
};


// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  var startsFiltered;
  _.filter(fruits, function(fruit, index) {
    if (fruit[0] === letter) {
      if (startsFiltered === undefined) {
        startsFiltered = fruits.slice(index, index + 1);
      } else {
        startsFiltered.push(fruit);
      }
    }
  });
  if (startsFiltered === undefined) {
    return (fruits.slice(fruits.length + 1));
  } else {
    return startsFiltered;
  }
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var cookieFiltered;
  _.filter(desserts, function(dessert, index) {
    if (dessert.type === 'cookie') {
      if (cookieFiltered === undefined) {
        cookieFiltered = desserts.slice(index, index + 1);
      } else {
        cookieFiltered.push(dessert);
      }
    }
  });
  if (cookieFiltered === undefined) {
    return (desserts.slice(desserts.length + 1));
  } else {
    return cookieFiltered;
  }
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var totaled = _.reduce(products, function (start, product) {
    var priced = parseFloat(product.price.substring(1));
    return start + priced;
  }, 0);
  return totaled;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var sortedDesserts = _.reduce(desserts, function (memo, eachDessert) {
    var dessertType = eachDessert.type;

    if (dessertType) {
      if (memo[dessertType] === undefined) {
        memo[dessertType] = 1;
      } else {
        memo[dessertType] = memo[dessertType] + 1;
      }
    }
    return memo;

  }, {});
  return sortedDesserts;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var nineties = _.reduce(movies, function (memo, eachMovie) {
    var year = eachMovie.releaseYear;
    if (year >= 1990 && year <= 2000) {
      memo.push(eachMovie.title);
      return memo;
    } else {
      return memo;
    }
  }, []);
  return nineties;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var shortMovies = _.reduce (movies, function(memo, movie) {
    var movieTime = movie.runtime;
    if (movieTime) {
      if (movieTime < timeLimit) {
        memo = true;
      }
    }
    return memo;
  }, false);
  return shortMovies;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  var firstCapital = _.map(fruits, function(fruit) {
    return fruit[0].toUpperCase();
  });
  return firstCapital;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  var noFlour = _.map(desserts, function (dessert) {
    var ingredients = dessert.ingredients;
    if (ingredients.includes('flour')) {
      dessert.glutenFree = false;
    } else {
      dessert.glutenFree = true;
    }
    return dessert;
  });
  return noFlour;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  var salePrices = _.map(groceries, function(item) {
    var itemPrice = parseInt(parseFloat(item.price.substring(1)) * 100);
    var salePrice = (Math.round(itemPrice * 0.80)) / 100;
    item.salePrice = '$' + salePrice;
    return item;
  });
  return salePrices;
};
