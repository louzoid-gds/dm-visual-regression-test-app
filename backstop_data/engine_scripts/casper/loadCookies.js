var fs = require('fs');

module.exports = function (casper, scenario) {
  var cookies = [];
  var cookiePath = "cookies.json"; //should be config thing
  var loginAs = scenario.username;

  fs.open(cookiePath, 'w+', function (err, fd) {
    if (err) {
      return;
    }
    var cookiesObj = JSON.parse(fd);
    cookies = cookiesObj[loginAs];
    casper.echo('We have cookies on file so will try to use those', 'INFO');
    casper.page.cookies = cookies;
  });
  
  //casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36');
};
