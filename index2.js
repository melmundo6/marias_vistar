function getParameterByName(name, url = window.location.href) {
    const params = new URL(url).searchParams;
    return params.get(name) || '';
}

const size = getParameterByName('size');

if (!size) {
    throw new Error('Image not found');
}
fetch(`https://marias.prodooh.com/api/getImage/${size}`)
    .then(response => {
        console.log('response: ', response);
        if (!response.ok) {
            console.error('Network response was not ok');
            return;
        }
        return response.json();
    })
    .then(data => {
        if (data.code == 400) {
            console.error('Image not found');
            return;
        }
        document.getElementById('image').src = data.message.img;
        console.log('data: ', data);
    })
    .catch(error => {
        console.error('Hubo un problema con la petición Fetch:', error);
    });

