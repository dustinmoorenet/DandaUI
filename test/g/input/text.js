describe('G.Input.Text', function() {
  it('should create a text input field', function() {
    var input = new G.Input.Text();

    expect(input.el).to.be.an(Element);
  });
});
