import { useEffect, useState } from "react"


const useAdmin = (user) => {
    console.log('i am from useadmin', user);
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:5000/admin/${email}`, {
                method: "GET",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            })
                .then(res => res.json()
                    .then(data => {
                        console.log(data);
                        setIsAdmin(data.admin)

                    }))
        }


    }, [user])
    return [isAdmin]
}
export default useAdmin