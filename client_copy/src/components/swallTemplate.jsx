import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

// Template Notifikasi Sukses (Cocok untuk Login/Simpan)
export const showSuccess = (title, text) => {
  return MySwal.fire({
    icon: 'success',
    title: title || 'Berhasil!',
    text: text || 'Aksi berhasil dilakukan',
    showConfirmButton: false,
    timer: 1500, // Hilang otomatis dalam 1.5 detik
    timerProgressBar: true,
    customClass: {
      popup: 'rounded-2xl', // Agar sesuai dengan desain Sidebar/Dashboard kamu
    }
  });
};

// Template Notifikasi Error
export const showError = (title, text) => {
  return MySwal.fire({
    icon: 'error',
    title: title || 'Oops...',
    text: text || 'Terjadi kesalahan!',
    confirmButtonColor: '#3b82f6', // Warna biru (sesuai tema kamu)
  });
};

// Template Konfirmasi (Cocok untuk Logout/Hapus)
export const showConfirm = (title, text) => {
  return MySwal.fire({
    title: title || 'Apakah Anda yakin?',
    text: text || "Data tidak bisa dikembalikan!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#ef4444', // Merah
    cancelButtonColor: '#64748b',  // Slate
    confirmButtonText: 'Ya, Lanjutkan!',
    cancelButtonText: 'Batal'
  });
};