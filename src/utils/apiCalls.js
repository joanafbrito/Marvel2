export const getData = () => {
    let publicKey = '9b29a8325371bc7becbf4068fd0948eb';
    let url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}`

    return fetch(url)
        //    .then(res => res.ok ? res.json() : console.log(res))
        //    .then(data => data)
          
}