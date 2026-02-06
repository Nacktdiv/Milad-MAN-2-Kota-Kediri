export default async function register (data) {
    try {
        const res =  await fetch('http://localhost:3000/register',{
                        method : 'POST',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body : JSON.stringify(data)
                    })

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || "Gagal registrasi");
        }

        const hasil = await res.json()
        return hasil
    } catch (e) {
        throw e
    }
}
