//modelo genérico de view (não existe classe abstrata no js)
class View {

    constructor(element){
        this._element = element
    }

    template() { 
        throw new Error ('Função template() deve ser implementada.')
    }

    update(model){
        this._element.innerHTML = this.template(model)
    }
}