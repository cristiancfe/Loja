const produtos = document.querySelectorAll('.produto');

produtos.forEach((produto)=>{
    produto.addEventListener('click', () => {

        if(window.innerWidth < 450){
            window.screenTop({top:0 , behavior: 'smooth'});
        }
        
        const produtoSelecionado = document.querySelector('.selecionado');
        produtoSelecionado.classList.remove('selecionado');
        produto.classList.add('selecionado');

        const imagemprodutoGrande = document.querySelector('.produto-grande');
        const idproduto = produto.attributes.id.value;       
        imagemprodutoGrande.src = `../img/card-${idproduto}.png`;

        const nomeproduto = document.getElementById('nome-produto');
        nomeproduto.innerText = produto.getAttribute('data-name');

        const descricaoproduto = document.getElementById('descricao-produto');
        descricaoproduto.innerText = produto.getAttribute('data-description');


    })
})