class Section {
    constructor({items, renderer}, containerSelector) {
        this._initialArray = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);      
    }

    addItem(element) {
        this._container.append(element);
      }
    
    renderItems () {
        this._initialArray.forEach(item => {
            const element = this._renderer(item);
            this.addItem(element);
        });
    }
}

export default Section;