export function getUsers() {

    return fetch ('https://reqres.in/api/users')
           .then((res) => res.json())
           
        
    
}