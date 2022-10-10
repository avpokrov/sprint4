class Section {
    constructor({item, renderer}, containerSelector) {
        this._item = item;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);      
    }

    addItem(element) {
        this._container.prepend(element);
    }
    
    renderItems () {        
        const element = this._renderer(this._item);
        this.addItem(element);
    };
}


export default Section;