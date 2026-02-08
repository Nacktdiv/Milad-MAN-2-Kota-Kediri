export async function login (data) {
    try {
        let res =  await fetch('http://localhost:3000/login',{
                        method : 'POST',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        credentials: "include",
                        body : JSON.stringify(data)
                    })

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || "Gagal login");
        }

        let hasil = await res.json()
        return hasil
    } catch (e) {
        throw e
    }
}

export async function checkRole () {
    try {
        let res =  await fetch('http://localhost:3000/role',{
                        method : 'GET',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        credentials: "include",
                    })

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || "Gagal login");
        }

        const hasil = await res.json()

        return hasil

    } catch (e) {
        throw e
    }
}