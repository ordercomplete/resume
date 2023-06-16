this["MyApp"]["templates"]["program"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"card my-3\">\r\n\r\n    <div class=\"card-header text-center\">\r\n      <h4 class=\"mt-3\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":20,"column":23},"end":{"line":20,"column":31}}}) : helper)))
    + " <em>("
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":20,"column":37},"end":{"line":20,"column":45}}}) : helper)))
    + ")</em></h4>\r\n      <p></p>\r\n      <p>Duration: "
    + alias4(((helper = (helper = lookupProperty(helpers,"duration") || (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":22,"column":19},"end":{"line":22,"column":31}}}) : helper)))
    + " hours</p>\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n      <h5><em>Details:</em></h5>\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"details") : depth0),{"name":"with","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":6},"end":{"line":90,"column":13}}})) != null ? stack1 : "")
    + "\r\n  </div>\r\n\r\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"museum") : depth0),{"name":"with","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":6},"end":{"line":57,"column":15}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"venue") : depth0),{"name":"with","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":6},"end":{"line":66,"column":15}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"performers") : depth0),{"name":"with","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":68,"column":6},"end":{"line":73,"column":15}}})) != null ? stack1 : "")
    + "\r\n\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"card-footer text-end\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"guide") : depth0),{"name":"with","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":81,"column":6},"end":{"line":86,"column":15}}})) != null ? stack1 : "")
    + "    </div>\r\n\r\n\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div>\r\n        <h5>Museum</h5>\r\n        <p><em>name:</em> "
    + alias2(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":31,"column":26},"end":{"line":31,"column":34}}}) : helper)))
    + "</p>\r\n        <p><em>location:</em>\r\n          "
    + alias2(alias3(((stack1 = (depth0 != null ? lookupProperty(depth0,"location") : depth0)) != null ? lookupProperty(stack1,"address") : stack1), depth0))
    + ",\r\n          "
    + alias2(alias3(((stack1 = (depth0 != null ? lookupProperty(depth0,"location") : depth0)) != null ? lookupProperty(stack1,"city") : stack1), depth0))
    + ",\r\n          "
    + alias2(alias3(((stack1 = (depth0 != null ? lookupProperty(depth0,"location") : depth0)) != null ? lookupProperty(stack1,"country") : stack1), depth0))
    + "</p>\r\n      </div>\r\n\r\n\r\n      <h5>Exhibits</h5>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"exhibits") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":6},"end":{"line":56,"column":15}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div>\r\n        <p><b>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":42,"column":14},"end":{"line":42,"column":22}}}) : helper)))
    + "</b></p>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"artist") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":43,"column":8},"end":{"line":47,"column":15}}})) != null ? stack1 : "")
    + "        <p><em>description:</em> "
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":48,"column":33},"end":{"line":48,"column":48}}}) : helper)))
    + "</p>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"audio_guide") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":49,"column":8},"end":{"line":53,"column":15}}})) != null ? stack1 : "")
    + "      </div>\r\n\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <p><em>artist:</em> "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"artist") || (depth0 != null ? lookupProperty(depth0,"artist") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"artist","hash":{},"data":data,"loc":{"start":{"line":44,"column":28},"end":{"line":44,"column":38}}}) : helper)))
    + "</p>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "        <p><em>artist:</em> unknown</p>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "        <p><em>audio guide:</em> available</p>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "        <p><em>audio guide:</em> not available</p>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <h5>Venue</h5>\r\n      <p><em>name:</em> "
    + alias1(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":61,"column":24},"end":{"line":61,"column":32}}}) : helper)))
    + "</p>\r\n      <p><em>location:</em>\r\n        "
    + alias1(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"location") : depth0)) != null ? lookupProperty(stack1,"address") : stack1), depth0))
    + ",\r\n        "
    + alias1(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"location") : depth0)) != null ? lookupProperty(stack1,"city") : stack1), depth0))
    + ",\r\n        "
    + alias1(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"location") : depth0)) != null ? lookupProperty(stack1,"country") : stack1), depth0))
    + "</p>\r\n";
},"15":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <h5>Performers</h5>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? lookupProperty(depths[1],"performers") : depths[1]),{"name":"each","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":6},"end":{"line":72,"column":15}}})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":71,"column":9},"end":{"line":71,"column":17}}}) : helper)))
    + " - "
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":71,"column":20},"end":{"line":71,"column":28}}}) : helper)))
    + "</p>\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <h5>Guide</h5>\r\n      <p><em>name:</em> "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":83,"column":24},"end":{"line":83,"column":32}}}) : helper)))
    + "</p>\r\n      <p><em>language:</em> "
    + alias4(((helper = (helper = lookupProperty(helpers,"language") || (depth0 != null ? lookupProperty(depth0,"language") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"language","hash":{},"data":data,"loc":{"start":{"line":84,"column":28},"end":{"line":84,"column":40}}}) : helper)))
    + "</p>\r\n      <p><em>rating:</em> "
    + alias4(((helper = (helper = lookupProperty(helpers,"rating") || (depth0 != null ? lookupProperty(depth0,"rating") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rating","hash":{},"data":data,"loc":{"start":{"line":85,"column":26},"end":{"line":85,"column":36}}}) : helper)))
    + "</p>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div>\r\n\r\n  <div class=\"card text-center\">\r\n    <div class=\"card-header\">\r\n      <h1>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"program") : depth0)) != null ? lookupProperty(stack1,"excursion") : stack1)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</h1>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <h2>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"program") : depth0)) != null ? lookupProperty(stack1,"excursion") : stack1)) != null ? lookupProperty(stack1,"location") : stack1)) != null ? lookupProperty(stack1,"city") : stack1), depth0))
    + ",\r\n        "
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"program") : depth0)) != null ? lookupProperty(stack1,"excursion") : stack1)) != null ? lookupProperty(stack1,"location") : stack1)) != null ? lookupProperty(stack1,"country") : stack1), depth0))
    + "</h2>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n      <h3>Program:</h3>\r\n    </div>\r\n  </div>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"program") : depth0)) != null ? lookupProperty(stack1,"excursion") : stack1)) != null ? lookupProperty(stack1,"program") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":2},"end":{"line":94,"column":11}}})) != null ? stack1 : "")
    + "\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>";
},"useData":true,"useDepths":true});