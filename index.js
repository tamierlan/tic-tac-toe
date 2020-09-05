var one = document.querySelector('.box-1')
var two = document.querySelector('.box-2')
var three = document.querySelector('.box-3')
var four = document.querySelector('.box-4')
var five = document.querySelector('.box-5')
var six = document.querySelector('.box-6')
var seven = document.querySelector('.box-7')
var eight = document.querySelector('.box-8')
var nine = document.querySelector('.box-9')
var h2 = document.querySelector('h2')
var reset = document.querySelector('#reset')

// click each box
one.addEventListener("click", one_one);
two.addEventListener("click", two_two);
three.addEventListener('click', three_three)
four.addEventListener('click', four_four)
five.addEventListener('click', five_five)
six.addEventListener('click', six_six)
seven.addEventListener('click', seven_seven);
eight.addEventListener('click', eight_eight)
nine.addEventListener('click', nine_nine)
reset.addEventListener('click', reset_game)


var xo = true;
var x = 'X';
var o = 'O';

function reset_game() {
  one.innerHTML = '';
  two.innerHTML = '';
  three.innerHTML = '';
  four.innerHTML = '';
  five.innerHTML = '';
  six.innerHTML = '';
  seven.innerHTML = '';
  eight.innerHTML = '';
  nine.innerHTML = '';
  h2.innerHTML = 'result'
  h2.style.color = 'green';
}

function check_winner(x_OR_o) {
  if (one.innerHTML===x_OR_o && two.innerHTML === x_OR_o && three.innerHTML === x_OR_o) {
    h2.innerHTML = 'THE WINNER IS : '+x_OR_o
    h2.style.color = 'red';
  } else if (four.innerHTML===x_OR_o && five.innerHTML === x_OR_o && six.innerHTML === x_OR_o) {
    h2.innerHTML = 'THE WINNER IS : '+x_OR_o
    h2.style.color = 'red';
  } else if (seven.innerHTML===x_OR_o && eight.innerHTML === x_OR_o && nine.innerHTML === x_OR_o) {
    h2.innerHTML = 'THE WINNER IS : '+x_OR_o
    h2.style.color = 'red';
  } else if (one.innerHTML===x_OR_o && four.innerHTML === x_OR_o && seven.innerHTML === x_OR_o) {
    h2.innerHTML = 'THE WINNER IS : '+x_OR_o
    h2.style.color = 'red';
  } else if (two.innerHTML===x_OR_o && five.innerHTML === x_OR_o && eight.innerHTML === x_OR_o) {
    h2.innerHTML = 'THE WINNER IS : '+x_OR_o
    h2.style.color = 'red';
  } else if (three.innerHTML===x_OR_o && six.innerHTML === x_OR_o && nine.innerHTML === x_OR_o) {
    h2.innerHTML = 'THE WINNER IS : '+x_OR_o
    h2.style.color = 'red';
  } else if (one.innerHTML===x_OR_o && five.innerHTML === x_OR_o && nine.innerHTML === x_OR_o) {
    h2.innerHTML = 'THE WINNER IS : '+x_OR_o
    h2.style.color = 'red';
  } else if (seven.innerHTML===x_OR_o && five.innerHTML === x_OR_o && three.innerHTML === x_OR_o) {
    h2.innerHTML = 'THE WINNER IS : '+x_OR_o
    h2.style.color = 'red';
  } else {
    xo = !xo
  }
}

// target - X O - to the boxes

function one_one() {
  one.innerHTML = xo ? x : o
  check_winner(xo ? x : o)
}
function two_two() {
  two.innerHTML = xo ? x : o
  check_winner(xo ? x : o)
}
function three_three() {
  three.innerHTML = xo ? x : o
  check_winner(xo ? x : o)
}
function four_four() {
  four.innerHTML = xo ? x : o
  check_winner(xo ? x : o)
}
function five_five() {
  five.innerHTML = xo ? x : o
  check_winner(xo ? x : o)
}
function six_six() {
  six.innerHTML = xo ? x : o
  check_winner(xo ? x : o)
}
function seven_seven() {
  seven.innerHTML = xo ? x : o
  check_winner(xo ? x : o)
}
function eight_eight() {
  eight.innerHTML = xo ? x : o
  check_winner(xo ? x : o)
}
function nine_nine() {
  nine.innerHTML = xo ? x : o
  check_winner(xo ? x : o)
}
