/**
 * A row of buttons where only one can be press at once
 *
 * @params [object] options The view options
 *   @attr [array] buttons Array of button text
 */
G.Input.ToggleButtons = Backbone.View.extend({
  className: 'toggle-buttons',

  /**
   * Build buttons and attach their events
   */
  initialize: function() {
    this.buildButtons(this.options.buttons || []);

    this.listenTo(this, 'tap', this.setChecked);
  },

  /**
   * Build each button
   *
   * @param [array] buttons An array of button texts
   */
  buildButtons: function(buttons) {
    buttons.forEach(this.buildButton.bind(this));
  },

  /**
   * Build a single button
   *
   * @param [string] button The button text
   */
  buildButton: function(button) {
    var button_view = new G.Input.Button();

    button_view.setText(button);

    this.$el.append(button_view.el);

    this.listenTo(button_view, 'all', this.onButtonEvent);
  },

  /**
   * One of the buttons was tapped
   *
   * @param [G.Input.Button] button The button view
   */
  setChecked: function(button) {
    this.$('button').removeClass('checked');

    button.$el.addClass('checked');
  },

  /**
   * A button event was received, route through this view
   */
  onButtonEvent: function() {
    this.trigger.apply(this, arguments);
  }
});
