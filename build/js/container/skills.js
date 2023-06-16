this["MyApp"]["templates"]["skills"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"title"),depth0,{"name":"title","hash":{"big":true,"data":"All skills"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        <ul>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"skills") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":10},"end":{"line":49,"column":19}}})) != null ? stack1 : "")
    + "        </ul>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card mt-3\">\r\n      <div class=\"card-body text-end\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"title"),depth0,{"name":"title","hash":{"big":false,"data":"My hobbies"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        <ol>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"hobbies") : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":10},"end":{"line":65,"column":19}}})) != null ? stack1 : "")
    + "        </ol>\r\n\r\n      </div>\r\n    </div>\r\n\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <li>\r\n            "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":32,"column":12},"end":{"line":32,"column":20}}}) : helper)))
    + "\r\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"point") : depth0),{"name":"if","hash":{"includeZero":true},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":12},"end":{"line":34,"column":62}}})) != null ? stack1 : "")
    + "\r\n\r\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isTop") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":12},"end":{"line":37,"column":40}}})) != null ? stack1 : "")
    + "\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"point") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":12},"end":{"line":44,"column":23}}})) != null ? stack1 : "")
    + "\r\n            "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"point") : depth0),{"name":"unless","hash":{"includeZero":true},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":12},"end":{"line":47,"column":75}}})) != null ? stack1 : "")
    + "\r\n          </li>\r\n";
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
    return " - Top! ";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"point") : depth0),{"name":"if","hash":{"includeZero":true},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":12},"end":{"line":43,"column":19}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "            (still studying)\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    return " (is not studied) ";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <li>\r\n            "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":62,"column":12},"end":{"line":62,"column":20}}}) : helper)))
    + "\r\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isMain") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":63,"column":12},"end":{"line":63,"column":47}}})) != null ? stack1 : "")
    + "\r\n          </li>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    return " - favourite! ";
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
    + ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"main") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":4},"end":{"line":71,"column":13}}})) != null ? stack1 : "")
    + "  </div>\r\n</div>\r\n\r\n";
},"usePartial":true,"useData":true});