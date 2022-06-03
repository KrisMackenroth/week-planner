// var data = {
//   monday: [],
//   tuesday: [],
//   wednesday: [],
//   thursday: [],
//   friday: [],
//   saturday: [],
//   sunday: []
// };

var $addEntryButton = document.querySelector('.add-entry-button');
var $modal = document.querySelector('.modal');
// var $closeButton = document.querySelector('.close');
var $overlay = document.querySelector('.overlay');
var $form = document.querySelector('form');
// var $weekday = document.querySelector('select.days');
// var $timeOfDay = document.querySelector('.time');
// var $taskDescription = document.querySelector('#description');

$addEntryButton.addEventListener('click', function (event) {
  event.target.className = 'open';
  $overlay.className = 'overlay on';
  $modal.className = 'show';
});

// $closeButton.addEventListener('click', function (event) {
//   event.target.className = 'close';
//   $overlay.className = 'overlay';
//   $modal.className = 'modal hide';
// });

$form.addEventListener('submit', function (event) {
  event.defaultPrevented();

});

// function addEntry(event) {
//   var newTask = {};
//   newTask.time = $timeOfDay;
//   newTask.description = $taskDescription;
//   data.$weekday.push(newTask);
// }
