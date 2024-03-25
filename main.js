const p = document.querySelector('p');
const textarea = document.querySelector('textarea');
const sumbitBtn = document.querySelector('input[type="submit"]');

const latin = [
  'a', 'e', 'i', 'o', 'u', 'b', 't', 'j', 'x', 'kh', 'd', 'r', 's', 'sh',
  'dh','c','g','f','q','k','l','m','n','h','w','y','aa','ee','ii','oo','uu', ' '
];
const osmanya = [
  '𐒖', '𐒗', '𐒘', '𐒙', '𐒚', '𐒁', '𐒂', '𐒃', '𐒄', '𐒅', '𐒆', '𐒇', '𐒈', '𐒉', '𐒊', '𐒋',
  '𐒌', '𐒍', '𐒎', '𐒏', '𐒐', '𐒑', '𐒒', '𐒔', '𐒓', '𐒕', '𐒛', '𐒜', '𐒕', '𐒝', '𐒓', ' '
];

sumbitBtn.addEventListener('click', () => {
  p.innerHTML = '';
  const value = textarea.value.split('');
  console.log(value)
  for (let i = 0; i < value.length; i++) {
    let char = value[i];

    if (char == '\n') {
      p.innerHTML += '</br>';
    }
    const combinedChar = char + value[i + 1];
    let index = latin.indexOf(combinedChar);
    // console.log(index);

    if (index !== -1) {
      p.innerHTML += osmanya[index];
      i++;
      continue;
    } else {
      // for (let j = 0; j < latin.length; j++) {
      //   if (latin[j] == char) {
      //     p.innerHTML += osmanya[j];
      //   } else {
      //     p.textContent += char;
      //   }
      index = latin.indexOf(char);
      if (index !== -1) {
        p.innerHTML += osmanya[index];
      } else {
        p.innerHTML += char;
      }
    }
  }
});

textarea.addEventListener('input', (e) => {
  textarea.style.height = 'auto';
  let scHeight = e.target.scrollHeight;
  textarea.style.height = `${scHeight}px`;
})

