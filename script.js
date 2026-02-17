const form = document.getElementById('recommendation-form');
const messageInput = document.getElementById('message');
const nameInput = document.getElementById('name');
const recommendationList = document.getElementById('recommendation-list');
const successDialog = document.getElementById('success-dialog');
const closeDialogButton = document.getElementById('close-dialog');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const message = messageInput.value.trim();
  if (!message) {
    return;
  }

  const name = nameInput.value.trim();
  const quote = document.createElement('blockquote');
  quote.textContent = name
    ? `"${message}" — ${name}`
    : `"${message}"`;

  recommendationList.appendChild(quote);
  form.reset();
  successDialog.showModal();
});

closeDialogButton.addEventListener('click', () => {
  successDialog.close();
});
