class Negociacao {

    constructor(data, qnt, valor){
        this._data = new Date(data) //atribuir o objeto por valor, não por referência para garantir que ele não pode ser alterado caso tenha-se o acesso à referência
        this._quantidade = qnt
        this._valor = valor
        //objeto imutável:
        Object.freeze(this)
        //esse freeze ^ é shallow. não aplica para objetos aninhados (então as propriedades do objeto data poderiam ser alterados)
        Object.freeze(this._data) //não adianta
    }

    getVolume() { //acessado como método
        return this._quantidade * this._valor
    }

    get data() { //acessado como atributo read-only
        return new Date(this._data)
    }

    get quantidade() { //acessado como atributo (read-only)
        return this._quantidade //literais não tem método set, então o FREEZE é o suficiente para garantir a imutabilidade
    }

    get valor() { //acessado como atributo (read-only)
        return this._valor //literais não tem método set, então o FREEZE é o suficiente para garantir a imutabilidade
    }
}