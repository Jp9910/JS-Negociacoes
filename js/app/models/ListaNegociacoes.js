class ListaNegociacoes {
    
    constructor(){
        this._negociacoes = []
    }

    adicionar(negociacao) {
        this._negociacoes.push(negociacao)
    }
    
    get negociacoes() {
        //retornar uma cópia do array para evitar mudar a variável por referência
        return [].concat(this._negociacoes)
    }
}