const text = document.querySelector("#replaceStrings"),
    words = [" Game Developer. "," Dreamer. "," Programmer. "," Problem Solver. "," Creator. ", " Learner. "];

function setTyper(e, t) {
    const n = 75,
        r = 2e3,
        o = 0,
        s = 1;
    var c, l = o,
        a = 0,
        i = 0;

    function u() {
        c = setInterval(v, n)
    }

    function v() {
        const n = t[a];
        l == o ? ++i == n.length && (l = s, clearInterval(c), setTimeout(u, r)) : l == s && 0 == --i && (i = 0, l = o, ++a == t.length && (a = 0));
        const v = n.substring(0, i);
        e.textContent = v
    }
    u()
}
$(document).ready(setTyper(text, words));


