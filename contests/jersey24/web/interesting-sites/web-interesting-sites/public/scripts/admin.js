const submitInteresting = document.getElementById('form-submit-i');
const submitNotInteresting = document.getElementById('form-submit-ni');
const site = document.getElementById('site');
const siteTitle = document.getElementById('site-title');

const axiosInstance = axios.create({
  withCredentials: true,
});


const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const config = {
  headers: {
    'Authorization': 'Bearer ' + getCookie('auth')
  }
}

if (site !== null) {
  let title = null;

  axiosInstance.get(site.textContent).then((res) => {
    title = res.data.match(/<title[^>]*>([^<]+)<\/title>/);

    if (title !== null) {
      siteTitle.textContent = title[1];
    } else {
      siteTitle.textContent = 'Could not get site title.';
    }
  })
}

if (submitInteresting !== null) {
  submitInteresting.addEventListener('click', () => {
    axios.post('/api/secure/interesting', null, config);
    location.reload();
  });
}

if (submitNotInteresting !== null) {
  submitNotInteresting.addEventListener('click', () => {
    axios.post('/api/secure/not-interesting', null, config);
    location.reload();
  });
}
