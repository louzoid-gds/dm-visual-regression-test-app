module.exports = function(casper, scenario, vp) {
  console.log('SCENARIO> ' + scenario.label);
  require('./login')(casper, scenario);
  if (scenario.submitForm)
    require('./submitFormHelper')(casper, scenario);
};
