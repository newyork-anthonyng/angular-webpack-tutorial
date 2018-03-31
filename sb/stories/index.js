import "ui-storybook/sb";
import "ui-storybook/stories";

// Hot reload support
if (module.hot) {
  module.hot.accept();
  window.sb.reload();
}

// Write your stories here

let overview = sb.section("Welcome section");
overview
  .story("SB demo component")
  .add("Hello text", "<sb-welcome></sb-welcome>")
  .add("An component", "<an-welcome></an-welcome>")
  .add(
    "Custom hello",
    "<an-hello image='vm.image' user='vm.user' yell='vm.yell'></an-hello>",
    {
      user: "Anthony",
      yell: true,
      image: "https://unsplash.it/400/215/?random"
    }
  );
