import { useEffect, useState } from "react"
import Loading from "../Shared/Loading";

const useToken = user => {

    // console.log(user);
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const name = user?.user?.displayName;

        const currentuser = {
            email: email,
            name: name
        }

        if (email) {
            // console.log(email);
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentuser)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log('data inside useToken', data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }

    }, [user]);
    return [token];
}
export default useToken;