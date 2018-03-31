import styles from "./styles.css";

export default ngModule => {
  ngModule.component("kcdHello", {
    template: require("./kcd-hello.html"),

    controller: function KcdHelloController() {
      this.user = "Anthony";
      this.styles = styles;
    }
  });
};
