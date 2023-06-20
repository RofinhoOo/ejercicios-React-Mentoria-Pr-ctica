import { useState, useEffect } from "react";
import { getUsers } from '../services/getUsers';

export function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
       getUsers().then((fetchUsers) => setUsers(fetchUsers))
    },[]);
    console.log(users);



    return(
        <h1>Hola</h1>
    )
};