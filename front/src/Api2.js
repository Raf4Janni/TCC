const url = 'http://localhost:3333/';
export async function get(endponit) {

    console.log(endponit)
    const response = await fetch(url + endponit);
    const data = await response.json();
    return data;
}

export async function teste(method, endponit, data) {

    const response = await fetch(url + endponit, {

        method: method,
        body: JSON.stringify({ username: "example" }),
        headers: {
            'Content-Type': 'application/json',
          },
        body: data ? JSON.stringify(data) : null,
      });
};