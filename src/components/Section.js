class Section {
    constructor({renderer}, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);      
    }

    addCards(cards){
        cards.forEach(card => {
            const renderedCard = this.renderItems(card);
            this.addItem(renderedCard);
        });
    }
    
    renderItems(item) {        
        const element = this._renderer(item);
        return element;
    };

    addItem(element) {
        this._container.prepend(element);
    }
}


export default Section;