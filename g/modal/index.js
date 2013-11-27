/**
 * Base modal
 */
G.Modal = HumanView.extend({
  template: JST.modal,

  /**
   * Render
   */
  initialize: function() {
    this.render();
  },

  /**
   * Render template
   */
  render: function() {
    this.renderAndBind();

    return this;
  }
});
