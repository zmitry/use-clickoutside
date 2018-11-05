"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var onMount = [];
function useOutsideClick(cb, event, ref) {
    if (event === void 0) { event = "click"; }
    if (ref === void 0) { ref = null; }
    ref = ref || react_1.useRef(null);
    react_1.useEffect(function () {
        function handleClickOutside(e) {
            if ((!ref.current || !ref.current.contains(e.target)) && cb) {
                cb(e);
            }
        }
        document.addEventListener(event, handleClickOutside, true);
        return function () { return document.removeEventListener(event, handleClickOutside, true); };
    }, onMount);
    return ref;
}
exports.default = useOutsideClick;
