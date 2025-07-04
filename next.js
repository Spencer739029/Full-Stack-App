window.onload = () => {

  const textarea = document.getElementById("autoExpand");
  textarea.addEventListener('input', () => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  });
};