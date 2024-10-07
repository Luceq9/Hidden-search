const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  console.log('hello');

  const search = document.querySelector('.search');
  search.classList.toggle('active');
});
