class DateHelper {

    constructor() {
        throw new Error('Class cannot be instanciated')
    }

    static stringToDate(string) {
        //validar o formato da data usando RegExp
        if( ! /^\d{4}-\d{2}-\d{2}$/.test(string) )
            throw new Error('Data deve estar no formato aaaa-mm-dd')
        return new Date(...string.split('-').map((item, indice) => item - indice % 2));
    }

    static dateToString(date) {

        //usando template string:
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`

        //concateção comum
        return date.getDate()
            + '/' + (date.getMonth() + 1)
            + '/' + date.getFullYear();
    }
}