const listaProdutos = [
    {id: 1, nome: 'Nike Air Max Tn', preco: 1060.00, marca: "nike", disponivel: true},
    {id: 2, nome: 'Nike Air Force 1', preco: 760.00, marca: "nike", disponivel: true},
    {id: 3, nome: 'Chuteira Campo Tlempo Maestro Elite Low', preco: 2185.00, marca: "adidas", disponivel: false},
    {id: 4, nome: 'Nike Air Max Portal SE', preco: 683.99, marca: "nike", disponivel: true},
    {id: 5, nome: 'Nike Air Force 1 Protro', preco: 926.44, marca: "nike", disponivel: false},
    {id: 6, nome: 'Tatum 4', preco: 463.19, marca: "jordan", disponivel: false},
]

const produtosEmEstoque = listaProdutos.filter(produto => produto.disponivel);

// Filtrar produtos da marca "nike"
const produtosNike = listaProdutos.filter(produto => produto.marca === "nike");

//Aumentar preço em 15%
const reajustados = listaProdutos.map(produto => ({
     ...produto, 
     preco: produto.preco * 1.15 
    }));

const disponiveis = reajustados.filter(produto => produto.disponivel);

const totalEstoque = disponiveis.reduce((soma, produto) => soma + produto.preco, 0); 

console.log(`---PRODUTOS DA NIKE---`)
console.log(produtosNike);
console.log(`---RELÁTORIO GERAL---`)
console.log("Produtos reajustados:", reajustados);
console.log("Produtos disponíveis:", disponiveis); 
console.log("Valor total do estoque disponível:", totalEstoque.toFixed(2));

