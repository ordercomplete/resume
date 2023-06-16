this["MyApp"]["templates"]["work"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"works") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":4},"end":{"line":80,"column":13}}})) != null ? stack1 : "")
    + "\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n\r\n    <div class=\"card my-3\">\r\n      <div class=\"card-body\">\r\n\r\n        <div>\r\n          <div class=\"my-2\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"position") || (depth0 != null ? lookupProperty(depth0,"position") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"position","hash":{},"data":data,"loc":{"start":{"line":32,"column":28},"end":{"line":32,"column":40}}}) : helper)))
    + "</div>\r\n          <div class=\"my-2\">\r\n            "
    + alias4(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? lookupProperty(stack1,"from") : stack1), depth0))
    + " -\r\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? lookupProperty(stack1,"to") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":35,"column":12},"end":{"line":36,"column":42}}})) != null ? stack1 : "")
    + "\r\n          </div>\r\n\r\n          <div class=\"my-2\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"company") : depth0)) != null ? lookupProperty(stack1,"url") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":40,"column":12},"end":{"line":43,"column":19}}})) != null ? stack1 : "")
    + "          </div>\r\n\r\n          <div class=\"my-2\">\r\n            <strong>\r\n              Projects ("
    + alias4(((helper = (helper = lookupProperty(helpers,"projectAmount") || (depth0 != null ? lookupProperty(depth0,"projectAmount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectAmount","hash":{},"data":data,"loc":{"start":{"line":48,"column":24},"end":{"line":48,"column":41}}}) : helper)))
    + ")\r\n            </strong>\r\n          </div>\r\n\r\n          <section>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"projects") : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":53,"column":12},"end":{"line":74,"column":21}}})) != null ? stack1 : "")
    + "          </section>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? lookupProperty(stack1,"to") : stack1), depth0))
    + "\r\n            ";
},"5":function(container,depth0,helpers,partials,data) {
    return " (досі працюю) ";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"link"),depth0,{"name":"link","hash":{"noLine":true,"blank":true,"href":((stack1 = (depth0 != null ? lookupProperty(depth0,"company") : depth0)) != null ? lookupProperty(stack1,"url") : stack1),"text":((stack1 = (depth0 != null ? lookupProperty(depth0,"company") : depth0)) != null ? lookupProperty(stack1,"name") : stack1)},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "            ";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " <b>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"company") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</b>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div>\r\n              <div>"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"link"),depth0,{"name":"link","hash":{"noLine":true,"blank":true,"href":(depth0 != null ? lookupProperty(depth0,"url") : depth0),"text":(depth0 != null ? lookupProperty(depth0,"name") : depth0)},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n\r\n              <div>\r\n                <p>about: "
    + alias4(((helper = (helper = lookupProperty(helpers,"about") || (depth0 != null ? lookupProperty(depth0,"about") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"about","hash":{},"data":data,"loc":{"start":{"line":58,"column":26},"end":{"line":58,"column":35}}}) : helper)))
    + "</p>\r\n              </div>\r\n\r\n              <div>\r\n                <em>Project stacks ("
    + alias4(((helper = (helper = lookupProperty(helpers,"stackAmount") || (depth0 != null ? lookupProperty(depth0,"stackAmount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stackAmount","hash":{},"data":data,"loc":{"start":{"line":62,"column":36},"end":{"line":62,"column":51}}}) : helper)))
    + ")</em>\r\n\r\n                <p>"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"stack") : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":64,"column":19},"end":{"line":64,"column":57}}})) != null ? stack1 : "")
    + "</p>\r\n              </div>\r\n\r\n              <div>\r\n                <em>Project awards ("
    + alias4(((helper = (helper = lookupProperty(helpers,"awardAmount") || (depth0 != null ? lookupProperty(depth0,"awardAmount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"awardAmount","hash":{},"data":data,"loc":{"start":{"line":68,"column":36},"end":{"line":68,"column":51}}}) : helper)))
    + ")</em>\r\n\r\n                <p>"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"awards") : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":19},"end":{"line":70,"column":58}}})) != null ? stack1 : "")
    + "</p>\r\n              </div>\r\n\r\n            </div>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":64,"column":35},"end":{"line":64,"column":43}}}) : helper)))
    + " <br>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card\"\r\n  style=\"background-image: linear-gradient( 132.6deg,  rgba(71,139,214,1) 23.3%, rgba(37,216,211,1) 84.7% );\">\r\n\r\n  <div class=\"card-header\">\r\n\r\n    <div class=\"card my-2\">\r\n      <div class=\"card-body\"\r\n        style=\"background-image: radial-gradient( circle 993px at 0.5% 50.5%,  rgba(137,171,245,0.37) 0%, rgba(245,247,252,1) 100.2% );\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"header-bio"),depth0,{"name":"header-bio","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"card-body\">\r\n    <div>\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"title"),depth0,{"name":"title","hash":{"big":true,"data":"Work"},"data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"main") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":4},"end":{"line":82,"column":13}}})) != null ? stack1 : "")
    + "\r\n  </div>\r\n</div>\r\n\r\n\r\n";
},"usePartial":true,"useData":true});