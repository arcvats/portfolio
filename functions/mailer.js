const sgMail = require("@sendgrid/mail");

function validate(data) {
  return (
    data.email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) && data.message
  );
}

exports.handler = function(event, context, callback) {
    const data = JSON.parse(event.body);
  if (validate(data)) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: "archit5793@gmail.com",
      from: data.email,
      subject: data.name || "Anonymous",
      text: data.message
    };
    sgMail.send(msg);
    callback(null, {
      statusCode: 200,
      body: "Thankyou!"
    });
  } else {
    callback(null, {
      statusCode: 400,
      body: "Validation Failed."
    });
  }
};
