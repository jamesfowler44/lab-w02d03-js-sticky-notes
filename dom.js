// JavaScript goes here
console.log('hello world')

var button = document.querySelector('button');

button.addEventListener('click', function(event) {
    var newNote = document.createElement('div');
    var newSpan = document.createElement('span');
    var newP = document.createElement('p')
    newSpan.textContent = 'x';
    newSpan.addEventListener('click', removeX);
    newNote.classList.add('stickyNote');
    newNote.appendChild(newSpan);
    newNote.appendChild(newP);
    newP.setAttribute('contenteditable', 'true');
    console.log(newNote)
    document.body.appendChild(newNote);
    counter();
});

var removeX = function(event) {
  this.parentNode.remove();
  counter();
}

var count = 0;
var counter = function() {
  count = document.querySelectorAll('.stickyNote').length;
  // console.log(document.querySelectorAll('.stickyNote').length);
  var turtles = document.getElementById('count');
  turtles.textContent = count;
}





























