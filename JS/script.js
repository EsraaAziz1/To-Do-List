let inputBox = document.getElementById('input-box')
let listContainer = document.getElementById('list-container')

function addTask() {
  if (inputBox.value === '' || inputBox.value === undefined) {
    alert('You Must write Something!')
  }
  else {
    let li = document.createElement('li') // كريت ليسته ضيفلي فيها التاسكات اللي هتتعمل
    li.innerHTML = inputBox.value //  بعد ما تكتب تاسك جديد في الانبوت ضيفهولي في الليسته الجديده
    listContainer.appendChild(li)
    let span = document.createElement('span')//createElement()-->لو عاوزين نضيف حاجه HTML
    span.innerHTML = '\u00d7';
    li.appendChild(span)
  }
  inputBox.value = ''
  saveData()
}

listContainer.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked')
    saveData()
  }
  else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove()
    saveData()
  }
}, false)

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML)
}
function showData() {
    listContainer.innerHTML = localStorage.getItem('data')
}
showData()