G.Input.ToggleButtons = Backbone.View.extend({
  className: 'toggle-buttons',

  initialize: function() {
    this.buildButtons(this.options.buttons || []);
  },

  buildButtons: function(buttons) {
    buttons.forEach(this.buildButton.bind(this));
  },

  buildButton: function(button) {
    var button_view = new G.Input.Button();

    button_view.setText(button);

    this.$el.append(button_view.el);
  }
});
