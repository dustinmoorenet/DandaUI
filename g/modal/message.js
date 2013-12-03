/**
 * A popup message
 */
G.Modal.Message = HumanView.extend({
  textBindings: {
    title: '.title'
  },

  htmlBindings: {
    content: '.content'
  },

  template: JST.modal_message,

  /**
   * Build and render modal parent
   */
  initialize: function() {
    this.modal = new G.Modal();

    this.modal.render(this);
  },

  /**
   * Build internal DOM
   */
  render: function() {
    this.renderAndBind();

    this.addButtons();

    return this;
  },

  /**
   * Add buttons from model options
   */
  addButtons: function() {
    var options = this.model.options;

    options.forEach(this.addButton.bind(this));
  },

  /**
   * Add a button
   *
   * @param [string] text The button text
   */
  addButton: function(text) {
    var button = new G.Input.Button();

    button.setText(text);

    this.$('.buttons').append(button.el);

    this.listenTo(button, 'all', this.routeEvent);

    this.listenTo(button, 'tap', this.setResponse.bind(this, text));
  },

  /**
   * Close the message
   */
  close: function() {
    this.modal.remove();
  },

  /**
   * Route sub events through this view
   *
   * @param [string] event_name The event name
   */
  routeEvent: function() {
    this.trigger.apply(this, arguments);
  },

  /**
   * Set the message response
   *
   * @param [string] response The response text
   */
  setResponse: function(response) {
    this.model.response = response;

    this.modal.remove();
  }
});
