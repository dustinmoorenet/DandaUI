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
