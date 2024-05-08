export const getSolutions = async (tubes) => {
  const url = "http://localhost:7878/post";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(tubes)
  };
  fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

}
