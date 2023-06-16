this["MyApp"]["templates"]["header-bio"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<header>\r\n    <div>\r\n        <h1>\r\n            "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? lookupProperty(stack1,"firstname") : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? lookupProperty(stack1,"lastname") : stack1), depth0))
    + "\r\n        </h1>\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"title"),depth0,{"name":"title","hash":{"data":((stack1 = (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? lookupProperty(stack1,"text") : stack1)},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\r\n    <div>\r\n        <b>"
    + alias2(((helper = (helper = lookupProperty(helpers,"position") || (depth0 != null ? lookupProperty(depth0,"position") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"position","hash":{},"data":data,"loc":{"start":{"line":10,"column":11},"end":{"line":10,"column":23}}}) : helper)))
    + "</b>\r\n    </div>\r\n    <br>\r\n    <div>\r\n        <em>"
    + alias2(((helper = (helper = lookupProperty(helpers,"salary") || (depth0 != null ? lookupProperty(depth0,"salary") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"salary","hash":{},"data":data,"loc":{"start":{"line":14,"column":12},"end":{"line":14,"column":22}}}) : helper)))
    + "</em>\r\n    </div>\r\n    <br />\r\n    <div>\r\n        <em>"
    + alias2(((helper = (helper = lookupProperty(helpers,"address") || (depth0 != null ? lookupProperty(depth0,"address") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"address","hash":{},"data":data,"loc":{"start":{"line":18,"column":12},"end":{"line":18,"column":23}}}) : helper)))
    + "</em>\r\n    </div>\r\n\r\n</header>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"header") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":22,"column":9}}})) != null ? stack1 : "");
},"usePartial":true,"useData":true});