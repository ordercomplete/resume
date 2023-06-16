this["MyApp"]["templates"]["mac"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n        <div class=\"card\"\r\n          style=\"background-image: linear-gradient( 89.5deg,  rgba(4,29,55,1) -0.1%, rgba(2,67,135,1) 25.1%, rgba(28,133,243,1) 49.6%, rgba(115,181,250,1) 74.5%, rgba(214,239,253,1) 99.3% );\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row g-3\">\r\n\r\n              <div class=\"col-6\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                    <h5>Processor</h5>\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"processor") : depth0),{"name":"with","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":20},"end":{"line":32,"column":29}}})) != null ? stack1 : "")
    + "                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-6\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                    <h5>Memory</h5>\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"memory") : depth0),{"name":"with","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":20},"end":{"line":47,"column":29}}})) != null ? stack1 : "")
    + "                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-6\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                    <h5>Storage</h5>\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"storage") : depth0),{"name":"with","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":20},"end":{"line":61,"column":29}}})) != null ? stack1 : "")
    + "                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-6\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                    <h5>Display</h5>\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"display") : depth0),{"name":"with","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":20},"end":{"line":79,"column":29}}})) != null ? stack1 : "")
    + "                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-6\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                    <h5>Graphics</h5>\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"graphics") : depth0),{"name":"with","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":88,"column":20},"end":{"line":94,"column":29}}})) != null ? stack1 : "")
    + "                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-12\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                    <h5>ports</h5>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"ports") : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":103,"column":20},"end":{"line":116,"column":29}}})) != null ? stack1 : "")
    + "                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"col-6\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                    <h5>Battery</h5>\r\n                    <section>\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"battery") : depth0),{"name":"with","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":127,"column":22},"end":{"line":131,"column":31}}})) != null ? stack1 : "")
    + "                    </section>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-6\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                    <h5>Weight:</h5>\r\n                    <section>\r\n                      <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"weight") || (depth0 != null ? lookupProperty(depth0,"weight") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"weight","hash":{},"data":data,"loc":{"start":{"line":142,"column":25},"end":{"line":142,"column":35}}}) : helper)))
    + "</p>\r\n                    </section>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-6\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                    <h5>Dimensions:</h5>\r\n                    <section>\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"dimensions") : depth0),{"name":"with","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":153,"column":22},"end":{"line":157,"column":31}}})) != null ? stack1 : "")
    + "                    </section>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-6\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                    <h5>Operating system:</h5>\r\n                    <section>\r\n                      <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"operating_system") || (depth0 != null ? lookupProperty(depth0,"operating_system") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"operating_system","hash":{},"data":data,"loc":{"start":{"line":168,"column":25},"end":{"line":168,"column":45}}}) : helper)))
    + "</p>\r\n                    </section>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-12\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                    <h5>accessories</h5>\r\n                    <section>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"accessories") : depth0),{"name":"each","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":179,"column":22},"end":{"line":186,"column":31}}})) != null ? stack1 : "")
    + "                    </section>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <section>\r\n                      <p>brand: "
    + alias4(((helper = (helper = lookupProperty(helpers,"brand") || (depth0 != null ? lookupProperty(depth0,"brand") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"brand","hash":{},"data":data,"loc":{"start":{"line":26,"column":32},"end":{"line":26,"column":41}}}) : helper)))
    + "</p>\r\n                      <p>model: "
    + alias4(((helper = (helper = lookupProperty(helpers,"model") || (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"model","hash":{},"data":data,"loc":{"start":{"line":27,"column":32},"end":{"line":27,"column":41}}}) : helper)))
    + "</p>\r\n                      <p>speed: "
    + alias4(((helper = (helper = lookupProperty(helpers,"speed") || (depth0 != null ? lookupProperty(depth0,"speed") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"speed","hash":{},"data":data,"loc":{"start":{"line":28,"column":32},"end":{"line":28,"column":41}}}) : helper)))
    + "</p>\r\n                      <p>cores: "
    + alias4(((helper = (helper = lookupProperty(helpers,"cores") || (depth0 != null ? lookupProperty(depth0,"cores") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cores","hash":{},"data":data,"loc":{"start":{"line":29,"column":32},"end":{"line":29,"column":41}}}) : helper)))
    + "</p>\r\n                      <p>cache: "
    + alias4(((helper = (helper = lookupProperty(helpers,"cache") || (depth0 != null ? lookupProperty(depth0,"cache") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cache","hash":{},"data":data,"loc":{"start":{"line":30,"column":32},"end":{"line":30,"column":41}}}) : helper)))
    + "</p>\r\n                    </section>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <section>\r\n                      <p>type: "
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":43,"column":31},"end":{"line":43,"column":39}}}) : helper)))
    + "</p>\r\n                      <p>size: "
    + alias4(((helper = (helper = lookupProperty(helpers,"size") || (depth0 != null ? lookupProperty(depth0,"size") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"size","hash":{},"data":data,"loc":{"start":{"line":44,"column":31},"end":{"line":44,"column":39}}}) : helper)))
    + "</p>\r\n                      <p>speed: "
    + alias4(((helper = (helper = lookupProperty(helpers,"speed") || (depth0 != null ? lookupProperty(depth0,"speed") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"speed","hash":{},"data":data,"loc":{"start":{"line":45,"column":32},"end":{"line":45,"column":41}}}) : helper)))
    + "</p>\r\n                    </section>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <section>\r\n                      <p>type: "
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":58,"column":31},"end":{"line":58,"column":39}}}) : helper)))
    + "</p>\r\n                      <p>size: "
    + alias4(((helper = (helper = lookupProperty(helpers,"size") || (depth0 != null ? lookupProperty(depth0,"size") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"size","hash":{},"data":data,"loc":{"start":{"line":59,"column":31},"end":{"line":59,"column":39}}}) : helper)))
    + "</p>\r\n                    </section>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <section>\r\n                      <p>size: "
    + alias4(((helper = (helper = lookupProperty(helpers,"size") || (depth0 != null ? lookupProperty(depth0,"size") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"size","hash":{},"data":data,"loc":{"start":{"line":72,"column":31},"end":{"line":72,"column":39}}}) : helper)))
    + "</p>\r\n                      <p>resolution: "
    + alias4(((helper = (helper = lookupProperty(helpers,"resolution") || (depth0 != null ? lookupProperty(depth0,"resolution") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"resolution","hash":{},"data":data,"loc":{"start":{"line":73,"column":37},"end":{"line":73,"column":51}}}) : helper)))
    + "</p>\r\n                      <p>technology: "
    + alias4(((helper = (helper = lookupProperty(helpers,"technology") || (depth0 != null ? lookupProperty(depth0,"technology") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"technology","hash":{},"data":data,"loc":{"start":{"line":74,"column":37},"end":{"line":74,"column":51}}}) : helper)))
    + "</p>\r\n                      <p>color space: "
    + alias4(((helper = (helper = lookupProperty(helpers,"color_space") || (depth0 != null ? lookupProperty(depth0,"color_space") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color_space","hash":{},"data":data,"loc":{"start":{"line":75,"column":38},"end":{"line":75,"column":53}}}) : helper)))
    + "</p>\r\n                      <p>brightness: "
    + alias4(((helper = (helper = lookupProperty(helpers,"brightness") || (depth0 != null ? lookupProperty(depth0,"brightness") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"brightness","hash":{},"data":data,"loc":{"start":{"line":76,"column":37},"end":{"line":76,"column":51}}}) : helper)))
    + "</p>\r\n                      <p>refresh rate: "
    + alias4(((helper = (helper = lookupProperty(helpers,"refresh_rate") || (depth0 != null ? lookupProperty(depth0,"refresh_rate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"refresh_rate","hash":{},"data":data,"loc":{"start":{"line":77,"column":39},"end":{"line":77,"column":55}}}) : helper)))
    + "</p>\r\n                    </section>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <section>\r\n                      <p>brand: "
    + alias4(((helper = (helper = lookupProperty(helpers,"brand") || (depth0 != null ? lookupProperty(depth0,"brand") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"brand","hash":{},"data":data,"loc":{"start":{"line":90,"column":32},"end":{"line":90,"column":41}}}) : helper)))
    + "</p>\r\n                      <p>model: "
    + alias4(((helper = (helper = lookupProperty(helpers,"model") || (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"model","hash":{},"data":data,"loc":{"start":{"line":91,"column":32},"end":{"line":91,"column":41}}}) : helper)))
    + "</p>\r\n                      <p>speed: "
    + alias4(((helper = (helper = lookupProperty(helpers,"speed") || (depth0 != null ? lookupProperty(depth0,"speed") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"speed","hash":{},"data":data,"loc":{"start":{"line":92,"column":32},"end":{"line":92,"column":41}}}) : helper)))
    + "</p>\r\n                    </section>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <section>\r\n                      <p>type: "
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":105,"column":31},"end":{"line":105,"column":39}}}) : helper)))
    + "</p>\r\n                      <p>count: "
    + alias4(((helper = (helper = lookupProperty(helpers,"count") || (depth0 != null ? lookupProperty(depth0,"count") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"count","hash":{},"data":data,"loc":{"start":{"line":106,"column":32},"end":{"line":106,"column":41}}}) : helper)))
    + "</p>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"features") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":107,"column":22},"end":{"line":114,"column":29}}})) != null ? stack1 : "")
    + "                    </section>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      <p>features:</p>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"features") : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":109,"column":22},"end":{"line":113,"column":31}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    return "                      <ul>\r\n                        <li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\r\n                      </ul>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      <p>type: "
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":128,"column":31},"end":{"line":128,"column":39}}}) : helper)))
    + "</p>\r\n                      <p>capacity: "
    + alias4(((helper = (helper = lookupProperty(helpers,"capacity") || (depth0 != null ? lookupProperty(depth0,"capacity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"capacity","hash":{},"data":data,"loc":{"start":{"line":129,"column":35},"end":{"line":129,"column":47}}}) : helper)))
    + "</p>\r\n                      <p>life: "
    + alias4(((helper = (helper = lookupProperty(helpers,"life") || (depth0 != null ? lookupProperty(depth0,"life") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"life","hash":{},"data":data,"loc":{"start":{"line":130,"column":31},"end":{"line":130,"column":39}}}) : helper)))
    + "</p>\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      <p>height: "
    + alias4(((helper = (helper = lookupProperty(helpers,"height") || (depth0 != null ? lookupProperty(depth0,"height") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"height","hash":{},"data":data,"loc":{"start":{"line":154,"column":33},"end":{"line":154,"column":43}}}) : helper)))
    + "</p>\r\n                      <p>width: "
    + alias4(((helper = (helper = lookupProperty(helpers,"width") || (depth0 != null ? lookupProperty(depth0,"width") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"width","hash":{},"data":data,"loc":{"start":{"line":155,"column":32},"end":{"line":155,"column":41}}}) : helper)))
    + "</p>\r\n                      <p>depth: "
    + alias4(((helper = (helper = lookupProperty(helpers,"depth") || (depth0 != null ? lookupProperty(depth0,"depth") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"depth","hash":{},"data":data,"loc":{"start":{"line":156,"column":32},"end":{"line":156,"column":41}}}) : helper)))
    + "</p>\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      <section>\r\n                        <p>name: "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":181,"column":33},"end":{"line":181,"column":41}}}) : helper)))
    + "</p>\r\n                        <p>price: "
    + alias4(((helper = (helper = lookupProperty(helpers,"price") || (depth0 != null ? lookupProperty(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":182,"column":34},"end":{"line":182,"column":43}}}) : helper)))
    + "</p>\r\n                        "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(data && lookupProperty(data,"last")),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.program(23, data, 0),"data":data,"loc":{"start":{"line":183,"column":24},"end":{"line":184,"column":35}}})) != null ? stack1 : "")
    + "\r\n                      </section>\r\n";
},"21":function(container,depth0,helpers,partials,data) {
    return " ";
},"23":function(container,depth0,helpers,partials,data) {
    return "\r\n                        <hr>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div>\r\n\r\n  <div class=\"card\"\r\n    style=\"background-image: linear-gradient( 87.6deg,  rgba(241,16,48,1) 1.7%, rgba(242,171,33,1) 13.3%, rgba(226,242,33,1) 24.5%, rgba(12,207,22,1) 34.8%, rgba(75,205,200,1) 47.2%, rgba(8,39,211,1) 58.9%, rgba(150,101,229,1) 67.6%, rgba(80,6,198,1) 78.1%, rgba(246,98,248,1) 89.2%, rgba(248,98,181,1) 103.3%, rgba(228,129,144,1) 113.9% );\">\r\n    <div class=\"card-body\">\r\n\r\n      <h1>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":7,"column":10},"end":{"line":7,"column":18}}}) : helper)))
    + "</h1>\r\n      <h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":8,"column":10},"end":{"line":8,"column":25}}}) : helper)))
    + "</h2>\r\n      <h3>price: "
    + alias4(((helper = (helper = lookupProperty(helpers,"price") || (depth0 != null ? lookupProperty(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":9,"column":17},"end":{"line":9,"column":26}}}) : helper)))
    + " 👀</h3>\r\n      <h4>category - "
    + alias4(((helper = (helper = lookupProperty(helpers,"category") || (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data,"loc":{"start":{"line":10,"column":21},"end":{"line":10,"column":33}}}) : helper)))
    + "</h4>\r\n      <section>\r\n        <h4>Features</h4>\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"features") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":191,"column":23}}})) != null ? stack1 : "")
    + "            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n    </div>\r\n  </div>\r\n</div>";
},"useData":true});