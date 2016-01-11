// var name = 'Yan Hong';
// var age = 24;
// var age_difference = 5;
// var is_male = true;

var biology = {
  title: 'Principals of Biology',
  price: 120.5,
  author: 'Kevin',
  isSale: true
}

var chemistry = {
  title: 'Principals of Chemistry',
  price: 180.7,
  author: 'Neo',
  isSale: false
}

var english = {
  title: 'English 101',
  price: 20.1,
  author: 'Mark',
  isSale: true
}

var bookList =  [ chemistry, biology ];

var ubc = {
  location: 'Vancouver',
  name: 'UBC',
  books: [ chemistry, biology, english ]
};

var sfu = {
  location: 'Burnaby',
  name: 'SFU',
  books: [ chemistry, english ]
};

// if (school.name == 'UBC') {
//   console.log(school.books[0].title);
//   console.log(school.books[1].title);
// }

function displayBooks(s) {
  console.log('==============' + s.name + '==============');
  for (var i = 0; i < s.books.length; i++) {
    console.log(s.books[i].title);

    s.books[i].price = Number(prompt('Please enter your price for ' + s.books[i].title));

    var finalPrice = Math.ceil(s.books[i].price + 10);
    if (s.books[i].price < 100) {
      console.log('Clearance!');
    }
    console.log('$' + finalPrice);
    // console.log( Math.round(Math.random() * 100));
  }
}

displayBooks(ubc);
// displayBooks(sfu);

function lottery() {
  /* Write your code here */  
  var ran = Math.random() * 100;
  if (ran > 50) {
    console.log('win!');
  } else {
    console.log('lose!');
  }
}

//lottery();

// var option = confirm('Do you want to pay now?');

// if (option == true) {
//   alert('Thanks for your order!');
// } else {
//   alert('Please come back later!');
// }

// var bookPrice = Number(prompt('Please enter your price:'));

// console.log(bookPrice);




