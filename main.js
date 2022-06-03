// var data = {
//   monday: [],
//   tuesday: [],
//   wednesday: [],
//   thursday: [],
//   friday: [],
//   saturday: [],
//   sunday: []
// };

var data = {
  view: 'add-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var $addEntryButton = document.querySelector('.add-entry-button');
var $modal = document.querySelector('.modal');
var $closeButton = document.querySelector('.close');
var $overlay = document.querySelector('.overlay');
var $form = document.querySelector('form');
// var $weekday = document.querySelector('select option:checked');
// var $timeOfDay = document.querySelector('.time');
// var $taskDescription = document.querySelector('#description');
// var mockTable = document.querySelector('.mock-table');
// var $options = document.querySelectorAll('option');
// var $mondayButton = document.querySelector('.monday');
// var $tuesdayButton = document.querySelector('.tuesday');
// var $wednesdayButton = document.querySelector('.wednesday');
// var $thursdayButton = document.querySelector('.thursday');
// var $fridayButton = document.querySelector('.friday');
// var $saturdayButton = document.querySelector('.saturday');
// var $sundayButton = document.querySelector('.sunday');

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
  // var entry = {
  //   day: $form.elements.day.value,
  //   time: $form.elements.time.value,
  //   description: $form.elements.description.value,
  //   entryId: data.nextEntryId
  // };

  var emptyObject = {};
  emptyObject.day = $form.date.value;
  emptyObject.time = $form.time.value;
  emptyObject.description = $form.description.value;
  data.entries.unshift(emptyObject);
  // addEntry();
  // mockTable.prepend(createTable(emptyObject));
  $form.reset();
  data.nextEntryId++;
});

// function addEntry(event) {
//   var newTask = {};
//   newTask.date =
//   newTask.time = $timeOfDay.value;
//   newTask.description = $taskDescription.value;
//   data[$weekday.value].push(newTask);
// }

var dataJSON = localStorage.getItem('Dates');
if (dataJSON !== null) {
  data = JSON.parse(dataJSON);
}
window.addEventListener('beforeunload', function (event) {
  var todosJSON = JSON.stringify(data);
  localStorage.setItem('Dates', todosJSON);
});

// function createTable(entry) {
//   var trFirst = document.createElement('tr');
//   var tdFirst = document.createElement('td');
//   var tdFirstSecond = document.createElement('td');

//   table.appendChild(thead);
//   thead.appendChild(trHead);
//   trHead.appendChild(thHeadOne);
//   trHead.appendChild(thHeadTwo);

//   tbody.appendChild(trFirst);
//   trFirst.appendChild(tdFirst);
//   trFirst.appendChild(tdFirstSecond);

//   return trFirst;
//   // mockTable.appendChild(table);
// }
