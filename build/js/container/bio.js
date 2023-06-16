this["MyApp"]["templates"]["bio"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n  <div class=\"card\"\r\n    style=\"background-image: radial-gradient( circle 513px at 52.1% 52.6%,  rgba(240,241,163,1) 0%, rgba(236,135,135,1) 90% );\">\r\n    <div class=\"card-body\">\r\n      <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":7,"column":10},"end":{"line":7,"column":18}}}) : helper)))
    + "</h3>\r\n      <div>\r\n        <p>Birth date: "
    + alias4(((helper = (helper = lookupProperty(helpers,"birthdate") || (depth0 != null ? lookupProperty(depth0,"birthdate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"birthdate","hash":{},"data":data,"loc":{"start":{"line":9,"column":23},"end":{"line":9,"column":36}}}) : helper)))
    + "</p>\r\n        <p>Death place: "
    + alias4(((helper = (helper = lookupProperty(helpers,"deathplace") || (depth0 != null ? lookupProperty(depth0,"deathplace") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deathplace","hash":{},"data":data,"loc":{"start":{"line":10,"column":24},"end":{"line":10,"column":38}}}) : helper)))
    + "</p>\r\n        <p>Nationality: "
    + alias4(((helper = (helper = lookupProperty(helpers,"nationality") || (depth0 != null ? lookupProperty(depth0,"nationality") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nationality","hash":{},"data":data,"loc":{"start":{"line":11,"column":24},"end":{"line":11,"column":39}}}) : helper)))
    + "</p>\r\n        <p>Occupation: "
    + alias4(((helper = (helper = lookupProperty(helpers,"occupation") || (depth0 != null ? lookupProperty(depth0,"occupation") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"occupation","hash":{},"data":data,"loc":{"start":{"line":12,"column":23},"end":{"line":12,"column":37}}}) : helper)))
    + "</p>\r\n        <p>Known for:\r\n        <ul>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"known_for") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":10},"end":{"line":17,"column":19}}})) != null ? stack1 : "")
    + "        </ul>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"card\"\r\n    style=\"background-image: radial-gradient( circle 513px at 52.1% 52.6%,  rgba(240,241,163,1) 0%, rgba(236,135,135,1) 90% );\">\r\n    <div class=\"card-body text-end\">\r\n      <h4>Education:</h4>\r\n      <div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"education") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":8},"end":{"line":36,"column":17}}})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\"\r\n    style=\"background-image: radial-gradient( circle 513px at 52.1% 52.6%,  rgba(240,241,163,1) 0%, rgba(236,135,135,1) 90% );\">\r\n    <div class=\"card-body\">\r\n      <div>\r\n        <h4>Notable publications:</h4>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"notable_publications") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":46,"column":8},"end":{"line":54,"column":17}}})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\"\r\n    style=\"background-image: radial-gradient( circle 513px at 52.1% 52.6%,  rgba(240,241,163,1) 0%, rgba(236,135,135,1) 90% );\">\r\n    <div class=\"card-body\">\r\n      <div>\r\n        <h4>Partners:</h4>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"partners") : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":64,"column":8},"end":{"line":72,"column":17}}})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\"\r\n    style=\"background-image: radial-gradient( circle 513px at 52.1% 52.6%,  rgba(240,241,163,1) 0%, rgba(236,135,135,1) 90% );\">\r\n    <div class=\"card-body\">\r\n      <div>\r\n        <h4>Awards:</h4>\r\n        <p>"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"awards") : depth0),{"name":"each","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":82,"column":11},"end":{"line":88,"column":17}}})) != null ? stack1 : "")
    + "        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\"\r\n    style=\"background-image: radial-gradient( circle 513px at 52.1% 52.6%,  rgba(240,241,163,1) 0%, rgba(236,135,135,1) 90% );\">\r\n    <div class=\"row px-3\">\r\n      <div class=\"card-body col-4\">\r\n        <h4>Influences:</h4>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"influences") : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":99,"column":8},"end":{"line":101,"column":17}}})) != null ? stack1 : "")
    + "      </div>\r\n\r\n\r\n      <div class=\"card-body col-4\">\r\n        <h4>Influenced:</h4>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"influenced") : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":107,"column":8},"end":{"line":109,"column":17}}})) != null ? stack1 : "")
    + "      </div>\r\n\r\n      <div class=\"card-body col-4\">\r\n        <h4>Quotes:</h4>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"quotes") : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":114,"column":8},"end":{"line":116,"column":17}}})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"card\"\r\n    style=\"background-image: radial-gradient( circle 513px at 52.1% 52.6%,  rgba(240,241,163,1) 0%, rgba(236,135,135,1) 90% );\">\r\n    <div class=\"card-body\">\r\n      <div>\r\n        <h4>Major discoveries:</h4>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"major_discoveries") : depth0),{"name":"each","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":128,"column":8},"end":{"line":134,"column":17}}})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\"\r\n    style=\"background-image: radial-gradient( circle 513px at 52.1% 52.6%,  rgba(240,241,163,1) 0%, rgba(236,135,135,1) 90% );\">\r\n    <div class=\"card-body text-center\">\r\n      <div>\r\n        <h4>Contributions:</h4>\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"contributions") : depth0),{"name":"with","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":144,"column":8},"end":{"line":151,"column":17}}})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n  </div>\r\n\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "          <li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <p>Degree: "
    + alias4(((helper = (helper = lookupProperty(helpers,"degree") || (depth0 != null ? lookupProperty(depth0,"degree") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"degree","hash":{},"data":data,"loc":{"start":{"line":32,"column":19},"end":{"line":32,"column":29}}}) : helper)))
    + "</p>\r\n        <p>Field: "
    + alias4(((helper = (helper = lookupProperty(helpers,"field") || (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"field","hash":{},"data":data,"loc":{"start":{"line":33,"column":18},"end":{"line":33,"column":27}}}) : helper)))
    + "</p>\r\n        <p>Institution: "
    + alias4(((helper = (helper = lookupProperty(helpers,"institution") || (depth0 != null ? lookupProperty(depth0,"institution") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"institution","hash":{},"data":data,"loc":{"start":{"line":34,"column":24},"end":{"line":34,"column":39}}}) : helper)))
    + "</p>\r\n        <p>Year: "
    + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":35,"column":17},"end":{"line":35,"column":25}}}) : helper)))
    + "</p>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(data && lookupProperty(data,"last")),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":20},"end":{"line":47,"column":50}}})) != null ? stack1 : "")
    + "\">\r\n          <p>Title: "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":48,"column":20},"end":{"line":48,"column":29}}}) : helper)))
    + "</p>\r\n          <p>Year: "
    + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":49,"column":19},"end":{"line":49,"column":27}}}) : helper)))
    + "</p>\r\n          <p>Publisher: "
    + alias4(((helper = (helper = lookupProperty(helpers,"publisher") || (depth0 != null ? lookupProperty(depth0,"publisher") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"publisher","hash":{},"data":data,"loc":{"start":{"line":50,"column":24},"end":{"line":50,"column":37}}}) : helper)))
    + "</p>\r\n          "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(data && lookupProperty(data,"last")),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":51,"column":10},"end":{"line":52,"column":22}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return " text-end ";
},"9":function(container,depth0,helpers,partials,data) {
    return " ";
},"11":function(container,depth0,helpers,partials,data) {
    return "\r\n          <hr> ";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(data && lookupProperty(data,"last")),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":65,"column":20},"end":{"line":65,"column":50}}})) != null ? stack1 : "")
    + "\">\r\n          <p>Name: "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":66,"column":19},"end":{"line":66,"column":27}}}) : helper)))
    + "</p>\r\n          <p>Relationship: "
    + alias4(((helper = (helper = lookupProperty(helpers,"relationship") || (depth0 != null ? lookupProperty(depth0,"relationship") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"relationship","hash":{},"data":data,"loc":{"start":{"line":67,"column":27},"end":{"line":67,"column":43}}}) : helper)))
    + "</p>\r\n          <p>Years: "
    + alias4(((helper = (helper = lookupProperty(helpers,"years") || (depth0 != null ? lookupProperty(depth0,"years") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"years","hash":{},"data":data,"loc":{"start":{"line":68,"column":20},"end":{"line":68,"column":29}}}) : helper)))
    + "</p>\r\n          "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(data && lookupProperty(data,"last")),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":69,"column":10},"end":{"line":70,"column":22}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n        <div>\r\n          <p>Title: "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":84,"column":20},"end":{"line":84,"column":29}}}) : helper)))
    + "</p>\r\n          <p>Years: "
    + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":85,"column":20},"end":{"line":85,"column":28}}}) : helper)))
    + "</p>\r\n          <p>Description: "
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":86,"column":26},"end":{"line":86,"column":41}}}) : helper)))
    + "</p>\r\n        </div>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "        <li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li><br>\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div>\r\n          <p>Title: "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":130,"column":20},"end":{"line":130,"column":29}}}) : helper)))
    + "</p>\r\n          <p>Years: "
    + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":131,"column":20},"end":{"line":131,"column":28}}}) : helper)))
    + "</p>\r\n          <p>Description: "
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":132,"column":26},"end":{"line":132,"column":41}}}) : helper)))
    + "</p>\r\n        </div>\r\n";
},"21":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div>\r\n          <p>Title: "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":146,"column":20},"end":{"line":146,"column":29}}}) : helper)))
    + "</p>\r\n          <p>Years: "
    + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":147,"column":20},"end":{"line":147,"column":28}}}) : helper)))
    + "</p>\r\n          <p>Description: "
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":148,"column":26},"end":{"line":148,"column":41}}}) : helper)))
    + "</p>\r\n          <p>Field: "
    + alias4(((helper = (helper = lookupProperty(helpers,"field") || (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"field","hash":{},"data":data,"loc":{"start":{"line":149,"column":20},"end":{"line":149,"column":29}}}) : helper)))
    + "</p>\r\n        </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"row g-4\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"main") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":156,"column":11}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});