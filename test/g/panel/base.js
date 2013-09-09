describe('G.Panel.Base', function() {
  it('is a Backbone.View', function() {
    expect(G.Panel.Base).to.be.a(Function);

    var panel = new G.Panel.Base();

    expect(panel.el).to.be.an(Element);
  });
});
