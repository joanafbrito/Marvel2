export const getData = () => {
    // let url = 
    // let publicKey = 9b29a8325371bc7becbf4068fd0948eb;

    return fetch()
           .then(res => res.ok ? res.json() : console.log(res))
           .then(data => data)
}