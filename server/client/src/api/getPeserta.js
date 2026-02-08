
export default async function  getPesertaData () {
    try{
        const res = await fetch('http://localhost:3000/peserta', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include'
        })

        if(!res.ok){
            const errorData = await res.json()
            throw new Error(errorData.message || "Gagal Ambil Data Peserta Setelah Login")
        }

        const hasil = await res.json()
        return hasil
    } catch (e) {
        throw e
    }
}