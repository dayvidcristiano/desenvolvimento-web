var produtos = [
    { id: 1, nome: 'Produto 1', categoria: 'Eletrônicos', preco: 100 },
    { id: 2, nome: 'Produto 2', categoria: 'Roupas', preco: 50 },
    { id: 3, nome: 'Produto 3', categoria: 'Eletrônicos', preco: 200, emEstoque: false },
    { id: 4, nome: 'Produto 4', categoria: 'Livros', preco: 30 },
];
function simularGET(url, query) {
    if (url !== "/produtos")
        throw new Error("Endpoint GET não encontrado.");
    if (!(query === null || query === void 0 ? void 0 : query.categoria) && !(query === null || query === void 0 ? void 0 : query.precoMinimo))
        return produtos;
    var prodFiltrados = produtos.filter(function (prod) {
        var okCategoria = query && query.categoria && prod.categoria === query.categoria;
        var okPrecoMinimo = query && query.precoMinimo && prod.preco >= query.precoMinimo;
        return okCategoria && okPrecoMinimo;
        //return okCategoria || okPrecoMinimo
    });
    return prodFiltrados;
}
console.log(simularGET("/produtos"));
// console.log(simularGET("/products"))
console.log(simularGET("/produtos", { categoria: "Eletrônicos" }));
console.log(simularGET("/produtos", { categoria: "Eletrônicos", precoMinimo: 150 }));
