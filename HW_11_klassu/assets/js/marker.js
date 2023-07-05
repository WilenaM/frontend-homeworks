class Marker {
    constructor(color, amount) {
        this.colorCss = color;
        this.amount = amount;
        this.paintPerSympol = 0.5;
    }

    get color() {
       return this.colorCss; 
    }

    get paintAmount() {
        return this.amount + '%';
    }

    printText(text) {
        const symbolAmount = text.replaceAll(' ', '').length; 
        const paintForText = symbolAmount * this.paintPerSympol;
        
        if (this.amount >= paintForText) {
            this.amount = this.amount - paintForText;
            return `<p style="color: ${this.colorCss}">${text}</p>`
        } else {
            alert('Paint is not enough for this text');
            return ''
        }
    }
}