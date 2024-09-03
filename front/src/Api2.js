const url = 'http://localhost:3333/';
export async function get(endponit, params) {

    console.log(endponit)
    const response = await fetch(url + endponit);
    const data = await response.json();
    console.log(data);
    return data;
}

//export function teste;