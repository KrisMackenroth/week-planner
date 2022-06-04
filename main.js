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
// var $weekday = document.querySelector('select');
// var $timeOfDay = document.querySelector('.time');
// var $taskDescription = document.querySelector('#description');
// var mockTable = document.querySelector('.mock-table');
// var $options = document.querySelectorAll('option');
// var $mondayButton = document.querySelector('button.monday');
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
// var $mondayView = document.querySelector('monday-container');
// var $tuesdayView = document.querySelector('tuesday-container');
// var $wednesdayView = document.querySelector('wednesday-container');
// var $thursdayView = document.querySelector('thursday-container');
// var $fridayView = document.querySelector('friday-container');
// var $saturdayView = document.querySelector('saturday-container');
// var $sundayView = document.querySelector('sunday-container');

// $mondayButton.addEventListener('click', makeMonday);

// function makeMonday() {
//   $mondayView.className = 'container monday-container';
//   $tuesdayView.className = 'container tuesday-container hide';
//   $wednesdayView.className = 'container wednesday-container hide';
//   $thursdayView.className = 'container thursday-container hide';
//   $fridayView.className = 'container friday-container hide';
//   $saturdayView.className = 'container saturday-container hide';
//   $sundayView.className = 'container sunday-container hide';
// }

// function makeTuesday() {
//   $mondayView.className = 'container monday-container hide';
//   $tuesdayView.className = 'container tuesday-container';
//   $wednesdayView.className = 'container wednesday-container hide';
//   $thursdayView.className = 'container thursday-container hide';
//   $fridayView.className = 'container friday-container hide';
//   $saturdayView.className = 'container saturday-container hide';
//   $sundayView.className = 'container sunday-container hide';
// }

// $tuesdayButton.addEventListener('click', makeTuesday);

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
//   event.preventDefault();
//   // var emptyObject = {};
//   var newTask = {};
//   newTask.time = $timeOfDay.value;
//   newTask.description = $taskDescription.value;
//   data[$weekday.value].push(newTask);
//   if ($weekday.value === 'monday') {
//     $mondayTable.appendChild(createTable(newTask));
//   } else if ($weekday.value === 'tuesday') {
//     $tuesdayTable.appendChild(createTable(newTask));
//   }
//   // data.monday.unshift(emptyObject);
//   // (createTable(data.monday));
//   // addEntry();
//   // mockTable.prepend(createTable(emptyObject));
//   $form.reset();
//   data.nextEntryId++;
// });

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

//   // temp.appendChild(trFirst);

//   trFirst.appendChild(tdFirst);
//   trFirst.textContent = entry.time;
//   trFirst.appendChild(tdFirstSecond);
//   tdFirstSecond.textContent = entry.description;
//   // mockTable.appendChild(table);
//   return trFirst;
// }

// // window.addEventListener('DOMContentLoaded', createWholeTable {

// // });

// // createTable(data.monday, $mondayTable);
// // createTable(data.tuesday, $tuesdayTable);
