class MensagemView extends View {

    constructor(element){
        super(element) //aproveitar função já implementada na classe pai
    }

    template(model) { //receberá um objeto da classe Mensagem
        return `<p class='alert alert-info'>${model.texto}</p>`
    }
}