const {event, user, pendaftaran, pembayaran} = require('../models/setup'); 
const resFormat = require('../models/resformat');

const mengetahuiEvent = async (res, id_user) => {
    try {
        const eventData = await event.findAll();
        const userData = await user.findOne({
            include:[{
                model: pendaftaran,
                include:[{
                    model:pembayaran
                }]
            }],
            where:{id_user:id_user}})
        resFormat(res, 200, [eventData,userData], "DATA PESERTA BERHASIL DIAMBIL");
    } catch (err) {
        resFormat(res, 500, {}, "Error fetching peserta data: " + err.message);
    }
}

module.exports = mengetahuiEvent