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
   *
   * @param [object] options View options
   */
  initialize: function(options) {
    this.options = {};

    this.$select = $((options || {}).select || $('<select />'));

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

    var div = $('<div />').text(option.text)
                          .attr('value', option.value);

    div = new G.Tapable({
      el: div,
      id: option.value
    });

    this.options[option.value] = div;

    this.$('.options').append(div.el);

    this.listenTo(div, 'tap', this.optionSelected);
    this.listenTo(div, 'tap', this.commitSelectedOption);

    this.$('.display').text(this.$select.find(':selected').text());
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
  },

  /**
   * Paint the option selected
   */
  optionSelected: function(option) {
    this.$('.options div').removeClass('selected');

    option.$el.addClass('selected');

    this.selected_option = option;

    this.$('.display').text(option.$el.text());
  },

  /**
   * Take current state and apply to real select
   */
  commitSelectedOption: function() {
    this.$el.removeClass('show');

    this.$select.val(this.selected_option.id);
  }
});
