/**
 * A 'tap'able element
 *
 * Emits a 'tap' and 'tap-[id]' event
 */
G.Tapable = Backbone.View.extend({

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

    if (this.id)
      this.trigger('tap-' + this.id, this);
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
