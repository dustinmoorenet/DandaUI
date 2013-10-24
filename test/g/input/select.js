describe('G.Input.Select', function() {
  it('should create a select', function() {
    var select = new G.Input.Select();

    expect(select.el).to.be.an(Element);
    expect(select.$select.get(0)).to.be.an(Element);
  });
});
