this["MyApp"]["templates"]["person"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n\r\n  <div class=\"card col-6\"\r\n    style=\"background-image: linear-gradient( 92.7deg,  rgba(245,212,212,1) 8.5%, rgba(252,251,224,1) 90.2% );\">\r\n    <div class=\"card-body\">\r\n      <div>\r\n        <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":14,"column":12},"end":{"line":14,"column":20}}}) : helper)))
    + "</h3>\r\n      </div>\r\n\r\n      <div>\r\n        <b>Age</b> - "
    + alias4(((helper = (helper = lookupProperty(helpers,"age") || (depth0 != null ? lookupProperty(depth0,"age") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"age","hash":{},"data":data,"loc":{"start":{"line":18,"column":21},"end":{"line":18,"column":28}}}) : helper)))
    + ", <b>gender</b> - "
    + alias4(((helper = (helper = lookupProperty(helpers,"gender") || (depth0 != null ? lookupProperty(depth0,"gender") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gender","hash":{},"data":data,"loc":{"start":{"line":18,"column":46},"end":{"line":18,"column":56}}}) : helper)))
    + "\r\n      </div>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"address") : depth0),{"name":"with","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":6},"end":{"line":29,"column":13}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"education") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":4},"end":{"line":44,"column":14}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"workExperience") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":4},"end":{"line":189,"column":13}}})) != null ? stack1 : "")
    + "  </section>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div>\r\n        <em>Address:</em> "
    + alias4(((helper = (helper = lookupProperty(helpers,"street") || (depth0 != null ? lookupProperty(depth0,"street") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"street","hash":{},"data":data,"loc":{"start":{"line":23,"column":26},"end":{"line":23,"column":36}}}) : helper)))
    + "; "
    + alias4(((helper = (helper = lookupProperty(helpers,"city") || (depth0 != null ? lookupProperty(depth0,"city") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data,"loc":{"start":{"line":23,"column":38},"end":{"line":23,"column":46}}}) : helper)))
    + "; "
    + alias4(((helper = (helper = lookupProperty(helpers,"state") || (depth0 != null ? lookupProperty(depth0,"state") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"state","hash":{},"data":data,"loc":{"start":{"line":23,"column":48},"end":{"line":23,"column":57}}}) : helper)))
    + "; "
    + alias4(((helper = (helper = lookupProperty(helpers,"zip") || (depth0 != null ? lookupProperty(depth0,"zip") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"zip","hash":{},"data":data,"loc":{"start":{"line":23,"column":59},"end":{"line":23,"column":66}}}) : helper)))
    + "; "
    + alias4(((helper = (helper = lookupProperty(helpers,"country") || (depth0 != null ? lookupProperty(depth0,"country") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"country","hash":{},"data":data,"loc":{"start":{"line":23,"column":68},"end":{"line":23,"column":79}}}) : helper)))
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <section>\r\n\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"card col-7 p-3\"\r\n      style=\"background-image: linear-gradient( 92.7deg,  rgba(245,212,212,1) 8.5%, rgba(252,251,224,1) 90.2% );\">\r\n      <div class=\"card-body\">\r\n        <h4>Education</h4>\r\n        <div>\r\n          <li><em>degree:</em> "
    + alias4(((helper = (helper = lookupProperty(helpers,"degree") || (depth0 != null ? lookupProperty(depth0,"degree") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"degree","hash":{},"data":data,"loc":{"start":{"line":37,"column":31},"end":{"line":37,"column":41}}}) : helper)))
    + "</li>\r\n          <li><em>major:</em> "
    + alias4(((helper = (helper = lookupProperty(helpers,"major") || (depth0 != null ? lookupProperty(depth0,"major") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"major","hash":{},"data":data,"loc":{"start":{"line":38,"column":30},"end":{"line":38,"column":39}}}) : helper)))
    + "</li>\r\n          <li><em>university:</em> "
    + alias4(((helper = (helper = lookupProperty(helpers,"university") || (depth0 != null ? lookupProperty(depth0,"university") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"university","hash":{},"data":data,"loc":{"start":{"line":39,"column":35},"end":{"line":39,"column":49}}}) : helper)))
    + "</li>\r\n          <li><em>graduation year:</em> "
    + alias4(((helper = (helper = lookupProperty(helpers,"graduationYear") || (depth0 != null ? lookupProperty(depth0,"graduationYear") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"graduationYear","hash":{},"data":data,"loc":{"start":{"line":40,"column":40},"end":{"line":40,"column":58}}}) : helper)))
    + "</li>\r\n        </div>\r\n      </div>\r\n    </div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n\r\n    <section>\r\n      <div class=\"card col-8 p-3\"\r\n        style=\"background-image: linear-gradient( 92.7deg,  rgba(245,212,212,1) 8.5%, rgba(252,251,224,1) 90.2% );\">\r\n        <div class=\"card-body\">\r\n          <h4>Work experience</h4>\r\n          <li><i>company:</i>\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"company") || (depth0 != null ? lookupProperty(depth0,"company") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"company","hash":{},"data":data,"loc":{"start":{"line":54,"column":12},"end":{"line":54,"column":23}}}) : helper)))
    + "</li>\r\n          <li><i>title:</i>\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":56,"column":12},"end":{"line":56,"column":21}}}) : helper)))
    + "</li>\r\n          <li><i>start date:</i>\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"startDate") || (depth0 != null ? lookupProperty(depth0,"startDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startDate","hash":{},"data":data,"loc":{"start":{"line":58,"column":12},"end":{"line":58,"column":25}}}) : helper)))
    + "</li>\r\n          <li><i>end date:</i>\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"endDate") || (depth0 != null ? lookupProperty(depth0,"endDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"endDate","hash":{},"data":data,"loc":{"start":{"line":60,"column":12},"end":{"line":60,"column":23}}}) : helper)))
    + "</li>\r\n          <li><i>responsibilities:</i>\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"responsibilities") || (depth0 != null ? lookupProperty(depth0,"responsibilities") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"responsibilities","hash":{},"data":data,"loc":{"start":{"line":62,"column":12},"end":{"line":62,"column":32}}}) : helper)))
    + "<br></li>\r\n          <li><i>year founded:</i>\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"year_founded") || (depth0 != null ? lookupProperty(depth0,"year_founded") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year_founded","hash":{},"data":data,"loc":{"start":{"line":64,"column":12},"end":{"line":64,"column":28}}}) : helper)))
    + "</li>\r\n          <li><i>industry:</i>\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"industry") || (depth0 != null ? lookupProperty(depth0,"industry") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"industry","hash":{},"data":data,"loc":{"start":{"line":66,"column":12},"end":{"line":66,"column":24}}}) : helper)))
    + "</li>\r\n        </div>\r\n      </div>\r\n\r\n      <section>\r\n        <div class=\"card col-9 p-3\"\r\n          style=\"background-image: linear-gradient( 92.7deg,  rgba(245,212,212,1) 8.5%, rgba(252,251,224,1) 90.2% );\">\r\n          <div class=\"card-body\">\r\n            <div class=\"mb-2\"><i><b>employees:</b></i></div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"employees") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":75,"column":12},"end":{"line":187,"column":15}}})) != null ? stack1 : "")
    + "    </section>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n            <li><em>name:</em>\r\n              "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":78,"column":14},"end":{"line":78,"column":22}}}) : helper)))
    + "</li>\r\n            <li><em>position:</em>\r\n              "
    + alias4(((helper = (helper = lookupProperty(helpers,"position") || (depth0 != null ? lookupProperty(depth0,"position") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"position","hash":{},"data":data,"loc":{"start":{"line":80,"column":14},"end":{"line":80,"column":26}}}) : helper)))
    + "</li>\r\n            <li><em>department:</em>\r\n              "
    + alias4(((helper = (helper = lookupProperty(helpers,"department") || (depth0 != null ? lookupProperty(depth0,"department") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"department","hash":{},"data":data,"loc":{"start":{"line":82,"column":14},"end":{"line":82,"column":28}}}) : helper)))
    + "</li>\r\n\r\n            <section>\r\n              <div class=\"mb-2\"><em><b>projects:</b></em></div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"projects") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":86,"column":14},"end":{"line":185,"column":17}}})) != null ? stack1 : "")
    + "      </section>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n              <li><em>name:</em>\r\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":89,"column":16},"end":{"line":89,"column":24}}}) : helper)))
    + "</li>\r\n              <li><em>description:</em>\r\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":91,"column":16},"end":{"line":91,"column":31}}}) : helper)))
    + "</li>\r\n              <li><em>status:</em>\r\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"status") || (depth0 != null ? lookupProperty(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data,"loc":{"start":{"line":93,"column":16},"end":{"line":93,"column":26}}}) : helper)))
    + "</li>\r\n\r\n              <section>\r\n                <div class=\"mb-2\"><em><b>teams:</b></em></div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"teams") : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":97,"column":16},"end":{"line":182,"column":19}}})) != null ? stack1 : "")
    + "        </section>\r\n\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div>\r\n                  <li><em>team name:</em>\r\n                    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"team_name") || (depth0 != null ? lookupProperty(depth0,"team_name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"team_name","hash":{},"data":data,"loc":{"start":{"line":100,"column":20},"end":{"line":100,"column":33}}}) : helper)))
    + "</li>\r\n\r\n                  <section>\r\n                    <em class=\"mb-2\"><b>team leader:</b></em>\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"team_leader") : depth0),{"name":"with","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":104,"column":20},"end":{"line":112,"column":27}}})) != null ? stack1 : "")
    + "                </div>\r\n\r\n              </section>\r\n            </section>\r\n          </div>\r\n        </div>\r\n        <section>\r\n          <div class=\"card col-10 p-3\"\r\n            style=\"background-image: linear-gradient( 92.7deg,  rgba(245,212,212,1) 8.5%, rgba(252,251,224,1) 90.2% );\">\r\n            <div class=\"card-body\">\r\n              <section>\r\n                <div class=\"mb-2\"><em><b>team members:</b></em></div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"team_members") : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":125,"column":16},"end":{"line":178,"column":23}}})) != null ? stack1 : "")
    + "            </div>\r\n          </div>\r\n\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <li><em>name:</em>\r\n                      "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":106,"column":22},"end":{"line":106,"column":30}}}) : helper)))
    + "</li>\r\n                    <li><em>title:</em>\r\n                      "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":108,"column":22},"end":{"line":108,"column":31}}}) : helper)))
    + "</li>\r\n                    <li><em>email:</em>\r\n                      "
    + alias4(((helper = (helper = lookupProperty(helpers,"email") || (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":110,"column":22},"end":{"line":110,"column":31}}}) : helper)))
    + "</li>\r\n                  </section>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n                <li><em>name:</em>\r\n                  "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":128,"column":18},"end":{"line":128,"column":26}}}) : helper)))
    + "</li>\r\n                <li><em>title:</em>\r\n                  "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":130,"column":18},"end":{"line":130,"column":27}}}) : helper)))
    + "</li>\r\n                <li><em>email:</em>\r\n                  "
    + alias4(((helper = (helper = lookupProperty(helpers,"email") || (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":132,"column":18},"end":{"line":132,"column":27}}}) : helper)))
    + "</li>\r\n                <section class=\"my-2 py-2\">\r\n                  <div class=\"mb-2\"><em><b>skills:</b></em></div>\r\n                  <div>"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"skills") : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":135,"column":23},"end":{"line":136,"column":47}}})) != null ? stack1 : "")
    + "\r\n                  </div>\r\n                </section>\r\n\r\n\r\n\r\n\r\n\r\n                <section class=\"m-0 py-0\">\r\n                  <section class=\"m-0 py-0\">\r\n                    <div class=\"mb-2 mt-0\"><em><b>projects:</b></em></div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"projects") : depth0),{"name":"each","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":147,"column":20},"end":{"line":176,"column":25}}})) != null ? stack1 : "")
    + "              </section>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "\r\n                    <li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li> ";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <li><em>name:</em>\r\n                      "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":149,"column":22},"end":{"line":149,"column":30}}}) : helper)))
    + "</li>\r\n                    <li><em>description:</em>\r\n                      "
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":151,"column":22},"end":{"line":151,"column":37}}}) : helper)))
    + "</li>\r\n                    <div class=\"my-2\"><em><b>technologies:</b></em></div>\r\n                    <div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"technologies") : depth0),{"name":"each","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":154,"column":22},"end":{"line":156,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\r\n\r\n                    <section>\r\n                      <div class=\"mb-2\"><em><b>team members:</b></em></div>\r\n                      <div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"team_members") : depth0),{"name":"each","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":162,"column":24},"end":{"line":171,"column":33}}})) != null ? stack1 : "")
    + "                      </div>\r\n                    </section>\r\n                  </section>\r\n                </section>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "                      <li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div>\r\n                          <li><em>name:</em>\r\n                            "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":165,"column":28},"end":{"line":165,"column":36}}}) : helper)))
    + "</li>\r\n                        </div>\r\n                        <div>\r\n                          <li><em>title:</em>\r\n                            "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":169,"column":28},"end":{"line":169,"column":37}}}) : helper)))
    + "</li>\r\n                        </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n<div>\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"person") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":191,"column":11}}})) != null ? stack1 : "")
    + "</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
},"useData":true});