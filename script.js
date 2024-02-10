const textarea = document.getElementById('message');
const charLimit = 600;
const charCount = document.getElementById('char-count');

textarea.addEventListener('input', function() {
    const message = this.value;
    const charCountDisplay = message.length;
    const charLeft = charLimit - charCountDisplay;

    if (charLeft < 0) {
        this.value = this.value.substring(0, charLimit);
        return;
    }

    charCount.textContent = charLeft + ' characters left (' + charCountDisplay + '/' + charLimit + ')';
});
