class Jogador {
    constructor(id, nome, pontos, status){
        this.id = id;
        this.nome = nome; 
        this.pontos = pontos;
        this.status = status;
    }

getData(){
    console.log(`
        ------Dados do Jogador------
        Id: ${this.id}
        Nome: ${this.nome}
        Pontos: ${this.pontos}
        Status: ${this.status ? Ativo : Inativo}`)
}
}


let jogador1 = new jogador(1, "Zé da manga", 578);

console. table(jogador1); 