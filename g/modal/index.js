/**
 * Base modal
 */
G.Modal = HumanView.extend({
  template: JST.modal,

  /**
   * Render template
   */
  render: function(subview) {
    this.renderAndBind();

    this.renderSubview(subview, '.content');

    return this;
  }
});
