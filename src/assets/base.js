import ElementUI from "element-ui";

function Util(){
    let self = this;
    this.myAlert = (str) => {
        ElementUI.Message ({
            message: str
        });
    }
}
let UTIL = new Util();
export default {
    UTIL
}