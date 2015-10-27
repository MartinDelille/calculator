$(function() {
  var lastNumber = 0;
  var number = 0;
  var op = '';
  var updateDisplay = function() {
    if(number !== '')
      $('#number').text(number);
    else
      $('#number').text(lastNumber);
  };

  $('.ac').bind('click', function() {
    lastNumber = 0;
    number = 0;
    op = '';
    updateDisplay();
  });

  $('.ce').bind('click', function() {
    number = '';
    updateDisplay();
  });

  $('.nb').bind('click', function() {
    var digit = parseInt($(this).text());
    number = number * 10 + digit;
    updateDisplay();
  });

  $('.op').bind('click', function() {
    op = $(this).text();
    if(number !== '') {
      lastNumber = number;
      number = '';
    }
  });

  $('.equal').bind('click', function() {
    if(op === '%') {
      lastNumber = lastNumber % number;
    }
    else if(op === '÷') {
      lastNumber = lastNumber / number;
    }
    else if(op === '-') {
      lastNumber = lastNumber - number;
    }
    else if(op === 'x') {
      lastNumber = lastNumber * number;
    }
    else if(op === '+') {
      lastNumber = lastNumber + number;
    }
    number = '';

    updateDisplay();
  });

  updateDisplay();
});
