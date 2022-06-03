// // var data = {
// //   monday: [],
// //   tuesday: [],
// //   wednesday: [],
// //   thursday: [],
// //   friday: [],
// //   saturday: [],
// //   sunday: []
// // };

// var data = {
//   view: 'add-form',
//   monday: [],
//   tuesday: [],
//   wednesday: [],
//   thursday: [],
//   friday: [],
//   saturday: [],
//   sunday: [],
//   editing: null,
//   nextEntryId: 1
// };

// var $addEntryButton = document.querySelector('.add-entry-button');
// var $modal = document.querySelector('.modal');
// var $closeButton = document.querySelector('.close');
// var $overlay = document.querySelector('.overlay');
// var $form = document.querySelector('form');
// var $weekday = document.querySelector('select option:checked');
// var $timeOfDay = document.querySelector('.time');
// var $taskDescription = document.querySelector('#description');
// var mockTable = document.querySelector('.mock-table');
// var $options = document.querySelectorAll('option');
// var $mondayButton = document.querySelector('div.monday');
// var $tuesdayButton = document.querySelector('div.tuesday');
// var $wednesdayButton = document.querySelector('div.wednesday');
// var $thursdayButton = document.querySelector('div.thursday');
// var $fridayButton = document.querySelector('div.friday');
// var $saturdayButton = document.querySelector('div.saturday');
// var $sundayButton = document.querySelector('div.sunday');
// var $mondayTable = document.querySelector('tbody.monday');
// var $tuesdayTable = document.querySelector('tbody.tuesday');
// var $wednesdayTable = document.querySelector('tbody.wednesday');
// var $thursdayTable = document.querySelector('tbody.thursday');
// var $fridayTable = document.querySelector('tbody.friday');
// var $saturdayTable = document.querySelector('tbody.saturday');
// var $sundayTable = document.querySelector('tbody.sunday');

// $mondayButton.addEventListener('click', function (event) {

// });

// function clickDays(event) {

// }

// $addEntryButton.addEventListener('click', function (event) {
//   event.target.className = 'open';
//   $overlay.className = 'overlay on';
//   $modal.className = 'show';
// });

// $closeButton.addEventListener('click', function (event) {
//   event.target.className = 'close';
//   $overlay.className = 'overlay';
//   $modal.className = 'modal hide';
// });

// $form.addEventListener('submit', function (event) {
//   var entry = {
//     day: $form.elements.day.value,
//     time: $form.elements.time.value,
//     description: $form.elements.description.value,
//     entryId: data.nextEntryId

//   };

//   var emptyObject = {};
//   emptyObject.day = $form.date.value;
//   emptyObject.time = $form.time.value;
//   emptyObject.description = $form.description.value;
//   data.entries.unshift(emptyObject);
//   addEntry();
//   mockTable.prepend(createTable(emptyObject));
//   $form.reset();
//   data.nextEntryId++;
// });

// function addEntry(event) {
//   var newTask = {};
//   newTask.date =
//   newTask.time = $timeOfDay.value;
//   newTask.description = $taskDescription.value;
//   data[$weekday.value].push(newTask);
// }

// var dataJSON = localStorage.getItem('Dates');
// if (dataJSON !== null) {
//   data = JSON.parse(dataJSON);
// }
// window.addEventListener('beforeunload', function (event) {
//   var todosJSON = JSON.stringify(data);
//   localStorage.setItem('Dates', todosJSON);
// });

// function createTable(entry) {
//   var trFirst = document.createElement('tr');
//   var tdFirst = document.createElement('td');
//   var tdFirstSecond = document.createElement('td');

//   trFirst.appendChild(tdFirst);
//   trFirst.textContent = entry.time;
//   trFirst.appendChild(tdFirstSecond);
//   tdFirstSecond.textContent = entry.description;

//   return trFirst;
//   // mockTable.appendChild(table);
// }

// window.addEventListener('DOMContentLoaded', createWholeTable);
