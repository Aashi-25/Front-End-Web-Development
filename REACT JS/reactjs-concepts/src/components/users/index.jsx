import React, { useState, useEffect } from "react";

export default function Users () {
    const [usersList , setUsersList] = useState([]);
    const [pending , setPending] = useState(false);

    async function fetchAllUsers() {
        try {
            setPending(true);
            const apiResponse = await fetch('https://dummyjson.com/users');
            const result = await apiResponse.json();

            console.log(result);

            if(result?.users) {
                setUsersList(result?.users);
                setPending(false);
            } else {
                setUsersList([])
            }

        } catch(error) {
            console.log(error);
        }
    }

    // useEffect(() => {
    //     fetchAllUsers()
    // },[]);

    console.log(usersList);

    if(pending) return <h1>Fetching users...please wait!</h1>

    function handleFetchListOfUsers(){
        fetchAllUsers();
    }

    return (
        <div>
            <h1>All Users Lists</h1>
            <button onClick = {handleFetchListOfUsers}>Fetch Users List</button>
            <ul>
                {
                    usersList && usersList.length > 0 ? usersList.map
                    (userItem => <li key = {userItem?.id}>
                        <p>{userItem?.firstName} {userItem.lastName}</p>
                    
                    </li>) : <h1>No users found! Please try again later.</h1>
                }
            </ul>
        </div>
    )
}