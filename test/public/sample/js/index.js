$(function() {
  var $body = $('body');

  var panel = new G.Panel.Base();

  var input = new G.Input.Text();
  input.$el.val('Active');
  panel.$el.append(input.el);

  panel.$el.append('<br />');

  var input_invalid = new G.Input.Text();
  input_invalid.$el.val('Inactive')
  input_invalid.disable(true);
  panel.$el.append(input_invalid.el);

  panel.$el.append('<br />');

  var button_1 = new G.Input.Button();
  button_1.setText('Active');
  panel.$el.append(button_1.el);

  var button_2 = new G.Input.Button();
  button_2.setText('Inactive')
  button_2.disable(true);
  panel.$el.append(button_2.el);

  var buttons = new G.Input.ToggleButtons({
    buttons: ['First', 'Second', 'Third']
  });

  panel.$el.append(buttons.el);

  $body.append(panel.el);
})
