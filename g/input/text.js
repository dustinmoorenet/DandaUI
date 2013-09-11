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
