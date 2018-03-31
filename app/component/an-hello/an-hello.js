import styles from "./styles.css";

export default ngModule => {
  ngModule.component("anHello", {
    template: require("./an-hello.html"),
    bindings: {
      user: "<",
      yell: "<",
      image: "<"
    },

    controller: function AnhelloController() {
      this.getUser = function() {
        if (this.yell) {
          return this.user.toUpperCase();
        } else {
          return this.user;
        }
      };
    }
  });
};
