;(function($){
  var defaults = {
    question: 'Some question in the form of a line',
    url: "",
    buttonText: "Send!",
    categories: ['Item 1', 'Item 2', 'Item 3', 'Item 4']
  }
  $.fn.vovaPlugin = function(options){
    var config = $.extend({}, defaults, options);
    console.log(this.width());
    var jfirst = this.first();

    $('<h1>',{
      text: config.question
    }).appendTo(this);

    var form = $('<form/>').appendTo(this);

    var x, y, categories = config.categories

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
      text: config.buttonText
    }).appendTo(this);
    
    return this;
  };
})(jQuery);
