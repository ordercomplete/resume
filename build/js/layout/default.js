this["MyApp"]["templates"]["default"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n<html>\r\n\r\n<body>\r\n\r\n  <head>\r\n    <title>\r\n      "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? lookupProperty(stack1,"title") : stack1)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "\r\n    </title>\r\n    <meta charset='utf-8' />\r\n\r\n    <link href='css/normalize.css' rel='stylesheet' />\r\n\r\n    <link href='css/index.css' rel='stylesheet' />\r\n\r\n    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css\" rel=\"stylesheet\"\r\n      integrity=\"sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD\" crossorigin=\"anonymous\">\r\n\r\n    <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css\">\r\n\r\n    <script src=\"https://kit.fontawesome.com/0c753befba.js\" crossorigin=\"anonymous\"></script>\r\n  </head>\r\n\r\n  <div class=\"mainmenu\">"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"nav"),depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n\r\n  <main class=\"helpmargintop\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"body","hash":{},"data":data,"loc":{"start":{"line":34,"column":30},"end":{"line":34,"column":40}}}) : helper))) != null ? stack1 : "")
    + "</main>\r\n\r\n\r\n  <hr class=\"mt-5 mb-2\">\r\n\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"footer"),depth0,{"name":"footer","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js\"></script>\r\n\r\n</body>\r\n\r\n</html>";
},"usePartial":true,"useData":true});