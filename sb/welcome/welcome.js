import "./welcome.css";

let module = angular.module("welcome", []);
require("../../app/component/an-hello").default(module);

testComponent(module);
anotherComponent(module);

function testComponent(ngModule) {
  ngModule.component("sbWelcome", {
    template: `<div class="welcome__card">
                  This demo component we build for you with Angular and SB.<br/>
                  You can change it <span>'sb/stories/welcome.js'</span> file.<br/>
                  For more information visit <a href="https://github.com/ui-storybook/sb" target="_blank">this page</a><br/>
                  And happy coding! 
              </div>`
  });
}

function anotherComponent(ngModule) {
  ngModule.component("anWelcome", {
    template: `<div class="welcome__card">
                  <marquee>Hello World</marquee>
                  This demo component we build for you with Angular and SB.<br/>
                  You can change it <span>'sb/stories/welcome.js'</span> file.<br/>
                  For more information visit <a href="https://github.com/ui-storybook/sb" target="_blank">this page</a><br/>
                  And happy coding! 
              </div>`
  });
}

export default module;
