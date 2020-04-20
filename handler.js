'use strict';

function getLocalGreeting(language) {
  switch(language) {
    case "en":
      return "Hello!";
    case "es":
      return "¡Hola!";
    case "ru":
      return "Привет!";
    default:
      return "👋";
  }
}

function pickLocale() {
  const languages = ["en", "es", "cn", "fr", "ru"];
  return languages [Math.floor(Math.random() * languages.length)];
}

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: getLocalGreeting(pickLocale()),
        // input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
