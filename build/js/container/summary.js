this["MyApp"]["templates"]["summary"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"summary") : depth0),{"name":"with","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":8},"end":{"line":38,"column":17}}})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n\r\n    <div class=\"card mt-3\">\r\n      <div class=\"card-body text-end\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"experience") : depth0),{"name":"with","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":8},"end":{"line":55,"column":17}}})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <section>\r\n          <div>\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"title"),depth0,{"name":"title","hash":{"big":true,"data":(depth0 != null ? lookupProperty(depth0,"title") : depth0)},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "          </div>\r\n          <div>\r\n            <p>\r\n              "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":34,"column":14},"end":{"line":34,"column":22}}}) : helper)))
    + "\r\n            </p>\r\n          </div>\r\n        </section>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <section>\r\n          <div>\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"title"),depth0,{"name":"title","hash":{"big":false,"data":(depth0 != null ? lookupProperty(depth0,"title") : depth0)},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "          </div>\r\n          <div>\r\n            <p>\r\n              "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":51,"column":14},"end":{"line":51,"column":22}}}) : helper)))
    + "\r\n            </p>\r\n          </div>\r\n        </section>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card\"\r\n  style=\"background-image: linear-gradient( 132.6deg,  rgba(71,139,214,1) 23.3%, rgba(37,216,211,1) 84.7% );\">\r\n\r\n  <div class=\"card-header\">\r\n    <div class=\"card my-2\">\r\n      <div class=\"card-body\"\r\n        style=\"background-image: radial-gradient( circle 993px at 0.5% 50.5%,  rgba(137,171,245,0.37) 0%, rgba(245,247,252,1) 100.2% );\">\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"header-bio"),depth0,{"name":"header-bio","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"card-body\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"main") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":4},"end":{"line":59,"column":13}}})) != null ? stack1 : "")
    + "  </div>\r\n</div>\r\n\r\n\r\n";
},"usePartial":true,"useData":true});