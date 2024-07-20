import Loding from "../Components/Loding"
import Error from "../Components/Error"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"



function SingleUser() {

    const [users, setUsers] = useState([])
    const [error, setError] = useState(false)
    const [loding, setLoding] = useState(false)
    const { user_id } = useParams();

    async function fetchAndUpdateApi() {
        setLoding(true)
        try {


            let response = await fetch(`https://reqres.in/api/users/${user_id}`)
            let finalResponse = await response.json()
            setUsers(finalResponse)
            setLoding(false)


        } catch (error) {
            setError(true)
            setLoding(false)


        }

    }

    useEffect(() => {
        fetchAndUpdateApi()
    }, [user_id])



    if (loding) return <Loding />;
    if (error) return <Error />;

    return (
        <>
            <h1>Single User Page</h1>
            {users && (

                <div style={{ margin: "25px", border: "1px solid black" }}>
                    <img src={users.avatar} alt={users.first_name} />
                    <h5>
                        Name : {users.first_name}
                        {users.last_name}
                    </h5>
                    <h5>Email : {users.email}</h5>
                </div>

            )}

        </>

    );
};



export default SingleUser