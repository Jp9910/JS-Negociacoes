class NegociacoesView extends View {

    /*
    constructor(elemento) {
        this._elemento = elemento //Uncaught ReferenceError: must call super constructor before using 'this' in derived class constructor
    }
    */

    constructor(elemento) {
        super(elemento)
        //esta classe então terá um atributo '_element', que está no construtor pai
        //todos os atributos que estão no construtor pai terão que ser passados
    }

    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${
                    model.negociacoes.map((neg) => {
                        return `
                            <tr>
                                <td>${DateHelper.dateToString(neg.data)}</td>
                                <td>${neg.quantidade}</td>
                                <td>${neg.valor}</td>
                                <td>${neg.getVolume()}</td>
                            </tr>
                        `
                    }).join('')
                }
            </tbody>
            
            <tfoot>
                <td colspan="3"></td>
                <td>
                    ${model.negociacoes.reduce(function(total, n) {
                        return total + n.getVolume();
                    }, 0.0)}
                </td>
            </tfoot>
        </table>
        `
    }
}
/**
 * Observe que não manipulamos o DOM de maneira imperativa, em vez disso, 
 * fizemos de maneira declarativa. Nós declaramos o template, ele recebeu
 * um modelo e com base nos dados do modelo, usamos a template string.
 */



/** "gambiarra" pra calcular o volume total
<tfoot>
    <td colspan="3"></td>
    <td>
      ${
        (function() {

            let total = 0;
            model.negociacoes.forEach(n => total+= n.volume);
            return total;
      })()
     }
   </td>
</tfoot>
 */

/**
 * A função reduce recebe dois parâmetros: uma função e um valor inicial. 
 * Na função interna ao reduce, o primeiro parâmetro é o valor da última
 * iteração, que neste caso é o total. O segundo parâmetro é o valor da iteração atual, 
 */

/*

numeros.reduce(function(total,num) {
    return total * num;
}, 1);

<é igual a> 

numeros.reduce((total, num) => total * num , 1);

*/