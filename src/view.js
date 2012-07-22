(function($){
  $.View = function(view){
        
    var obj = {
      
      // check if method or properties exists
      has : function(name){
        return this[name] !== undefined;
      },
      
      // get a method or properties exists
      get : function(name){

        if(!this.has(name)) throw "'" + name + "' Don't exists."
        
        var self = this;
        // Check if is function
        if($.isFunction(this[name])){
          // Return function
          return function(){
            return self[name].apply(self,arguments);
          }
        }else{
          // Return properties
          return this[name];
        }
        
      }
      
    }
    
    return $.extend(obj, view);
    
  }
})(jQuery);
