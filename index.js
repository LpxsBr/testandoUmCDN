class Teste {

    id = null

    constructor(id) {
        this.id = id;
        this.createCanva()
    }

    createCanva() {

        if (!this.id || typeof this.id == 'undefined') {
            return console.log('você precisar enviar um id para criar o canvas do gráfico');
        }

        const newCanva = document.createElement('canvas')

        newCanva.id = this.id
        newCanva.style.backgroundColor = 'green'

        // captura o elemento com o id atribuido
        // o 'child' é o seu canvas
        const child = document.getElementById(this.id);

        if (!child || typeof child.parentElement == 'undefined') {
            return null
        }

        const father = child.parentElement.id && '#' + child.parentElement.id || child.parentElement.className && '.' + child.parentElement.className || child.parentElement.tagName

        console.log(father);


        if (typeof father == "undefined" || father == null) {
            return console.log('houve um erro ao renderizar seu gráfico');
        }

        // adiciona no elemento que está envolvendo seu canvas
        document.querySelector(father).appendChild(newCanva)

    }

}


(()=>{
    console.log('TesteChart');
})()


// const t = new Teste('canvas2')
// const a = new Teste('canvas3')
// // a.createCanva();
