(function(window, undefined) {
    var
        doc = window.document,
        defualtStyle = "display:inline-block;",
        Textile = function(n) {
            var
                wordDiv,
                charDiv;
            this.words = [];
            this.chars = [];
            this.contentClone = n.innerHTML;
            this.n = n;
            n.innerHTML = '';
            var wordsArr = this.contentClone.split(' ');
            for (var i = 0, wordslen = wordsArr.length; i < wordslen;) {
                wordDiv = doc.createElement('div');
                wordDiv.style.cssText += defualtStyle;
                var word = wordsArr[i++],
                    charsArr = word.split('');
                for (var j = 0, charslen = charsArr.length; j < charslen;) {
                    charDiv = doc.createElement('div');
                    charDiv.style.cssText += defualtStyle;
                    charDiv.textContent = charsArr[j++];
                    wordDiv.appendChild(charDiv);
                    this.chars.push(charDiv);
                }
                n.appendChild(wordDiv);
                this.words.push(wordDiv);
                if (i !== wordslen) {
                    wordDiv.insertAdjacentHTML('afterEnd', ' ');
                }
            }
        }
    Textile.prototype.revert = function() {
        this.n.innerHTML = this.contentClone;
    }
    if (typeof window === "object" && typeof window.document === "object") {
        window.Textile = window.T = Textile;
    }
})(window);
/* ======================================== */

var node = document.querySelector('h2 a');
var text = new T(node);

function random(min, max) {
    return (Math.random() * (max - min)) + min;
}

text.chars.map(function(v, i) {
    TweenMax.from(v, 2.5, {
        opacity: 0,
        x: random(-500, 500),
        y: random(-500, 500),
        z: random(-500, 500),
        scale: .1,
        delay: i * .02,
        yoyo: true
    });
});