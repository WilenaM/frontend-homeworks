import Marker from "./marker.js";

class FillMarker extends Marker {
    
    fill(amount) {
        const newAmount = amount+this.amount;
        if (newAmount>=100){
            this.amount=100
        } else {
            this.amount=newAmount;
        }
    }
}

export default FillMarker;