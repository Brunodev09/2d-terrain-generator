let _this;
window.references = {};
window.references.gc = {};

class GameController {
    constructor(worldInstance, renderInstance) {
        this.fps = 100;
        this.worldInstance = worldInstance;
        this.renderInstance = renderInstance
        window.references.gc = this;
    }

    start() {
        setInterval(this.update, this.fps);
    }

    update() {
        window.references.gc.render();
        window.references.gc.keyboardController();
    }

    render() {
        if (!this.worldInstance) console.log('GC | No instance of the World class has been found!');
        this.renderInstance.clear();
        this.worldInstance.worldRender();
    }

    keyboardController() {
        document.addEventListener('keydown', (event) => {
            if (event.keyCode === 37) {

            } else if (event.keyCode === 39) {

            }
        });
    }

}