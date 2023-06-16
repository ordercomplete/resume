this["MyApp"]["templates"]["education"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n\r\n        <button class=\"btn btn-outline-info\">"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"title"),depth0,{"name":"title","hash":{"big":true,"data":"Education"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</button>\r\n        <div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"education") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":10},"end":{"line":45,"column":19}}})) != null ? stack1 : "")
    + "        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card mt-3\">\r\n      <div class=\"card-body text-end\">\r\n\r\n        <button class=\"btn btn-outline-info\">"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"title"),depth0,{"name":"title","hash":{"big":false,"data":"My certificates"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</button>\r\n        <ul>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"certificates") : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":10},"end":{"line":62,"column":19}}})) != null ? stack1 : "")
    + "        </ul>\r\n\r\n      </div>\r\n    </div>\r\n\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <section class=\"my-1\">\r\n            "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":32,"column":12},"end":{"line":32,"column":20}}}) : helper)))
    + "\r\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"point") : depth0),{"name":"if","hash":{"includeZero":true},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":12},"end":{"line":34,"column":62}}})) != null ? stack1 : "")
    + "\r\n\r\n            <span class=\"badge text-bg-danger rounded-pill\">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isTop") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":60},"end":{"line":37,"column":86}}})) != null ? stack1 : "")
    + "</span>\r\n\r\n            <span class=\"badge text-bg-success rounded-pill\">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isEnd") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":61},"end":{"line":40,"column":86}}})) != null ? stack1 : "")
    + "</span>\r\n            <span class=\"badge text-bg-primary rounded-pill\">"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"isEnd") : depth0),{"name":"unless","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":61},"end":{"line":42,"column":25}}})) != null ? stack1 : "")
    + "</span>\r\n          </section>\r\n\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " ("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"point") || (depth0 != null ? lookupProperty(depth0,"point") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"point","hash":{},"data":data,"loc":{"start":{"line":34,"column":44},"end":{"line":34,"column":53}}}) : helper)))
    + ") ";
},"5":function(container,depth0,helpers,partials,data) {
    return " Top! ";
},"7":function(container,depth0,helpers,partials,data) {
    return " End ";
},"9":function(container,depth0,helpers,partials,data) {
    return " still in process\r\n              ";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <li class=\"my-3\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":58,"column":12},"end":{"line":58,"column":20}}}) : helper)))
    + "\r\n\r\n            <span class=\"badge text-bg-light rounded-pill\">id: "
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":60,"column":63},"end":{"line":60,"column":69}}}) : helper)))
    + "</span>\r\n          </li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card\"\r\n  style=\"background-image: linear-gradient( 132.6deg,  rgba(71,139,214,1) 23.3%, rgba(37,216,211,1) 84.7% );\">\r\n\r\n  <div class=\"card-header\">\r\n\r\n    <div class=\"card my-2\">\r\n      <div class=\"card-body\"\r\n        style=\"background-image: radial-gradient( circle 993px at 0.5% 50.5%,  rgba(137,171,245,0.37) 0%, rgba(245,247,252,1) 100.2% );\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"header-bio"),depth0,{"name":"header-bio","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"card-body\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"main") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":4},"end":{"line":68,"column":13}}})) != null ? stack1 : "")
    + "    <p class=\"mt-3 mb-2 text-center\">“Education page in progress...”</p>\r\n  </div>\r\n</div>\r\n\r\n\r\n";
},"usePartial":true,"useData":true});