/**
 * Utilities and shared functionality for the build hooks.
 */
var fs = require('fs');
var path = require("path");

module.exports = {

  replacer: function(match, p1, p2, p3, offset, string){
    if(p2.includes("configuration")){
      return [p1,p3].join("");
    }else{
      return [p1,p2,p3].join("");
    }
  }
};
