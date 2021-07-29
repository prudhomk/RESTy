
// eslint-disable-next-line max-len
async function postData(url, radioValue, data = {}) {

  const response = await fetch(`${url}`, {
    method: `${radioValue}`,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(`${data}`)
  });
  return response.json();
}

postData()
  .then(data => {
    console.log(data);
  });

// eslint-disable-next-line max-len
//Object in local storage with the information, pull it out of storage and update state to repopulate values