

import customeError from '../utils/customError.js';

export const getAgenda = (url) =>{

    return fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => error)

}