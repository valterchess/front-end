/**
 * A estrutura de dados é a mesma, porém, 
 * essas funções permitem uma organização melhor e mais complexa dos
 * conjuntos. Onde ao ser aplicado a function union(), dentre os valores recebidos
 * o valor q se torna um valor raiz de p, onde qualquer valor relacionado ao valor p
 * terá como raiz o valor de p, e terá como Pai o valor q, que foi implementado conjuntamente 
 * na aplicação do método. Se colocarmos dois elementos de conjuntos diferentes, ainda que tais elementos não
 * sejam o elemento raiz, toda o conjunto de q vai ser conectado ao conjunto de p, tendo como raiz a raiz de p.
 */
function QuickUnionUF(n) {
    const id = new Array()
    for (let i = 0; i < n; i++){
        id[i] = i}
    return id
};

//revisar
function root(i, arr) {
    while (i != arr[i]) i = arr[i]
};

function connected(p, q, arr) {return arr[p] == arr[q]};

function union(p, q, arr) {
    const i = root(p,arr)
    const j = root(q,arr)
    arr[i] = j;
}