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
        
        resource.querySelectorAll('script').forEach(oldScript => {
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
        if(page === 'graficos'){
            import('/script/graficos.js')
            .then(module => {
                module.inicializarGraficos();
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
        })
    }else if(page === 'home'){
        import('/script/home.js')
        .then(module => {
            module.inicializarHome();
        })
    }else if(page === 'relatorios'){
        import('/script/relatorios.js')
        .then(module => {
            module.inicializarRelatorios();
        })
    }


    
    })
    .catch(error => {
        console.error('Erro', error);
    });
}