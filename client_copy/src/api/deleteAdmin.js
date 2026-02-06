export default async function deleteAdminEvent (event) {
    try {
        const res = await fetch('http://localhost:3000/admin/deleteevent', {
            method:'DELETE',
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(event)
        })

        if(!res.ok) {
            const errorData = await res.json()
            throw new Error (errorData.message || "Gagal Menghapus Event")
        }


        const hasil = await res.json()
        return hasil
    } catch (e) {
        throw e
    }
}