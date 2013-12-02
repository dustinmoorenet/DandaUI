/**
 * The message model
 *
 * Contains a message to be handled
 */
M.Message = HumanModel.define({
  type: 'message',

  props: {
    type: ['string', true, 'alert'],
    title: ['string', true, 'Important Message'],
    content: ['string', true],
    response: 'string',
    remember_response: 'boolean'
  },

  session: {
    options: ['array', true, []],
    built_in_options: ['object', true, {
      alert: ['OK'],
      confirm: ['OK', 'Cancel'],
      question: ['Yes', 'No'],
    }]
  },

  /**
   * Listen to changes
   */
  initialize: function() {
    this.listenTo(this, 'change:type', this.onTypeChange);

    this.onTypeChange(this, this.type);
  },

  /**
   * The type has changed
   *
   * @param [M.Message] model This model
   * @param [string] type The message type
   */
  onTypeChange: function(model, type) {
    var options = this.built_in_options[type];

    if (options)
      this.options = options;
  }
});
