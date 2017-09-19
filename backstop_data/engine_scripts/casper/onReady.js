module.exports = function(casper, scenario, vp) {
  console.log('SCENARIO> ' + scenario.label);
  //require('./clickAndHoverHelper')(casper, scenario);
  //require('./fillBuyerReqCreateFormHelper')(casper, scenario);
  require('./login')(casper, scenario);
  if (scenario.submitForm)
    require('./submitFormHelper')(casper, scenario);
};
