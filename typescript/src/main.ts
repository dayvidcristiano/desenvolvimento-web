//type que representa o produto
type Prod = {
    id: number,
    nome: string,
    categoria: string,
    preco: number,
    emEstoque?: boolean
    //"?" serve para mostrar que pode ou não ser chamada, mas se for tem que ser do tipo boolean (será opcional)
}

//type que representa query
type ProdutosQuery = {
    categoria?: string,
    precoMinimo?: number
}

const produtos: Prod[] = [
    { id: 1, nome: 'Produto 1', categoria: 'Eletrônicos', preco: 100 },
    { id: 2, nome: 'Produto 2', categoria: 'Roupas', preco: 50 },
    { id: 3, nome: 'Produto 3', categoria: 'Eletrônicos', preco: 200, emEstoque: false },
    { id: 4, nome: 'Produto 4', categoria: 'Livros', preco: 30 },
];

function simularGET(url: string, query?: ProdutosQuery) {
    if (url !== "/produtos") throw new Error("Endpoint GET não encontrado.")

    if (!query?.categoria && !query?.precoMinimo) return produtos

    const prodFiltrados = produtos.filter((prod) => {
        const okCategoria = query && query.categoria && prod.categoria === query.categoria
        const okPrecoMinimo = query && query.precoMinimo && prod.preco >= query.precoMinimo

        return okCategoria && okPrecoMinimo
        //return okCategoria || okPrecoMinimo
    })
    return prodFiltrados
}
console.log(simularGET("/produtos"))
// console.log(simularGET("/products"))
console.log(simularGET("/produtos", { categoria: "Eletrônicos" }))
console.log(simularGET("/produtos", { categoria: "Eletrônicos", precoMinimo: 150 }))
