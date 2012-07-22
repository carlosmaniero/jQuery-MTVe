(function($){
  $.Model = function(model){
    var obj = {
    
      // check if method or properties exists
      has : function(name){
        return this[name] !== undefined;
      },
      
      // get a method or properties exists
      get : function(name){

        if(!this.has(name)) throw "'" + name + "' Don't exists."
        
        // Check if is function
        if($.isFunction(this[name])){
          // Return function
          self = this;
          return function(){
            return self[name].apply(self,arguments);
          }
        }else{
          // Return properties
          return this[name];
        }
        
      },
      
      load : function(type, url, data, options){
      
        var ret;
        
        var toSend = {
          type : type,
          url : url,
          async: false,
          data : data,
          complete : function(xhr){
            ret = xhr.responseText;
          }
        }
        toSend = $.extend(toSend, options);
        
        $.ajax(toSend);
        return ret;
      }
      
    }
    
    return $.extend(obj, model);
    
  }
})(jQuery);