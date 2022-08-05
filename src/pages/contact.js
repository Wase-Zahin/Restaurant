const contact = () => {
    const msg = document.createElement('div');
    msg.classList.add('msg');
    msg.innerHTML = 'Feel free to <br> Reach us out <br> anytime, anyday!'
    document.body.appendChild(msg);

    const phn = document.createElement('div');
    phn.classList.add('phn');
    document.body.appendChild(phn);

    const phnIcon = document.createElement('div');
    phnIcon.classList.add('phnIcon');
    phn.appendChild(phnIcon);

    const phnNum = document.createElement('div');
    phnNum.classList.add('phnNum');
    phnNum.innerHTML = '02****67557'
    phn.appendChild(phnNum);

    const mail = document.createElement('div');
    mail.classList.add('mail');
    document.body.appendChild(mail);

    const mailIcon = document.createElement('div');
    mailIcon.classList.add('mailIcon');
    mail.appendChild(mailIcon);

    const mailID = document.createElement('div');
    mailID.classList.add('mailID');
    mailID.innerHTML = 'randomperson@gmail.com'
    mail.appendChild(mailID);

    const socialMedia = document.createElement('div');
    socialMedia.classList.add('socialMedia');
    document.body.appendChild(socialMedia);

    const facebook = document.createElement('div');
    facebook.classList.add('facebook');
    socialMedia.appendChild(facebook);

    const weChat = document.createElement('div');
    weChat.classList.add('weChat');
    socialMedia.appendChild(weChat);

    const whatsApp = document.createElement('div');
    whatsApp.classList.add('whatsApp');
    socialMedia.appendChild(whatsApp);
}

export default contact;

