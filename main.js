const p = document.querySelector('p')
const textarea = document.querySelector('textarea')

textarea.addEventListener('keyup', (e) => {
  p.innerHTML = textarea.value;
  textarea.style.height = 'auto';
  let scHeight = e.target.scrollHeight;
  textarea.style.height = `${scHeight}px`;

  if (textarea.offsetHeight < 100) textarea.scroll;
})

