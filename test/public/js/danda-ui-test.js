describe('G', function() {
  it('should be an object', function() {
    expect(G).to.be.an(Object);
  });
});

describe('G.Input', function() {
  it('should be an object', function() {
    expect(G.Input).to.be.an(Object);
  });
});

describe('G.Panel', function() {
  it('is an object', function() {
    expect(G.Panel).to.be.an(Object);
  });
});

describe('U', function() {
  it('should be an object', function() {
    expect(U).to.be.an(Object);
  });
});

describe('G.Input.Button', function() {
  it('should create a button', function() {
    var button = new G.Input.Button();

    expect(button.el).to.be.an(Element);
  });
});

describe('G.Input.Select', function() {
  it('should create a select', function() {
    var select = new G.Input.Select();

    expect(select.el).to.be.an(Element);
    expect(select.$select.get(0)).to.be.an(Element);
  });
});

describe('G.Input.Text', function() {
  it('should create a text input field', function() {
    var input = new G.Input.Text();

    expect(input.el).to.be.an(Element);
  });
});

describe('G.Input.ToggleButtons', function() {
  it('is a Backbone.View', function() {
    var buttons = new G.Input.ToggleButtons();

    expect(buttons.el).to.be.an(Element);
  });
});

describe('G.Panel.Base', function() {
  it('is a Backbone.View', function() {
    expect(G.Panel.Base).to.be.a(Function);

    var panel = new G.Panel.Base();

    expect(panel.el).to.be.an(Element);
  });
});
