export default async function mengupdateEvent (data) {
    try {
        const res = await fetch('http://localhost:3000/admin/updateevent', {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json',
            },
            credentials : 'include',
            body : JSON.stringify(data)
            }
        )

        if (!res.ok) {
            throw new Error('Gagal memperbarui data event')
        }

        const hasil = await res.json()

        return hasil
    } catch (e) {
        throw e
    }
} 