import axios from "axios";

function generateQuote() {
  axios.get('https://type.fit/api/quotes')
  .then(res => {
    document.getElementById('quote').innerHTML = res.data[Math.floor(Math.random()*(1000 - 1) + 1)].text;
  })
}

export default generateQuote;