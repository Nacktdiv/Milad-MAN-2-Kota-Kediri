export default async function mencariEvent (query) {
    try {

        const res = await fetch(`http://localhost:3000/admin/event?search=${query}`, {
            method : 'GET',
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include'
        })

        if(!res.ok){
            const errorData = await res.json();
            throw new Error(errorData.message || "Gagal melakukan pencarian event");
        }

        const hasil = await res.json();
        return hasil
    } catch (e) {
        throw e
    }
}