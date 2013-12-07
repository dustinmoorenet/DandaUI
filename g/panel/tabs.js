/**
 * A panel that contains tabbed panels
 */
G.Panel.Tabs = HumanView.extend({
  template: JST.panel_tabs,

  /**
   * Store the panels
   */
  initialize: function(options) {
    this.panels = options.panels;

    this.panel_lookup = {};
  },

  /**
   * Render panels
   */
  render: function() {
    this.renderAndBind();

    this.addPanels();

    return this;
  },

  /**
   * Add all panels
   */
  addPanels: function() {
    this.panels.forEach(this.addPanel.bind(this));

    this.select(0);
  },

  /**
   * Add a panel
   *
   * @param [object] options The panel options
   *   @attr [string] label The text to display in tab
   *   @attr [string] icon The icon to display next to text (optional)
   *   @attr [View] panel The view to display
   */
  addPanel: function(options) {
    options.tab = new G.Input.Button();

    options.tab.setText(options.label);

    if (options.icon)
      options.tab.setIcon(options.icon);

    this.$('.labels').append(options.tab.el);

    this.listenTo(options.tab, 'tap', this.togglePanel.bind(this, options.panel));

    this.registerSubview(options.tab);
    this.renderSubview(options.panel, '.panels');

    this.panel_lookup[options.panel.cid] = options;
  },

  /**
   * Set the tapped panel to selected and unselect the previous
   *
   * @param [View] panel The panel to display
   * @param [G.Button] tab The tab that was tapped
   */
  togglePanel: function(panel, tab) {
    this.$('.panels > *').hide();

    panel.$el.show();

    this.$('.labels > button').removeClass('selected');

    tab.$el.addClass('selected');
  },

  /**
   * Select a panel to display
   *
   * @param [mixed] index_or_view Either an index or a view
   */
  select: function(index_or_view) {
    var panel;

    if (index_or_view.el)
      panel = this.panel_lookup[index_or_view.cid];
    else
      panel = this.panels[index_or_view];

    this.togglePanel(panel.panel, panel.tab);
  }
});
