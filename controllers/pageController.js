const nodemailer = require('nodemailer');

exports.getIndexPage = (req, res) => {
  console.log(req.session.userID);
  res.status(200).render('index', {
    page_name: 'index',
  });
};

exports.getAboutPage = (req, res) => {
  console.log(req.session.userID);
  res.status(200).render('about', {
    page_name: 'about',
  });
};

exports.getRegisterPage = (req, res) => {
  console.log(req.session.userID);
  res.status(200).render('register', {
    page_name: 'register',
  });
};

exports.getLoginPage = (req, res) => {
  console.log(req.session.userID);
  res.status(200).render('login', {
    page_name: 'login',
  });
};

exports.getContactPage = (req, res) => {
  console.log(req.session.userID);
  res.status(200).render('contact', {
    page_name: 'contact',
  });
};

exports.sendEmail = async (req, res) => {
  try {
    const outputMessage = `
  <h1>Mail Details </h1>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
  </ul>
  <h1>Message</h1>
  <p>${req.body.message}</p>
  `;

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'erenyusuf170@gmail.com', // gmail hesabı
        pass: 'vkddxbdupomtrwoq1', // gmail şifresi veya uygulama şifresi
      },
    });

    let info = await transporter.sendMail({
      from: 'Smart EDU Contact Form <erenyusuf170@gmail.com>', // gönderici adresi
      to: 'erenyusuf170@gmail.com', // alıcı listesi (1'den fazla olabilir)
      subject: 'Smart EDU Contact Form', // başlık alanı,
      html: outputMessage, // html body
    });

    console.log('message sent: %s', info.messageId);

    console.log('preview url: %s', nodemailer.getTestMessageUrl(info));

    req.flash('success', 'We received Your message succesful');

    res.status(200).redirect('/contact');
  } catch (err) {
    req.flash('error', `There was a problem while sending your message`);
    res.status(200).redirect('/contact');
  }
};
