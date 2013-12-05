/**
 * A panel that contains tabbed panels
 */
G.Panel.Tabs = HumanView.extend({
  template: JST.panel_tabs,

  /**
   * Store the tabs
   */
  initialize: function(options) {
    this.tabs = options.tabs;
  },

  /**
   * Add all tabs
   */
  addTabs: function() {
    this.tabs.each(this.addTab.bind(this));
  },

  /**
   * Add a tab panel
   *
   * @param [object] options The tab options
   *   @attr [string] label The text to display in tab
   *   @attr [string] icon The icon to display next to text (optional)
   *   @attr [View] panel The view to display in tab
   */
  addTab: function(options) {
    var tab = new G.Button();

    tab.setText(options.label);

    if (options.icon)
      tab.setIcon(options.icon);

    this.$('.labels').append(tab.el);

    this.listenTo(tab, 'tap', this.togglePanel.bind(this, options.panel));

    this.renderSubview(options.panel, '.panels');
  },

  /**
   * Set the tapped panel to selected and unselect the previous
   *
   * @param [View] panel The panel to display
   * @param [G.Button] tab The tab that was tapped
   */
  togglePanel: function(panel, tab) {
    this.$('.panels .panel').hide();

    panel.show();

    this.$('.labels').removeClass('selected');

    tab.addClass('selected');
  }
});
