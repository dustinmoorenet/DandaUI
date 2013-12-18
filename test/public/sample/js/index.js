$(function() {
  var $body = $('body');

  var tabs = window.tabs = new G.Panel.Tabs({
    panels: [
      {
        label: 'First Panel',
        panel: new Panel1()
      },
      {
        label: '2nd Panel',
        panel: new Panel1(),
        icon: 'icon-trash-can'
      },
      {
        label: 'Last Panel',
        panel: new Panel1()
      }
    ]
  });

  $body.append(tabs.render().el);

  var message = new G.Modal.Message({
    model: new M.Message({
      type: 'confirm',
      title: 'Hey you',
      content: '<div class="error">I am <strong>sure</strong> this is important</div>'
    })
  });

  $body.append(message.modal.el);

  message.model.once('change:response', function(model, response) {
    var message = new G.Modal.Message({
      model: new M.Message({
        type: 'alert',
        title: 'You did something',
        content: 'You clicked ' + response
      })
    });

    $body.append(message.modal.el);
  });

})
