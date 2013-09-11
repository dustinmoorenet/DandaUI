describe('G.Input.ToggleButtons', function() {
  it('is a Backbone.View', function() {
    var buttons = new G.Input.ToggleButtons();

    expect(buttons.el).to.be.an(Element);
  });
});
