const awesomebooks = [{
  title: 'Java Programing',
  author: 'auther 1',
},
{
  title: 'fundamental of programming',
  author: 'Tanebom',
},
];
console.log(awesomebooks);
const awesomebookcontainer = document.querySelector('.awesome-book');
const div = document.createElement('div');
div.className = 'book-list';
awesomebookcontainer.appendChild(div);
for (let x = 0; x < awesomebooks.length; x++) {
  const eachbook = document.createElement('form');
  eachbook.className = 'each-book';
  div.appendChild(eachbook);
  const p1 = document.createElement('p');
  p1.innerHTML = awesomebooks[x].title;
  eachbook.appendChild(p1);

  const p2 = document.createElement('p');
  p2.innerHTML = awesomebooks[x].author;
  eachbook.appendChild(p2);

  // remove button
  const btn = document.createElement('button');
  btn.id = x;
  btn.innerHTML = 'Remove';
  eachbook.appendChild(btn);

  const hr = document.createElement('hr');
  eachbook.appendChild(hr);

  btn.addEventListener('click', () => {
    alert(awesomebooks[x].title);
    awesomebooks.splice(x, 1);
    console.log(awesomebooks);
  });
}

const newdiv = document.createElement('div');
newdiv.className = 'add-new-book';
awesomebookcontainer.appendChild(newdiv);
const form = document.createElement('form');
form.method = 'POST';
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
  if (!titval.empty) {
    awesomebooks.push(awesomebooks.title = titval, awesomebooks.author = authval);
    console.log(awesomebooks);
  } else {
    const diserror = document.querySelector('.error');
    diserror.innerHTML = 'Title or Text filed can"t be empty';
    form.appendChild(diserror);
  }
});
