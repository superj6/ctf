const axiosInstance = axios.create({
  withCredentials: true,
});

document.getElementById('login-form').addEventListener('submit', (evt) => {
  evt.preventDefault();

  username = document.getElementById('form-username').value;
  password = document.getElementById('form-password').value;

  axiosInstance.post('/api/login', { 'username': username, 'password': password }).then((res) => {
    console.log(res.data);
    document.cookie = 'auth=' + res.data.secretToken + ';path=/;SameSite=Strict';
    document.cookie = 'XSRF-TOKEN=' + res.data.adminToken + ';path=/;SameSite=Strict';
    window.location.replace('/admin');
  }).catch(() => {
    window.location.reload();
  })
});
