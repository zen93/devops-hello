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

module.exports.getLocalGreeting = getLocalGreeting;

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: getLocalGreeting(event.queryStringParameters.l ? event.queryStringParameters.l : "en"),
        // input: event.queryStringParameters,
      },
      null,
      2
    ),
  };
};
