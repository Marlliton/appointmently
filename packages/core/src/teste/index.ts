interface TesteProps {
  nome: string
  idade: number
}


export class Teste {
  constructor(private props: TesteProps) {}

  get nome() {
    return this.props.nome
  }

  get idade() {
    return this.props.idade
  }

  get nomeEIdade() {
    return `${this.nome} ++++ ${this.idade}`
  }
}