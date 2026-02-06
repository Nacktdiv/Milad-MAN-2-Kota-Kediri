const { Sequelize, DataTypes } = require('sequelize');
const env = require('dotenv');
env.config();

const DB_NAME = process.env.DB_NAME || 'miladmantsani';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASS = process.env.DB_PASS || '';
const DB_HOST = process.env.DB_HOST || '127.0.0.1'

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: 'mysql', // Tentukan dialek database
    logging: false, // Set ke true jika Anda ingin melihat query SQL yang dijalankan Sequelize
    pool: { // Pengaturan Pool Koneksi (Opsional, tapi disarankan untuk aplikasi Express)
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

async function connectDB() {
    try {
        await sequelize.authenticate();
        console.log('✅ Koneksi ke database berhasil.');
    } catch (error) {
        console.error('❌ Gagal terhubung ke database:', error.message);
        process.exit(1); 
    }
}

module.exports = {sequelize, DataTypes, connectDB};