async function membuatPendaftaran (data) {
    try {
        const res = await fetch('http://localhost:3000/peserta/pendaftaran', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify(data)
        })

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || "Gagal melakukan pendaftaran");
        }

        const hasil = await res.json()
        return hasil
    } catch(e) {
        throw e
    }
}

async function membuatPembayaran(data) {
    try {

        const formData = new FormData();

        if(data.bukti_pembayaran){
            formData.append('bukti_pembayaran', data.bukti_pembayaran);
        }

        if (data.id_pendaftaran) {
            formData.append('id_pendaftaran', data.id_pendaftaran);
        }

        if(data.metode_pembayaran) {
            formData.append('metode_pembayaran', data.metode_pembayaran)
        }

        // 4. Kirim ke server
        const res = await fetch('http://localhost:3000/peserta/pembayaran', {
            method: 'POST',
            credentials: 'include', 
            body: formData
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || "Gagal mengunggah bukti pembayaran");
        }

        const hasil = await res.json();
        return hasil;

    } catch (e) {
        throw e;
    }
}

export {membuatPendaftaran, membuatPembayaran}