$(function() {
  var $body = $('body');

  var panel = new G.Panel.Base();

  var input = new G.Input.Text();

  panel.$el.append(input.el);

  $body.append(panel.el);
})
