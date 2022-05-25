import { useEffect, useState } from "react"


const useAdmin = (user) => {
    // console.log('i am from useadmin', user);
    const [isAdmin, setIsAdmin] = useState(false)
    const [adminLoading, setAdminLoading] = useState(true)


    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:5000/admin/${email}`, {
                method: "GET",

            })
                .then(res => res.json()
                    .then(data => {
                        // console.log(data);
                        setIsAdmin(data.admin)
                        setAdminLoading(false)

                    }))
        }


    }, [user])
    return [isAdmin, adminLoading]
}
export default useAdmin