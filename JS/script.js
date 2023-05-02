// just display array
const awesomebookcontainer = document.querySelector('.awesome-book');

const div = document.createElement('div');
div.className = 'book-list';
awesomebookcontainer.appendChild(div);
// parc data from local storage
const storage = JSON.parse(localStorage.getItem('Awesome_Books'));

if (storage !== null) {
  for (let x = 0; x < storage.length; x += 1) {
    const eachbook = document.createElement('form');
    eachbook.className = 'each-book';
    div.appendChild(eachbook);
    const p1 = document.createElement('p');
    p1.innerHTML = storage[x].title;
    eachbook.appendChild(p1);

    const p2 = document.createElement('p');
    p2.innerHTML = storage[x].author;
    eachbook.appendChild(p2);

    // remove button
    const btn = document.createElement('button');
    btn.id = x;
    btn.innerHTML = 'Remove';
    eachbook.appendChild(btn);

    const hr = document.createElement('hr');
    eachbook.appendChild(hr);

    btn.addEventListener('click', () => {
      const Exitlocal = JSON.parse(localStorage.getItem('Awesome_Books'));
      Exitlocal.splice(x, 1);
      localStorage.setItem('Awesome_Books', JSON.stringify(Exitlocal));
    });
  }
}

// Add new book
const newdiv = document.createElement('div');
newdiv.className = 'add-new-book';
awesomebookcontainer.appendChild(newdiv);
const form = document.createElement('form');
newdiv.appendChild(form);
const txt1 = document.createElement('input');
txt1.id = 'title';
txt1.type = 'text';
txt1.required = true;
txt1.placeholder = 'Title';
form.appendChild(txt1);
const br = document.createElement('br');
form.appendChild(br);
const br2 = document.createElement('br');
form.appendChild(br2);

const txt2 = document.createElement('input');
txt2.id = 'author';
txt2.required = true;
txt2.type = 'text';
txt2.placeholder = 'Author';
form.appendChild(txt2);
const br3 = document.createElement('br');
form.appendChild(br3);
const br4 = document.createElement('br');
form.appendChild(br4);

const error = document.createElement('div');
error.className = 'error';
form.appendChild(error);

const addbtn = document.createElement('button');
addbtn.innerHTML = 'Add';
form.appendChild(addbtn);

addbtn.addEventListener('click', () => {
  const tit = document.getElementById('title');
  const titval = tit.value;
  const auth = document.getElementById('author');
  const authval = auth.value;
  if (titval !== '' || authval !== '') {
    const localcontect = localStorage.getItem('Awesome_Books');
    let bookList;
    if (localcontect === null) {
      bookList = [];
    } else {
      bookList = JSON.parse(localcontect);
    }
    bookList.push({ title: titval, author: authval });
    localStorage.setItem('Awesome_Books', JSON.stringify(bookList));
  } else {
    const diserror = document.querySelector('.error');
    diserror.innerHTML = 'Title or Auther can"t be empty';
  }
});
