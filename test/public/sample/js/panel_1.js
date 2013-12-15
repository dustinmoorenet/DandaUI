var Panel1 = HumanView.extend({
  initialize: function() {

  },

  render: function() {
    var input = new G.Input.Text();
    input.$el.val('Active');
    this.$el.append(input.el);

    this.$el.append('<br />');

    var input_invalid = new G.Input.Text();
    input_invalid.$el.val('Inactive')
    input_invalid.disable(true);
    this.$el.append(input_invalid.el);

    this.$el.append('<br />');

    var button_1 = new G.Input.Button();
    button_1.setText('Active');
    this.$el.append(button_1.el);

    var button_2 = new G.Input.Button();
    button_2.setText('Inactive')
    button_2.disable(true);
    this.$el.append(button_2.el);

    var buttons = new G.Input.ToggleButtons({
      buttons: ['First', 'Second', 'Third']
    });

    this.$el.append(buttons.el);

    var select = this.select = new G.Input.Select();

    select.addOption({value: 'FUN', text: 'happy'});
    select.addOption({value: 'BLUE', text: 'No Help Here'});
    select.addOption({value: 'SAND', text: 'Just another option'});

    select.select('BLUE');

    this.$el.append(select.el);

    return this;
  }
});
