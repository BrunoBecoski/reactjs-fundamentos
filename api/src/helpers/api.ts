const fetcher = (url: string) =>
  fetch(`http://localhost:3000${url}`).then((response) => response.json());

export default fetcher;
