/**
 * A select drop down
 */
G.Input.Select = HumanView.extend({
  events: {
    'change select': 'realSelectChanged'
  },

  template: JST.select,

  /**
   * Render and attach events
   *
   * @param [object] options View options
   *   @attr [Element] select The select to override
   */
  initialize: function(options) {
    this.options = {};

    this.$select = $((options || {}).select || $('<select />'));

    this.render();
  },

  /**
   * Build DOM, migrate options
   */
  render: function() {
    this.renderAndBind();

    this.$select.remove().appendTo(this.el);

    this.display = new G.Input.Button({el: this.$('.display')});

    this.display.setIcon('icon-triangle');
    
    this.listenTo(this.display, 'tap', this.toggleDisplay);

    this.copyOptions();
  },

  /**
   * Copy all options from select and add to options div
   */
  copyOptions: function() {
    var $options = $('option', this.$select).remove();

    $options.each((function(option) {
      this.addOption({
        value: option.value,
        name: $(option).text()
      });
    }).bind(this));

    this.select(this.$select.val());
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
   * The real select changed
   */
  realSelectChanged: function() {
    this.select(this.$select.val());
  },

  /**
   * Directly select option
   *
   * @param [string] option value to select
   */
  select: function(value) {
    var option = this.options[value];

    if (!option)
      return;

    this.optionSelected(option);
  },

  /**
   * Paint the option selected
   *
   * @param [View] option selected
   */
  optionSelected: function(option) {
    if (this.selected_option === option)
      return;

    this.$('.options div').removeClass('selected');

    option.$el.addClass('selected');

    this.selected_option = option;

    this.display.setText(option.$el.text());

    this.commitSelectedOption();
  },

  /**
   * Take current state and apply to real select
   */
  commitSelectedOption: function() {
    this.$el.removeClass('show');

    this.$select.val(this.selected_option.id);
  }
});
