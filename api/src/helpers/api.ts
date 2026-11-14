export const fetcher = (url: string) =>
  fetch(`http://localhost:3000${url}`).then((response) => response.json());

export const api = (url: string, options: RequestInit = {}) =>
  fetch(`http://localhost:3000${url}`, options).then((response) =>
    response.json(),
  );
