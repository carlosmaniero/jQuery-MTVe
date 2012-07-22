(function($){
  $.Events = function(events){
  
    var obj = {
      
      // check if method or properties exists
      has : function(name){
        return this[name] !== undefined;
      },
      
      // get a method or properties exists
      get : function(name){

        if(!this.has(name)) throw "'" + name + "' Don't exists."
        
        var self = this;
        return this[name];
        
      }
      
    }
    
    return $.extend(obj, events);
    
  }
})(jQuery);
