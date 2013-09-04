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
 * The text input field
 */
G.Input.Text = Backbone.View.extend({
  tagName: 'input',

  attributes: {
    type: 'text'
  }
});

/**
 * The utility library
 */
/* global U:true */
var U = {};
