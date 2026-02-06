async function memperbaruiDataUser (data) {
    try {
        const res = await fetch('http://localhost:3000/peserta/perbaruidata', {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify(data)
        })

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || "Gagal memperbarui data user");
        }

        const hasil = await res.json()
        return hasil
    } catch(e) {
        throw e
    }
}

async function memperbaruiDataPendaftaran (data) {
    try {
        const res = await fetch('http://localhost:3000/peserta/pendaftaran/perbaruidata', {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify(data)
        })

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || "Gagal memperbarui data pendaftaran");
        }

        const hasil = await res.json()
        return hasil
    } catch(e) {
        throw e
    }
}

async function memperbaruiDataPembayaran(data) {
    try {
        const formData = new FormData();

        console.log()

        if(data.bukti_pembayaran){

            formData.append('bukti_pembayaran', data.bukti_pembayaran);
        }

        if (data.id_pendaftaran) {
            formData.append('id_pembayaran', data.id_pembayaran);
        }

        if(data.metode_pembayaran) {
            formData.append('metode_pembayaran', data.metode_pembayaran)
        }

        // 4. Kirim ke server
        const res = await fetch('http://localhost:3000/peserta/pembayaran/perbaruidata', {
            method: 'PATCH',
            credentials: 'include', 
            body: formData
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || "Gagal memperbarui data bukti pembayaran");
        }

        const hasil = await res.json();
        return hasil;

    } catch (e) {
        throw e;
    }
}

export {memperbaruiDataUser, memperbaruiDataPendaftaran, memperbaruiDataPembayaran}