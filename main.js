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
  addEntry();
});

function addEntry(event) {
  var newTask = {};
  newTask.time = $timeOfDay.value;
  newTask.description = $taskDescription.value;
  data[$weekday.value].push(newTask);
}

var dataJSON = localStorage.getItem('Dates');
if (dataJSON !== null) {
  data = JSON.parse(dataJSON);
}
window.addEventListener('beforeunload', function (event) {
  var todosJSON = JSON.stringify(data);
  localStorage.setItem('Dates', todosJSON);
});

// var mockTable = document.querySelector('.mock-table');

// function createTable(event) {
//   var table = document.createElement('table');
//   table.classList.add('table');
//   var thead = document.createElement('thead');
//   var tr = document.createElement('tr');
//   var thOne = document.createElement('th');
//   var timeText = document.createTextNode('Time');
//   thOne.appendChild(timeText);
//   var thTwo = document.createElement('th');
//   var descriptionText = document.createTextNode('Description');
//   tr.appendChild(thOne);
//   tr.appendChild(thTwo);

// var tbody = document.createElement('tbody');

// var newTr = document.createElement('tr');
// var newtd = document.createElement('td');
// var newtdText = document.createTextNode('');

//   thTwo.appendChild(descriptionText);
//   thead.appendChild(tr);
//   table.appendChild(thead);
//   mockTable.appendChild(table);
// }
