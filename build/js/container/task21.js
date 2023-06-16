this["MyApp"]["templates"]["task21"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"main") : depth0),{"name":"with","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":12,"column":17}}})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n\r\n    <br>\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"second") : depth0),{"name":"with","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":8},"end":{"line":25,"column":17}}})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n\r\n    <br>\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"subblock") : depth0),{"name":"with","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":8},"end":{"line":38,"column":17}}})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <h1>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":8,"column":21}}}) : helper)))
    + "</h1>\r\n        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":9,"column":11},"end":{"line":9,"column":19}}}) : helper)))
    + "</p>\r\n        <button class=\"btn btn-primary\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"button_text") : depth0)) != null ? lookupProperty(stack1,"solid") : stack1), depth0))
    + "</button><br><br>\r\n        <button class=\"btn btn-outline-primary\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"button_text") : depth0)) != null ? lookupProperty(stack1,"outline") : stack1), depth0))
    + "</button>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":21,"column":12},"end":{"line":21,"column":21}}}) : helper)))
    + "</h2>\r\n        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":22,"column":11},"end":{"line":22,"column":19}}}) : helper)))
    + "</p>\r\n        <button class=\"btn btn-secondary\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"button_text") : depth0)) != null ? lookupProperty(stack1,"solid") : stack1), depth0))
    + "</button><br><br>\r\n        <button class=\"btn btn-outline-secondary\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"button_text") : depth0)) != null ? lookupProperty(stack1,"outline") : stack1), depth0))
    + "</button>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":34,"column":12},"end":{"line":34,"column":21}}}) : helper)))
    + "</h3>\r\n        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":35,"column":11},"end":{"line":35,"column":19}}}) : helper)))
    + "</p>\r\n        <button class=\"btn btn-dark\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"button_text") : depth0)) != null ? lookupProperty(stack1,"solid") : stack1), depth0))
    + "</button><br><br>\r\n        <button class=\"btn btn-outline-dark\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"button_text") : depth0)) != null ? lookupProperty(stack1,"outline") : stack1), depth0))
    + "</button>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n    <div class=\"display-1\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":53,"column":27},"end":{"line":53,"column":36}}}) : helper)))
    + "</div>\r\n    <br>\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"children_display") : depth0),{"name":"with","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":58,"column":8},"end":{"line":62,"column":17}}})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n    <br>\r\n    <h6>"
    + alias4(((helper = (helper = lookupProperty(helpers,"header_text") || (depth0 != null ? lookupProperty(depth0,"header_text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header_text","hash":{},"data":data,"loc":{"start":{"line":66,"column":8},"end":{"line":66,"column":23}}}) : helper)))
    + "</h6>\r\n    <br>\r\n    <button class=\"btn btn-info\">"
    + alias4(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"button") : depth0)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</button>\r\n\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"display-4\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":59,"column":31},"end":{"line":59,"column":40}}}) : helper)))
    + "</div>\r\n        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":60,"column":11},"end":{"line":60,"column":19}}}) : helper)))
    + "</p>\r\n        <button class=\"btn btn-outline-warning\">"
    + alias4(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"button") : depth0)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</button>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <p class=\"text-uppercase\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":82,"column":30},"end":{"line":82,"column":39}}}) : helper)))
    + "</p>\r\n    <p class=\"text-lowercase\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":83,"column":30},"end":{"line":83,"column":38}}}) : helper)))
    + "</p>\r\n\r\n    <a href=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"button") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\" class=\"btn btn-link\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"button") : depth0)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</a><br><br>\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"list_name") : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":89,"column":8},"end":{"line":91,"column":17}}})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li><a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":90,"column":21},"end":{"line":90,"column":28}}}) : helper)))
    + "\" class=\"btn btn-link\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":90,"column":51},"end":{"line":90,"column":59}}}) : helper)))
    + "</a></li><br>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card\">\r\n  <div class=\"card-body\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"heading") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":41,"column":13}}})) != null ? stack1 : "")
    + "\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"nested_display") : depth0),{"name":"with","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":51,"column":4},"end":{"line":70,"column":13}}})) != null ? stack1 : "")
    + "\r\n\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n\r\n\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"paragraph") : depth0),{"name":"with","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":81,"column":4},"end":{"line":95,"column":13}}})) != null ? stack1 : "")
    + "  </div>\r\n</div>";
},"useData":true});