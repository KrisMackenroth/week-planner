var data = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: []
};

// var data = {
//   view: 'add-form',
//   entries: [],
//   editing: null,
//   nextEntryId: 1
// };

var $addEntryButton = document.querySelector('.add-entry-button');
var $modal = document.querySelector('.modal');
var $closeButton = document.querySelector('.close');
var $overlay = document.querySelector('.overlay');
var $form = document.querySelector('form');
var $weekday = document.querySelector('select.days');
var $timeOfDay = document.querySelector('.time');
var $taskDescription = document.querySelector('#description');
var mockTable = document.querySelector('.mock-table');

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
  var entry = {
    day: $form.elements.day.value,
    time: $form.elements.time.value,
    description: $form.elements.description.value,
    entryId: data.nextEntryId
  };

  addEntry();
  mockTable.prepend(createTable(entry));

  $form.reset();
  data.nextEntryId++;
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

function createTable(entry) {
  var table = document.createElement('table');
  table.classList.add('table');
  var thead = document.createElement('thead');
  var trHead = document.createElement('tr');
  var thHeadOne = document.createElement('th');
  thHeadOne.textContent = 'Time';
  var thHeadTwo = document.createElement('th');
  thHeadTwo.textContent = 'Description';

  var tbody = document.createElement('tbody');

  var trFirst = document.createElement('tr');
  var tdFirst = document.createElement('td');
  var tdFirstSecond = document.createElement('td');

  table.appendChild(thead);
  thead.appendChild(trHead);
  trHead.appendChild(thHeadOne);
  trHead.appendChild(thHeadTwo);

  tbody.appendChild(trFirst);
  trFirst.appendChild(tdFirst);
  trFirst.appendChild(tdFirstSecond);

  return table;
  // mockTable.appendChild(table);
}
