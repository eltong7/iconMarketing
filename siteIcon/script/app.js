document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.group').forEach(item=> {
        item.addEventListener('click', event => {
            const page = event.currentTarget.getAttribute('data-page');
            loadPage(page);
        });
        
    });
});


function loadPage(page){
    const resource = document.querySelector('.resource');
    let pageUrl = `/page/${page}.html`;

    fetch(pageUrl)
    .then(response => response.text())
    .then(data => {
        resource.innerHTML = data;
        
        resource.querySelectorAll('script[src]').forEach(oldScript => {
            const newScript = document.createElement('script');
            if(oldScript.src){
                newScript.src = oldScript.src;
                newScript.type = "module";
                newScript.async = oldScript.async;
            }else{
                newScript.textContent = oldScript.textContent;
            }
            document.body.appendChild(newScript);
            oldScript.remove();
        });
        if(page === 'dashboard'){
            import('/script/dashboard.js')
            .then(module => {
                module.inicializarDashboard();
            })
        }else if(page === 'clientes'){
            import('/script/clientes.js')
            .then(module => {
                module.inicializarClientes();
        })
        }else if(page === 'documentos'){
        import('/script/documentos.js')
        .then(module => {
            module.inicializarDocumentos();
        })
    }else if(page === 'campanhas'){
        import('/script/campanhas.js')
        .then(module => {
            module.inicializarCampanhas();
        })}})
    .catch(error => {
        console.error('Erro', error);
    });
}