export const getSolutions = async (tubes) => {
  const url = "http://localhost:7878/post";
  const body = {
    tubes: tubes,
  }
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
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
      alert(data["message"]);
    })
    .catch(error => {
      const errorMessage = "There was a problem with the fetch operation:"
      console.error(errorMessage, error);
      alert(errorMessage);
    });

}
