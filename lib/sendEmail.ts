import axios from 'axios';

const sendEmail = async (email: string, subject: string, message: string) => {
  return axios({
    method: 'post',
    url: '/api/send-mail',
    data: {
      email: email,
      subject: subject,
      message: message,
    },
  });
};

export default sendEmail;