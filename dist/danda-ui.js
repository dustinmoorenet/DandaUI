/**
 * The base graphical (G) user interface object
 */
/* global G:true */
var G = {};

/**
 * Input types
 */
G.Input = {};

/**
 * Panel views
 */
G.Panel = {};

/**
 * The utility library
 */
/* global U:true */
var U = {};

/**
 * The text input field
 */
G.Input.Text = Backbone.View.extend({
  tagName: 'input',

  attributes: {
    type: 'text'
  }
});

/**
 * Base panel view
 */
G.Panel.Base = Backbone.View.extend({
  className: 'base panel'
});
