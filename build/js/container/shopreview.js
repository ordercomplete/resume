this["MyApp"]["templates"]["shopreview"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body p-0\">\r\n        <div class=\"nav\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"links") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":10},"end":{"line":11,"column":19}}})) != null ? stack1 : "")
    + "        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"nav-item \">\r\n            <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"href") || (depth0 != null ? lookupProperty(depth0,"href") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data,"loc":{"start":{"line":9,"column":21},"end":{"line":9,"column":29}}}) : helper)))
    + "\" class=\"nav-link "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"href") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":47},"end":{"line":9,"column":84}}})) != null ? stack1 : "")
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":9,"column":86},"end":{"line":9,"column":94}}}) : helper)))
    + "</a>\r\n          </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return " disabled ";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"col-8\">\r\n    <h2 class=\"mb-3\">"
    + alias2(((helper = (helper = lookupProperty(helpers,"header") || (depth0 != null ? lookupProperty(depth0,"header") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"header","hash":{},"data":data,"loc":{"start":{"line":23,"column":21},"end":{"line":23,"column":31}}}) : helper)))
    + "</h2>\r\n    <p>"
    + alias2(alias3(((stack1 = (depth0 != null ? lookupProperty(depth0,"rating") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + ": "
    + alias2(alias3(((stack1 = (depth0 != null ? lookupProperty(depth0,"rating") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</p>\r\n\r\n    <div>\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"actionBlock") : depth0),{"name":"with","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":6},"end":{"line":50,"column":15}}})) != null ? stack1 : "")
    + "    </div>\r\n\r\n    <div class=\"my-5\">\r\n      <hr>\r\n    </div>\r\n\r\n    <div>\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"feedbackBlock") : depth0),{"name":"with","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":58,"column":6},"end":{"line":73,"column":15}}})) != null ? stack1 : "")
    + "    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"col-4 p-2 ps-0\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"goodsInfo") : depth0),{"name":"with","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":80,"column":4},"end":{"line":112,"column":13}}})) != null ? stack1 : "")
    + "\r\n  </div>\r\n\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"nav nav-tabs alert alert-dark\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"tabs") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":8},"end":{"line":34,"column":17}}})) != null ? stack1 : "")
    + "      </div>\r\n\r\n      <div class=\"my-5\">\r\n        <hr>\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"report") : depth0),{"name":"with","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":8},"end":{"line":47,"column":17}}})) != null ? stack1 : "")
    + "\r\n      </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"nav-item col-4\">\r\n          <a class=\"nav-link text-center"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isActive") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":40},"end":{"line":31,"column":80}}})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isActive") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":82},"end":{"line":32,"column":19}}})) != null ? stack1 : "")
    + " href=\"#\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":32,"column":29},"end":{"line":32,"column":37}}}) : helper)))
    + "</a>\r\n        </div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return " active disabled ";
},"10":function(container,depth0,helpers,partials,data) {
    return " active disabled\r\n            ";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"card-body\">\r\n          <p>"
    + alias1(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":44,"column":13},"end":{"line":44,"column":22}}}) : helper)))
    + "</p>\r\n          <button class=\"btn btn-secondary\" href=\""
    + alias1(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"button") : depth0)) != null ? lookupProperty(stack1,"link") : stack1), depth0))
    + "\">"
    + alias1(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"button") : depth0)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</button>\r\n        </div>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <h3 class=\"mt-5 mb-5\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":59,"column":28},"end":{"line":59,"column":37}}}) : helper)))
    + "</h3>\r\n      <table class=\"row my-4\">\r\n        <tr class=\"col-4\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"buttons") : depth0),{"name":"each","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":10},"end":{"line":69,"column":19}}})) != null ? stack1 : "")
    + "        </tr>\r\n      </table>\r\n\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <td>\r\n            <button\r\n              class=\"btn ms-2 me-1 "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isWarning") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":65,"column":35},"end":{"line":65,"column":71}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isSuccess") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":65,"column":72},"end":{"line":65,"column":108}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isDanger") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":65,"column":109},"end":{"line":65,"column":143}}})) != null ? stack1 : "")
    + "\"\r\n              href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":66,"column":20},"end":{"line":66,"column":28}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":66,"column":30},"end":{"line":66,"column":38}}}) : helper)))
    + "\r\n            </button>\r\n          </td>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    return " btn-warning";
},"18":function(container,depth0,helpers,partials,data) {
    return " btn-success";
},"20":function(container,depth0,helpers,partials,data) {
    return " btn-danger";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"card mb-3\">\r\n      <div class=\"card-body\">\r\n        <div class=\"col-6\">\r\n          <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"photo") || (depth0 != null ? lookupProperty(depth0,"photo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photo","hash":{},"data":data,"loc":{"start":{"line":84,"column":20},"end":{"line":84,"column":29}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":84,"column":36},"end":{"line":84,"column":44}}}) : helper)))
    + "\">\r\n        </div>\r\n        <h6 class=\"mt-3 mb-0\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":86,"column":30},"end":{"line":86,"column":38}}}) : helper)))
    + "</h6>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card mb-3\">\r\n      <div class=\"card-body \">\r\n        <h5>"
    + alias4(((helper = (helper = lookupProperty(helpers,"price") || (depth0 != null ? lookupProperty(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":93,"column":12},"end":{"line":93,"column":21}}}) : helper)))
    + "</h5>\r\n        "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inMarket") : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(25, data, 0),"data":data,"loc":{"start":{"line":94,"column":8},"end":{"line":94,"column":112}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"buttons") : depth0),{"name":"each","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":95,"column":8},"end":{"line":98,"column":17}}})) != null ? stack1 : "")
    + "\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"seller") : depth0),{"name":"with","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":106,"column":6},"end":{"line":110,"column":15}}})) != null ? stack1 : "")
    + "    </div>\r\n";
},"23":function(container,depth0,helpers,partials,data) {
    return " <p class=\"mb-0\">Є в наявності</p> ";
},"25":function(container,depth0,helpers,partials,data) {
    return " <p class=\"mb-0\">Немає в наявності</p>";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <button href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":96,"column":22},"end":{"line":96,"column":30}}}) : helper)))
    + "\"\r\n          class=\"btn mt-2"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isPrimary") : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":97,"column":25},"end":{"line":97,"column":61}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isSecondary") : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":97,"column":62},"end":{"line":97,"column":102}}})) != null ? stack1 : "")
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":97,"column":104},"end":{"line":97,"column":112}}}) : helper)))
    + "</button>\r\n";
},"28":function(container,depth0,helpers,partials,data) {
    return " btn-primary";
},"30":function(container,depth0,helpers,partials,data) {
    return " btn-secondary";
},"32":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"card-body\">\r\n        <div>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":108,"column":13},"end":{"line":108,"column":22}}}) : helper)))
    + ": <b>"
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":108,"column":27},"end":{"line":108,"column":36}}}) : helper)))
    + "</b> </div>\r\n      </div>\r\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"reviewItem"),depth0,{"name":"reviewItem","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"36":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card text-bg-success\">\r\n  <div class=\"card-body text-center\">\r\n    <h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":131,"column":8},"end":{"line":131,"column":17}}}) : helper)))
    + "</h2>\r\n    <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":132,"column":7},"end":{"line":132,"column":22}}}) : helper)))
    + "</p>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"buttons") : depth0),{"name":"each","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":133,"column":4},"end":{"line":135,"column":13}}})) != null ? stack1 : "")
    + "  </div>\r\n\r\n</div>\r\n";
},"37":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <button class=\"btn btn-primary\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":134,"column":42},"end":{"line":134,"column":50}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":134,"column":52},"end":{"line":134,"column":60}}}) : helper)))
    + "</button>\r\n";
},"39":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <td>\r\n        <button class=\"btn m-0 p-0\">\r\n          <div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(40, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":152,"column":12},"end":{"line":156,"column":21}}})) != null ? stack1 : "")
    + "          </div>\r\n        </button>\r\n      </td>\r\n";
},"40":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"nav\">\r\n              <a class=\"nav-link "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"last")),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":154,"column":33},"end":{"line":154,"column":63}}})) != null ? stack1 : "")
    + "\" href=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"link") : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"text") : depth0), depth0))
    + "</a>\r\n            </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"navigation") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":17,"column":9}}})) != null ? stack1 : "")
    + "\r\n\r\n<div class=\"row mt-5\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"formBlock") : depth0),{"name":"with","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":2},"end":{"line":116,"column":11}}})) != null ? stack1 : "")
    + "</div>\r\n\r\n<div class=\"my-4\">\r\n  <hr>\r\n</div>\r\n\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"reviewList") : depth0),{"name":"each","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":124,"column":0},"end":{"line":126,"column":9}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"service") : depth0),{"name":"with","hash":{},"fn":container.program(36, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":128,"column":0},"end":{"line":139,"column":9}}})) != null ? stack1 : "")
    + "\r\n<div class=\"my-5\">\r\n  <hr>\r\n</div>\r\n\r\n<div class=\"row g-5 ms-0\">\r\n  <table>\r\n    <tr>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"footer") : depth0),{"name":"each","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":148,"column":6},"end":{"line":160,"column":15}}})) != null ? stack1 : "")
    + "    </tr>\r\n  </table>\r\n</div>";
},"usePartial":true,"useData":true});