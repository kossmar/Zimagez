const url = "https://api.imgur.com/3/gallery/hot"


export async function fetchData() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Client-ID 887969259c856a0");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const response = await fetch(url, requestOptions);
    const body = await response.json()
    const posts = body.data
    return posts
}