var data = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: []
};

var $addEntryButton = document.querySelector('.add-entry-button');
var $modal = document.querySelector('.modal');
var $closeButton = document.querySelector('.close');
var $overlay = document.querySelector('.overlay');
var $form = document.querySelector('form');
var $weekday = document.querySelector('select.days');
var $timeOfDay = document.querySelector('.time');
var $taskDescription = document.querySelector('#description');

$addEntryButton.addEventListener('click', function (event) {
  event.target.className = 'open';
  $overlay.className = 'overlay on';
  $modal.className = 'show';
});

$closeButton.addEventListener('click', function (event) {
  event.target.className = 'close';
  $overlay.className = 'overlay';
  $modal.className = 'modal hide';
});

$form.addEventListener('submit', function (event) {
  event.defaultPrevented();
  addEntry();
});

function addEntry(event) {
  var newTask = {};
  newTask.time = $timeOfDay.value;
  newTask.description = $taskDescription.value;
  data[$weekday.value].push(newTask);
  return data;
}

///
// var options = document.querySelectorAll('options');

// test.addEventListener('submit', function (event) {
//   var newObject = {};
//   if (options.getAttribute('value') === data.key) {
//     newObject.time = test.time.value;
//     newObject.descript = test.descript.value
//     data.key.unshift(newObject);
//   }
// })

var dataJSON = localStorage.getItem('Dates');
if (dataJSON !== null) {
  data = JSON.parse(dataJSON);
}
window.addEventListener('beforeunload', function (event) {
  var todosJSON = JSON.stringify(data);
  localStorage.setItem('Dates', todosJSON);
});
