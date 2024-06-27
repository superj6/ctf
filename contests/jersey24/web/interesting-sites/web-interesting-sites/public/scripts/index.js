document.getElementById('submit-form').addEventListener('submit', (evt) => {
  evt.preventDefault();

  site = document.getElementById('form-url').value;

  axios.post('/api/submit-site', { 'site': site });
  location.reload();
});
