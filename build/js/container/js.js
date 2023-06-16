this["MyApp"]["templates"]["js"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n        <p>year - "
    + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":14,"column":18},"end":{"line":14,"column":26}}}) : helper)))
    + "</p>\r\n        <p>founder- "
    + alias4(((helper = (helper = lookupProperty(helpers,"founder") || (depth0 != null ? lookupProperty(depth0,"founder") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"founder","hash":{},"data":data,"loc":{"start":{"line":15,"column":20},"end":{"line":15,"column":31}}}) : helper)))
    + "</p>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "\r\n          <li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n            <div class=\"col-3\">\r\n              <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                  <section>\r\n                    <b>variables:</b>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"variables") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":20},"end":{"line":52,"column":29}}})) != null ? stack1 : "")
    + "\r\n                  </section>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-3\">\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"col-3\">\r\n              <div class=\"card py-4\">\r\n                <div class=\"card-body\">\r\n                  <section>\r\n                    <b>functions:</b>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"functions") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":69,"column":20},"end":{"line":71,"column":29}}})) != null ? stack1 : "")
    + "                  </section>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-3\">\r\n\r\n            </div>\r\n\r\n            <div class=\"col-3\">\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"col-3\">\r\n              <div class=\"card\">\r\n                <div class=\"card-body px-2\">\r\n                  <section>\r\n                    <b>conditionals:</b>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"conditionals") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":92,"column":20},"end":{"line":94,"column":29}}})) != null ? stack1 : "")
    + "\r\n                  </section>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-3\">\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"col-3\">\r\n              <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                  <section>\r\n                    <b>loops:</b>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"loops") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":112,"column":20},"end":{"line":114,"column":29}}})) != null ? stack1 : "")
    + "\r\n                  </section>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-3\">\r\n\r\n            </div>\r\n\r\n            <div class=\"col-3\">\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"col-3\">\r\n              <div class=\"card py-4\">\r\n                <div class=\"card-body\">\r\n                  <section>\r\n                    <b>classes:</b>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"classes") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":136,"column":20},"end":{"line":138,"column":29}}})) != null ? stack1 : "")
    + "\r\n                  </section>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-3\">\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "                    <li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "          <li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <li>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":228,"column":14},"end":{"line":228,"column":22}}}) : helper)))
    + " ("
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":228,"column":24},"end":{"line":228,"column":32}}}) : helper)))
    + ")</li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div>\r\n  <div class=\"alert alert-danger\">\r\n    <h1>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":3,"column":16}}}) : helper)))
    + "</h1>\r\n    <h2><q>"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":4,"column":11},"end":{"line":4,"column":26}}}) : helper)))
    + "</q></h2>\r\n  </div>\r\n\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h3>History:</h3>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <h4>"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"history") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":16,"column":17}}})) != null ? stack1 : "")
    + "      </h4>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <section>\r\n\r\n    <div class=\"card mb-3\">\r\n      <div class=\"card-body\">\r\n        <h4>Types:</h4>\r\n        <h5>"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"types") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":12},"end":{"line":29,"column":19}}})) != null ? stack1 : "")
    + "        </h5>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mb-3\">\r\n      <div class=\"card p-0\">\r\n        <div class=\"card-body p-0\">\r\n          <div class=\"row g-3 p-3\">\r\n\r\n\r\n            <h5>Syntax:</h5>\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"syntax") : depth0),{"name":"with","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":12},"end":{"line":158,"column":15}}})) != null ? stack1 : "")
    + "    </div>\r\n\r\n    <div class=\"card mb-3\">\r\n      <div class=\"card-body\">\r\n        <section>\r\n          <h5>Features:</h5>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"features") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":166,"column":10},"end":{"line":168,"column":19}}})) != null ? stack1 : "")
    + "\r\n        </section>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"row mb-3\">\r\n      <div class=\"card p-0\">\r\n        <div class=\"card-body p-0\">\r\n          <div class=\"row gx-3\">\r\n\r\n\r\n            <div class=\"col-6\">\r\n              <div class=\"card my-3 ms-3\">\r\n                <div class=\"card-body m-0\">\r\n                  <section>\r\n                    <h5>Libraries:</h5>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"libraries") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":189,"column":20},"end":{"line":191,"column":29}}})) != null ? stack1 : "")
    + "\r\n                  </section>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-6\">\r\n              <div class=\"card my-3 me-3\">\r\n                <div class=\"card-body m-0\">\r\n                  <section>\r\n                    <h5>Tools:</h5>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"tools") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":205,"column":20},"end":{"line":207,"column":29}}})) != null ? stack1 : "")
    + "\r\n                  </section>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"alert alert-dark\">\r\n      <div class=\"card-body\">\r\n        <section>\r\n          <h5>Community:</h5>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"community") : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":227,"column":10},"end":{"line":229,"column":19}}})) != null ? stack1 : "")
    + "\r\n        </section>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </section>\r\n</div>";
},"useData":true});