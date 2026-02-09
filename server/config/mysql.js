const mysql2 = require('mysql2')
const { Sequelize, DataTypes } = require('sequelize');
const env = require('dotenv');
env.config();

const DB_NAME = process.env.DB_NAME || 'miladmantsani';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASS = process.env.DB_PASS || '';
const DB_HOST = process.env.DB_HOST || '127.0.0.1'
const DB_PORT = process.env.DB_PORT || '3306'

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    dialect:'mysql',
    dialectModule: mysql2,
    host: DB_HOST,
    port: DB_PORT,
    logging: false, // Set ke true jika Anda ingin melihat query SQL yang dijalankan Sequelize
    dialectOptions: { // Tambahkan jika pada saat production menyesuaikan ssl dan sertifikat penyedia
        ssl: {
            require: true,
            rejectUnauthorized: false // Wajib ditambahkan agar tidak error sertifikat di Aiven
        }
    },
    pool: { // Pengaturan Pool Koneksi (Opsional, tapi disarankan untuk aplikasi Express)
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

async function connectDB() {
    try {
        if (!DB_HOST || !DB_NAME || !DB_PASS || !DB_PORT || !DB_USER) {
            throw new Error("Variabel di env ada yang kosong! Cek file .env kamu.");
        }
        await sequelize.authenticate();
        if (process.env.NODE_ENV !== 'production') {
            await sequelize.sync({ alter: true });
        }
        console.log('✅ Koneksi ke database berhasil.');
    } catch (error) {
        console.error('❌ Gagal terhubung ke database:', error.message);
        process.exit(1); 
    }
}

module.exports = {sequelize, connectDB, DataTypes};