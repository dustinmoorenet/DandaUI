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

/**
 * Basic button
 *
 * Emits a 'tap' and 'tap-[button text]' event
 */
G.Input.Button = Backbone.View.extend({
  tagName: 'button',

  events: {
    'click': 'onClick',
    'touchstart': 'onTouchStart',
    'mousedown': 'onMouseDown',
    'keydown': 'onKeyDown'
  },

  /**
   * Setup the view
   */
  initialize: function() {
    this.onDone = this.onDone.bind(this);
    this.onCancel = this.onCancel.bind(this);
  },

  /**
   * Set the text of the button
   *
   * @param [string] text The button text
   */
  setText: function(text) {
    if (this.text_class)
      this.$el.removeClass(this.text_class);

    this.text = text;

    this.text_class = text.replace(' ', '-').toLowerCase();

    this.$el.text(text);

    this.$el.addClass(this.text_class);
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

  /**
   * The button was clicked, we don't care about this event
   *
   * @param [Event] evt The click event
   */
  onClick: function(evt) {
    evt.preventDefault();
  },

  /**
   * A key was pressed, tap on enter key and space bar
   *
   * @param [Event] evt The click event
   */
  onKeyDown: function(evt) {
    if (evt.which === 13 || evt.which === 32) {
      this.onStart();

      window.setTimeout(this.onDone, 200);
    }
  },

  /**
   * A touch event has started, which means we have touch support
   */
  onTouchStart: function() {
    this.onStart();

    this.touch = true;

    $('body').on('touchend.' + this.cid, this.onDone);

    $('body').on('touchmove.' + this.cid, this.onCancel);

    window.setTimeout(this.onCancel, 500);
  },

  /**
   * A mouse event has started, we may not care if we have touch events
   */
  onMouseDown: function() {
    if (!this.touch) {
      this.onStart();

      $('body').on('mouseup.' + this.cid, this.onDone);
    }
  },

  /**
   * The interaction has started
   */
  onStart: function() {
    this.cleanUp();

    this.$el.addClass('active');
  },

  /**
   * The interaction has completed
   */
  onDone: function() {
    if (this.canceled) {
      this.cleanUp();

      return;
    }

    this.cleanUp();

    this.trigger('tap', this);

    if (this.text_class)
      this.trigger('tap-' + this.text_class, this);
  },

  /**
   * The interaction has been canceled
   */
  onCancel: function() {
    this.canceled = true;

    this.$el.removeClass('active');
  },

  /**
   * Clean up after the interaction
   */
  cleanUp: function() {
    this.touch = false;

    this.canceled = false;

    $('body').off('.' + this.cid);

    this.$el.removeClass('active');
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

/**
 *
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

/**
 * Base panel view
 */
G.Panel.Base = Backbone.View.extend({
  className: 'base panel'
});
