/**
 * The base graphical (G) user interface object
 */
/* global G:true */
var G = {};

/**
 * Input types
 */
G.Input = {};

/**
 * Panel views
 */
G.Panel = {};

/**
 * The utility library
 */
/* global U:true */
var U = {};

G.Input.Button = Backbone.View.extend({
  tagName: 'button',

  setText: function(text) {
    this.$el.text(text);
  },

  disable: function(disable) {
    if (disable)
      this.$el.prop('disabled', true);
    else
      this.$el.removeProp('disabled');
  }
});

/**
 * The text input field
 */
G.Input.Text = Backbone.View.extend({
  tagName: 'input',

  attributes: {
    type: 'text'
  },

  disable: function(disable) {
    if (disable)
      this.$el.prop('disabled', true);
    else
      this.$el.removeProp('disabled');
  }
});

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

/**
 * Base panel view
 */
G.Panel.Base = Backbone.View.extend({
  className: 'base panel'
});
