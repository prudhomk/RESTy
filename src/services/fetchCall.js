
// // eslint-disable-next-line max-len
// async function fetchCall(url, method, body = {}) {

//   const response = await fetch(`${url}`, {
//     method: `${method}`,
//     mode: 'cors',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(`${body}`)
//   });
//   return response.json();
// }

// fetchCall()
//   .then(body => {
//     console.log(body);
//   });

// // eslint-disable-next-line max-len
// export default fetchCall();

export const fetchCall = (url, method, body) => {
  if(method !== 'GET'){
    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
      .then(res => res.json());
  }

  return fetch(url)
    .then(res => res.json());
};
