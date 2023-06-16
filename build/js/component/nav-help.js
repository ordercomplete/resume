this["MyApp"]["templates"]["nav-help"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<nav>\r\n    <div class=\"nav navhelpgradient\">\r\n        <div class=\"nav-item mb-1\">\r\n            <button class=\"btn btn-outline-primary p-0 my-1\">"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"link-nav"),depth0,{"name":"link-nav","hash":{"noLine":true,"line":true,"href":"/","text":"Main"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</button>\r\n            |\r\n            <button class=\"btn btn-outline-danger p-0 my-1\">"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"link-nav"),depth0,{"name":"link-nav","hash":{"noLine":true,"line":true,"href":"/css-help-1","text":"Help 1"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</button>\r\n            <button class=\"btn btn-outline-danger p-0 my-1\">"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"link-nav"),depth0,{"name":"link-nav","hash":{"noLine":true,"line":true,"href":"/help/css-help-2","text":"Help 2"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</button>\r\n            <button class=\"btn btn-outline-danger p-0 my-1\">"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"link-nav"),depth0,{"name":"link-nav","hash":{"noLine":true,"line":true,"href":"/help/css-help-3","text":"Help 3"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</button>\r\n            <button class=\"btn btn-outline-danger p-0 my-1\">"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"link-nav"),depth0,{"name":"link-nav","hash":{"noLine":true,"line":true,"href":"/help/css-help-4","text":"Help 4"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</button>\r\n\r\n        </div>\r\n    </div>\r\n</nav>";
},"usePartial":true,"useData":true});