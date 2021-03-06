(function($){
  var templates = {};
  $.Template = function(template){
        
    return {
      template : template,
      
      // check if method or properties exists
      has : function(name){
        return this.template[name] !== undefined;
      },
      
      // get a method or properties exists
      get : function(name,json){

        if(!this.has(name)) throw "'" + name + "' Don't exists."
        
        var markup;
        
        if(this.template[name].split('.').pop() != 'tmpl'){
          // If template is a string
          markup = this.template[name];
        }else if(templates[name] == undefined){
          // If template is a url
          $.ajax({
            url : this.template[name],
            async: false,
            complete : function(data){
              markup = data.responseText;
              templates[name] = markup;
            }
          });
        }else{
          // If template exists
          markup = templates[name];
        }
        
        $.template( name, markup );
        return $.tmpl( name, json );

        
      }
      
    }
  }
})(jQuery);
