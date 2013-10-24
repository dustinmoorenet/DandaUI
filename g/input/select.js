/**
 * A select drop down
 *
 * @params [object] options The view options
 *   @attr [Element] select The select to override
 */
G.Input.Select = Backbone.View.extend({
  className: 'select',

  template: _.template(
    '<button class="display"></button>'
  + '<div class="options"></div>'
  ),

  /**
   * Render and attach events
   */
  initialize: function() {
    this.$select = $(this.options.select || $('<select />'));

    this.$select.remove().appendTo(this.el);

    this.render();
  },

  /**
   * Build DOM, migrate options
   */
  render: function() {
    this.$el.append(this.template());

    this.display = new G.Input.Button({el: this.$('.display')});
    
    this.listenTo(this.display, 'tap', this.toggleDisplay);
  },

  /**
   * Copy all options from select and add to options div
   */
  copyOptions: function() {
    var $options = $('option', this.$select).remove();

    $options.forEach((function(option) {
      this.addOption({
        value: option.value,
        name: $(option).text()
      });
    }).bind(this));
  },

  /**
   * Add an option to the select
   *
   * @param [object] option The option to add
   *   @attr [string] value The option value
   *   @attr [string] text The text of the option
   */
  addOption: function(option) {
    var el = $('<option />').text(option.text)
                            .val(option.value);

    this.$select.append(el);

    el = $('<div />').text(option.text)
                     .attr('value', option.value);

    this.$('.options').append(el);
  },

  /**
   * Remove option from the select
   */
  removeOption: function() {

  },

  /**
   * show/hide the drop down
   */
  toggleDisplay: function() {
    this.$el.toggleClass('show');
  }
});
