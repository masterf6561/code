export const getSolutions = async (tubes) => {
  fetch('http://localhost:7878') // Replace 'http://localhost:3000/data' with your API endpoint
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data:', data);
    // Do something with the fetched data
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

}
