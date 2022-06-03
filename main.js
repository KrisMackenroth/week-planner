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
var $closeButton = document.querySelector('.close');
var $overlay = document.querySelector('.overlay');

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
