function apikey() {
  return PropertiesService.getScriptProperties().getProperty('API_KEY');
}

function findEmail(first_name, last_name, domain) {

  const url = `https://api.hunter.io/v2/email-finder?domain=${domain}&first_name=${first_name}&last_name=${last_name}&api_key=${apikey()}`
  const response = UrlFetchApp.fetch(url);
  const content = response.getContentText();
  const json = JSON.parse(content);

  if (json["data"]) {
    if (first_name === json["data"]["first_name"] || last_name === json["data"]["last_name"] || domain === json["data"]["sources"]["domain"]) {
      return json["data"]["email"];
    } else {
     return 'Email not found';
    }
  }
}
