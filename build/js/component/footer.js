this["MyApp"]["templates"]["footer"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<footer>\r\n  <br />\r\n  <div class=\"text-center mb-3\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"social") : depth0),{"name":"with","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":9,"column":13}}})) != null ? stack1 : "")
    + "  </div>\r\n\r\n  <div class=\"text-center mb-3\">\r\n    <em>Copyright by "
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"header") : depths[1])) != null ? lookupProperty(stack1,"name") : stack1)) != null ? lookupProperty(stack1,"firstname") : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"header") : depths[1])) != null ? lookupProperty(stack1,"name") : stack1)) != null ? lookupProperty(stack1,"lastname") : stack1), depth0))
    + "</em>\r\n  </div>\r\n\r\n  <div class=\"text-center mb-3\">\r\n    <em>"
    + alias2(alias1(((stack1 = (depths[1] != null ? lookupProperty(depths[1],"header") : depths[1])) != null ? lookupProperty(stack1,"address") : stack1), depth0))
    + "</em>\r\n  </div>\r\n\r\n</footer>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"link"),depth0,{"name":"link","hash":{"blank":true,"href":((stack1 = (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? lookupProperty(stack1,"href") : stack1),"text":((stack1 = (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? lookupProperty(stack1,"text") : stack1)},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"link"),depth0,{"name":"link","hash":{"blank":true,"href":((stack1 = (depth0 != null ? lookupProperty(depth0,"phone") : depth0)) != null ? lookupProperty(stack1,"href") : stack1),"text":((stack1 = (depth0 != null ? lookupProperty(depth0,"phone") : depth0)) != null ? lookupProperty(stack1,"text") : stack1)},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"link"),depth0,{"name":"link","hash":{"noLine":true,"blank":true,"href":((stack1 = (depth0 != null ? lookupProperty(depth0,"linkedin") : depth0)) != null ? lookupProperty(stack1,"href") : stack1),"text":((stack1 = (depth0 != null ? lookupProperty(depth0,"linkedin") : depth0)) != null ? lookupProperty(stack1,"text") : stack1)},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footer") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":21,"column":9}}})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useDepths":true});