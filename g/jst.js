this["JST"] = this["JST"] || {};

this["JST"]["modal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"modal\">\n  <div class=\"wrapper\">\n    <div class=\"content\"></div>\n  </div>\n</div>\n";
  });

this["JST"]["modal_message"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"message\">\n  <div class=\"title\"></div>\n  <div class=\"content\"></div>\n  <div class=\"buttons\"></div>\n</div>\n";
  });

this["JST"]["panel_tabs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"panel tabs\">\n  <div class=\"labels\"></div>\n  <div class=\"panels\"></div>\n</div>\n";
  });

this["JST"]["select"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"select\">\n  <button class=\"display\"></button>\n  <div class=\"options\"></div>\n</div>\n";
  });