class NegociacaoController {

    constructor(){ //colocar os accessors dentro do constructor para evitar precisar acessar o document toda vez que uma nova negociação for criada
        //armazenar uma função em uma variável
        let $ = document.querySelector.bind(document) //bind é para manter 'document' como sendo a referência para o 'this' interno
        this._inputData = $('#data')
        this._inputQnt = $('#quantidade')
        this._inputValor = $('#valor')
        this._listaNegociacoes = new ListaNegociacoes()
        this._negociacoesView = new NegociacoesView($('#negociacoesView'))
        this._negociacoesView.update(this._listaNegociacoes)
        this._msg = new Mensagem()
        this._mensagemView = new MensagemView($('#paragrafo-msg'))
    }

    adicionar(event){
        event.preventDefault()
        console.log(this._inputData.value) //está criando um dia a menos na data por causa do fuso horário. uma solução seria faze um .split('-') da string da data e mandar um vetor [ano, mes, dia] para o construtor
        let neg = this._criaNegociacao()
        this._listaNegociacoes.adicionar(neg)
        
        console.log(neg)
        console.log(DateHelper.dateToString(neg.data))
        //console.log(DateHelper.stringToDate('26/05/2022')) //throws error
        console.log(this._listaNegociacoes.negociacoes)
        //this._limparFormulario()

        //atualizar o template da view com a partir da lista com o novo elemento
        this._negociacoesView.update(this._listaNegociacoes)
        
        //atualizar a msg e o template da mensagemView para incluir a nova msg
        this._msg.texto = 'Negociação adicionada com sucesso - total: ' + this._listaNegociacoes.negociacoes.length
        this._mensagemView.update(this._msg)
    }

    //exemplo usando o spread operator ... , split, e map
    //o spread operator transforma cada elemento de um vetor em um parâmetro da função chamada
    converterData() {
        let data = new Date(...
            this._inputData.value
            .split('-')
            .map(function(item, indice) {
                if(indice == 1) {
                    return item - 1;
                }
                return item;
            })
        );
        //console.log(data);
        return data
    }

    converterDataMenosVerboso() {
        let data = new Date(
            ...this._inputData.value
            .split('-')
            .map((item, indice) => item - indice % 2) //já subintende o return em 'return item - indice % 2'
        );
        //console.log(data);
        return data
    }

    _limparFormulario() {
        this._inputData.value = '';
        this._inputQnt.value = 1;
        this._inputValor.value = 0.0
        this._inputData.focus();
    }

    _criaNegociacao() {
        return new Negociacao (
            DateHelper.stringToDate(this._inputData.value),
            this._inputQnt.value,
            this._inputValor.value
        )
    }
}

//a função bind, presente em todas as funções, permite indicar qual 
//será o valor de this quando ela for executada