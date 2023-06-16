this["MyApp"]["templates"]["task22"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"about_us") : depth0),{"name":"with","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":12,"column":15}}})) != null ? stack1 : "")
    + "    </div>\r\n  </div>\r\n\r\n  <br>\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"advantage") : depth0),{"name":"with","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":6},"end":{"line":61,"column":15}}})) != null ? stack1 : "")
    + "    </div>\r\n  </div>\r\n\r\n  <br>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"agreement") : depth0),{"name":"with","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":68,"column":6},"end":{"line":88,"column":15}}})) != null ? stack1 : "")
    + "    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"display-6 text-end\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"title_list") : depth0)) != null ? lookupProperty(stack1,"main") : stack1), depth0))
    + "</div><br>\r\n      <h2 class=\"text-end\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"title_list") : depth0)) != null ? lookupProperty(stack1,"sub") : stack1), depth0))
    + "</h2>\r\n      <button class=\"btn btn-outline-info\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"button") : depth0)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</button>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n      <div class=\"display-5 text-muted\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":22,"column":40},"end":{"line":22,"column":49}}}) : helper)))
    + "</div><br>\r\n\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"efficiency") : depth0),{"name":"with","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":10},"end":{"line":31,"column":19}}})) != null ? stack1 : "")
    + "        </div>\r\n      </div>\r\n      <br>\r\n\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"innovation") : depth0),{"name":"with","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":10},"end":{"line":43,"column":19}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n      <br>\r\n\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"collaboration") : depth0),{"name":"with","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":51,"column":10},"end":{"line":56,"column":19}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"display-4 text-muted \">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":27,"column":45},"end":{"line":27,"column":54}}}) : helper)))
    + "</div><br>\r\n          <h6>"
    + alias4(((helper = (helper = lookupProperty(helpers,"sub_title") || (depth0 != null ? lookupProperty(depth0,"sub_title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sub_title","hash":{},"data":data,"loc":{"start":{"line":28,"column":14},"end":{"line":28,"column":27}}}) : helper)))
    + "</h6><br>\r\n          <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":29,"column":13},"end":{"line":29,"column":28}}}) : helper)))
    + "</p><br>\r\n          <button class=\"btn btn-outline-warning\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"button") || (depth0 != null ? lookupProperty(depth0,"button") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"button","hash":{},"data":data,"loc":{"start":{"line":30,"column":50},"end":{"line":30,"column":60}}}) : helper)))
    + "</button>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"display-4 text-muted text-center\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":39,"column":56},"end":{"line":39,"column":65}}}) : helper)))
    + "</div><br>\r\n          <h6 class=\"text-center\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"sub_title") || (depth0 != null ? lookupProperty(depth0,"sub_title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sub_title","hash":{},"data":data,"loc":{"start":{"line":40,"column":34},"end":{"line":40,"column":47}}}) : helper)))
    + "</h6><br>\r\n          <p class=\"text-center\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":41,"column":33},"end":{"line":41,"column":48}}}) : helper)))
    + "</p><br>\r\n          <button class=\"btn btn-outline-warning\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"button") || (depth0 != null ? lookupProperty(depth0,"button") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"button","hash":{},"data":data,"loc":{"start":{"line":42,"column":50},"end":{"line":42,"column":60}}}) : helper)))
    + "</button>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"display-4 text-muted text-end\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":52,"column":53},"end":{"line":52,"column":62}}}) : helper)))
    + "</div><br>\r\n          <h6 class=\"text-end\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"sub_title") || (depth0 != null ? lookupProperty(depth0,"sub_title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sub_title","hash":{},"data":data,"loc":{"start":{"line":53,"column":31},"end":{"line":53,"column":44}}}) : helper)))
    + "</h6><br>\r\n          <p class=\"text-end\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":54,"column":30},"end":{"line":54,"column":45}}}) : helper)))
    + "</p><br>\r\n          <button class=\"btn btn-outline-warning\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"button") || (depth0 != null ? lookupProperty(depth0,"button") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"button","hash":{},"data":data,"loc":{"start":{"line":55,"column":50},"end":{"line":55,"column":60}}}) : helper)))
    + "</button>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n      <div class=\"display-5\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":70,"column":29},"end":{"line":70,"column":38}}}) : helper)))
    + "</div><br>\r\n\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"info") : depth0),{"name":"with","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":74,"column":10},"end":{"line":84,"column":19}}})) != null ? stack1 : "")
    + "        </div>\r\n      </div>\r\n\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <h5>"
    + alias1(((helper = (helper = lookupProperty(helpers,"sub_title") || (depth0 != null ? lookupProperty(depth0,"sub_title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"sub_title","hash":{},"data":data,"loc":{"start":{"line":75,"column":14},"end":{"line":75,"column":27}}}) : helper)))
    + "</h5>\r\n\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <p>"
    + alias1(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"detail") : depth0)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</p>\r\n              <button class=\"btn btn-success\">"
    + alias1(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"detail") : depth0)) != null ? lookupProperty(stack1,"button") : stack1), depth0))
    + "</button>\r\n            </div>\r\n          </div>\r\n\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div>\r\n  <h1 class=\"text-center\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"page_header") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</h1>\r\n  <p class=\"text-uppercase text-center\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"page_header") : depth0)) != null ? lookupProperty(stack1,"description") : stack1), depth0))
    + "</p><br>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"section") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":103,"column":11}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});