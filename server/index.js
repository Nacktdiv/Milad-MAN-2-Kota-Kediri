const express = require('express')
const env = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const path = require('path')

// Required another files
const {connectDB} = require('./config/mysql');
const {authMiddleware, logout} = require('./middleware/auth');
const checkRoleMiddleware = require('./middleware/checkRole');
const uploadBuktiBayar = require('./middleware/multer')

const createUser = require('./controllers/userRegist');
const userLogin = require('./controllers/userLogin'); 

const mengetahuiEvent = require('./controllers/pesertaGET');
const {updatePeserta, updatePendaftaran, updatePembayaran} = require('./controllers/pesertaPATCH');
const {createPendaftaran, createPembayaran} = require('./controllers/pesertaPOST');


const uploadEvent = require('./controllers/adminPOST');
const {updateEvent, updateStatusPendaftaran, updateStatusPembayaran} = require('./controllers/adminPATCH');
const mencariEvent = require('./controllers/adminGET')
const menghapusEvent = require('./controllers/adminDELETE')
// END Required another files

// Initialize Origins
const app = express()

env.config()

app.use(cookieParser());

// Only Development

const options = {
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173', 
    
    credentials: true, 

    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(options));

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, "public")))

connectDB()


// Routes Sample
app.post('/register', (req,res) => {
    createUser(res, req.body)
})

app.post('/login', (req,res) => {
    userLogin(res, req.body)
})

app.get('/role', authMiddleware, (req, res) => {
    res.status(200).json(req.user.role)
})

app.get('/peserta', authMiddleware, checkRoleMiddleware(['peserta']), (req,res) => {
    mengetahuiEvent(res, req.user.id_user)
})

app.patch('/peserta/perbaruidata', authMiddleware, checkRoleMiddleware(['peserta']), (req,res) => {
    updatePeserta(res, req.user.id_user, req.body)
})

app.post('/peserta/pendaftaran', authMiddleware, checkRoleMiddleware(['peserta']), (req,res) => {
    createPendaftaran(res, req.user.id_user, req.body)
})

app.patch('/peserta/pendaftaran/perbaruidata', authMiddleware, checkRoleMiddleware(['peserta']), (req,res) => {
    updatePendaftaran(res, req.user.id_user, req.body)
})

app.post('/peserta/pembayaran', 
    authMiddleware, 
    checkRoleMiddleware(['peserta']), 
    (req, res, next) => {
        uploadBuktiBayar(req, res, (err) => {
            if (err) {
                if (err instanceof multer.MulterError) {
                    return res.status(400).json({ message: `Upload gagal: ${err.message}` });
                }
                return res.status(400).json({ message: err.message });
            }
            next();
        });
    }, 
    (req, res) => {
        const fileBaru = req.file ? req.file.filename : null;
        createPembayaran(res, fileBaru, req.body);
    }
);

app.patch('/peserta/pembayaran/perbaruidata', 
    authMiddleware, 
    checkRoleMiddleware(['peserta']), 
    (req, res, next) => {
        uploadBuktiBayar(req, res, (err) => {
            if (err) {
                if (err instanceof multer.MulterError) {

                    return res.status(400).json({ message: `Upload gagal: ${err.message}` });
                }
                return res.status(400).json({ message: err.message });
            }
            next();
        });
    }, 
    (req, res) => {
        const fileBaru = req.file ? req.file.filename : null;
        updatePembayaran(res, fileBaru, req.body);
    }
);

app.get('/admin', authMiddleware, checkRoleMiddleware(['admin']), (req,res) => {
    res.status(200).json("Selamat datang admin")
})

app.get('/admin/event', authMiddleware, checkRoleMiddleware(['admin']), (req,res) => {
    mencariEvent(res, req.query.search)
})

app.post('/admin/inputevent', authMiddleware, checkRoleMiddleware(['admin']), (req,res) => {
    uploadEvent(res, req.body)
})

app.patch('/admin/updateevent', authMiddleware, checkRoleMiddleware(['admin']), (req,res) => {
    updateEvent(res, req.body)
})

app.delete('/admin/deleteevent', authMiddleware, checkRoleMiddleware(['admin']), (req,res) => {
    menghapusEvent(res, req.body)
})

app.patch('/admin/pendaftaran/updatestatus', authMiddleware, checkRoleMiddleware(['admin']), (req,res) => {
    updateStatusPendaftaran(res, req.body.id_pendaftaran)
})

app.patch('/admin/pembayaran/updatestatus', authMiddleware, checkRoleMiddleware(['admin']), (req,res) => {
    updateStatusPembayaran(res, req.body.id_pembayaran)
})

app.post('/logout', authMiddleware, logout);


// Deploy Configuration
const __dist = path.join(__dirname, '/client/dist')

app.use(express.static(__dist))

app.get('*any', (req, res) => {
    res.sendFile(path.join(__dist, '/index.html' ))
})
// END Deploy Configuration

// END Routes Sample

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})