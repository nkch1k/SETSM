/*Start*/ 
const nodemailer = require('nodemailer')

let testEmailAccount =  nodemailer.createTestAccount()

let transporter = nodemailer.createTransport({
    host :	'imap.ethereal.email',
    port :	587, /* 587 is default port*/ 
    auth: {
        user: 'test@mail.mail',
        pass: '	gRTsutrmjVJ5ejfq8z'
    },
})

/*Transporter stores SMTP data 
      host , port , secure , auth
  */




 let result =  transporter.sendMail({
    from: '"someone" <test@mail.mail>',
    to: 'test@mail.mail',
    subject: 'Message from me',
    text: 'This message was sent from Naum.',
    html:
      'This <i>message</i> was sent from <strong>Naum/strong> server.',
  })      



  console.log(result) /*You can delete this*/



    /*FOR GMAIL SERVER ----> 
    let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword',
  },
})
  */ 




  transporter.sendMail({
      from: '"Someone" <test@mail.mail>', /*From*/
      to: 'test@mail.mail', /*mail to? */
      subject: 'Attachments', /*You can choose any subject */
      text: 'Text',
      html: 'some text.',
      attachments: [                                                       /* You can change attachments */
        { filename: 'filename.txt', path: '/assets/files/' },        
        {
          filename: 'filename.txt',
          content: 'Message.',
        },
        { path: 'data:text/plain;base64,QmN3JN43JNSD=' },
        {
          raw: `
              Content-Type: text/plain
              Content-Disposition: attachment;
    
              Message from file.
            `,
        },
      ],
  })
  

/*End*/ 


/*Free SMTP service  --------------> https://ethereal.email/ */