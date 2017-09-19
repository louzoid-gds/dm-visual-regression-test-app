module.exports = function (casper, scenario) {

  var usr = scenario.username;
  var cookiePath = "cookies.json";
  var pwd = "Password1234";

  if (casper.getCurrentUrl() === scenario.url) {
    return;
  }

  casper.waitForSelector('input[name="email_address"]', function () {
    this.sendKeys('input[name="email_address"]', usr);
  });

  casper.then(function () {
    casper.mouseEvent('click', 'input[name="password"]');
  });

  casper.then(function () {
    casper.waitForSelector('input[name="password"]', function () {
      this.sendKeys('input[name="password"]', pwd);
      this.mouseEvent('click', '.button-save'); //should redirect you to desired page
    });
  });

  casper.then(function () {
    casper.echo('Saving new cookie(s)', 'INFO');
    var cookiesObj = {};
    if (fs.exists(cookiePath)) {
      cookiesObj = JSON.parse(fs.read(cookiePath));
    }
    cookiesObj[usr] = casper.page.cookies;
    var cookies = JSON.stringify(cookiesObj, null, 2);
    fs.write(cookiePath, cookies, 'w');
  });


};
