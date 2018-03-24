const angular = require("angular");
const ngModule = angular.module("app", []);

require("./component/kcd-hello").default(ngModule);
require("./component/an-hello").default(ngModule);
