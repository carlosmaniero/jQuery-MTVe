(function($){
  $.Model = function(model){

    var self = model;

    var obj = {
    
      // check if method or properties exists
      has : function(name){
        return model[name] !== undefined;
      },
      
      // get a method or properties exists
      get : function(name){

        if(name[0] + name[1] == '__' ){
            throw "'" + name + "' is private."
        }else{
        
            if(!this.has(name)) throw "'" + name + "' Don't exists."
            
            // Check if is function
            if($.isFunction(model[name])){
              // Return function

              return function(){
                return model[name].apply(self,arguments);
              }
            }else{
              // Return properties
              return model[name];
            }
            
        }
      },

      // Alter a properties
      set : function(name,value){
        if(name[0] + name[1] == '__' ){
            throw "'" + name + "' is private."
        }else if(name[0] == '_' ){
            throw "'" + name + "' is read-only."
        }else{
            model[name] = value;
        }
      },
            
      load : function(type, url, data, options){
      
        var ret;
        
        var to_send = {
          type : type,
          url : url,
          async: false,
          data : data,
          complete : function(xhr){
            ret = xhr.responseText;
            
          }
        }
        to_send = $.extend(to_send, this.options);
        
        $.ajax(to_send);
        return ret;
      }
      
    }
    
    self = $.extend(model,obj);
    return obj;
    
  }
})(jQuery);