;(function($){
  $.fn.vovaPlugin = function(){
    console.log(this.width());

    $('<h1>',{
      text: 'Some question in the form of a line'
    }).appendTo(this);

    var form = $('<form/>').appendTo(this);

    var x, y, categories = ['Item 1', 'Item 2', 'Item 3', 'Item 4']

    for(x = 0, y = categories.length; x < y; x++){
      $('<input/>',{
        type: "radio",
        name: "categories",
        id: categories[x],
        value: categories[x]
      }).appendTo(form);

      $('<label/>',{
        text: categories[x],
        "for": categories[x]
      }).appendTo(form);
    }

    $('<button/>',{
      text: "Send!"
    }).appendTo(this);

  };
})(jQuery);
