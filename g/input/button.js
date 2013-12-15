/**
 * Basic button
 *
 * Emits a 'tap' and 'tap-[button text]' event
 */
G.Input.Button = G.Tapable.extend({
  tagName: 'button',

  /**
   * Set the text of the button
   *
   * @param [string] text The button text
   */
  setText: function(text) {
    if (this.text_class)
      this.$el.removeClass(this.text_class);

    this.text = text;

    this.id = text.replace(' ', '-').toLowerCase();

    this.$el.attr('value', text);

    this.$el.text(text);

    this.$el.addClass('text');
  },

  /**
   * Set the icon of the button
   *
   * @param [string] icon The icon name
   */
  setIcon: function(icon) {
    this.$el.addClass('icon ' + icon);
  },

  /**
   * Disable/Enable the button
   *
   * @param [bool] disable Disable/Enable the button
   */
  disable: function(disable) {
    if (disable)
      this.$el.prop('disabled', true);
    else
      this.$el.removeProp('disabled');
  },
});
