var laundryRoom = 'Basement';
var mailRoom = 'Room 1A';

function myApartment() {
  var mailBoxNumber = 'Box 3';
  laundryRoom = 'In-unit';
  console.log('Mail box: ' + mailBoxNumber + ', Laundry:' + laundryRoom);
}

/*If nothing showed up in the console.
That's right, and it means that JavaScript does not have access to the variable,
since it is hidden away in the myApartment function.
To see the hidden variables inside the function
call the myApartment function instead.
myApartment();*/

myApartment();

console.log('LaundryRoom: ' + laundryRoom + ', Mail' + mailRoom);
