import styles from "./styles.css";

export default ngModule => {
  ngModule.component("anHello", {
    template: require("./an-hello.html"),

    controller: function AnhelloController() {
      this.user = "Anthony";
      this.styles = styles;
    }
  });
};
