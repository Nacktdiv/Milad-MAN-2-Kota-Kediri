export default async function membuatEvent (data) {
    try {
        const res = await fetch('http://localhost:3000/admin/inputevent', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(data)
        })

        if(!res.ok){
            const errorData = await res.json()
            throw new Error(errorData.message || "Gagal Membuat Event")
        }

        const hasil = await res.json()
        return hasil
    } catch (e) {
        throw e
    }
}
