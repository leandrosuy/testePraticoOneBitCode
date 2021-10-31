const { Pool } = require('pg')
const nodemailer = require('nodemailer')
const SMTP_CONFIG = require('./nodemailer');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '@lodj21#',
    database: 'emails',
    port: '5432'
});

const trasporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass
    },
    tls: {
        rejectUnauthorized: false,
    }
})

const getEmails = async (request, response) => {
    const resp = await pool.query('SELECT * FROM emails');
    console.log(resp.rows);
    response.json(resp.rows)
}

const createEmail = async (request, response) => {
    const { email } = request.body;
    const resp = await pool.query('INSERT INTO  emails (email) VALUES ($1)', [email]);
    console.log(resp)
    sendEmail(email)
    response.json({ message: 'Cadastrado com sucesso! ' });
}

async function sendEmail(email) {
    const mailSend = await trasporter.sendMail({
        subject: 'Parabéns!!!',
        text: 'Parabéns, Agora você e assinante da nossa Newslette, prepare-se para Notícias semanas de muito conhecimento.',
        from: 'Leandro Dantas <leandrosuy@gmail.com',
        to: [`${email}`]
    })

    console.log(mailSend)
}

module.exports = {
    getEmails,
    createEmail,
    sendEmail
}