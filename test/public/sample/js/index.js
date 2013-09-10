$(function() {
  var $body = $('body');

  var panel = new G.Panel.Base();

  var input = new G.Input.Text();
  input.$el.val('Active');
  panel.$el.append(input.el);

  panel.$el.append('<br />');

  var input_invalid = new G.Input.Text();
  input_invalid.$el.val('Inactive').prop('disabled', true);
  panel.$el.append(input_invalid.el);

  panel.$el.append('<br />');

  var button_1 = new G.Input.Button();
  button_1.$el.text('Active');
  panel.$el.append(button_1.el);

  var button_2 = new G.Input.Button();
  button_2.$el.text('Inactive').prop('disabled', true);
  panel.$el.append(button_2.el);

  $body.append(panel.el);
})
