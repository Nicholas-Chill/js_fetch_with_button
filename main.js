async function fetchData() {
    let result = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if(!result.ok) throw new Error('Server is not responding');
    return user = await result.json();
}

async function putDataOnWebpage() {
    let user = await fetchData();
    document.querySelector('#data').innerHTML = JSON.stringify(user);
}