const sgMail = require("@sendgrid/mail");

function validate(body) {
  return (
    body.email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) && body.message
  );
}

exports.handler = function(event, context, callback) {
  if (validate(event.body)) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: "archit5793@gmail.com",
      from: event.body.email,
      subject: event.body.name || "Anonymous",
      text: event.body.message
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
