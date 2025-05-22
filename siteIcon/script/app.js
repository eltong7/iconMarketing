document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.group').forEach(item=> {
        item.addEventListener('click', event => {
            const page = event.currentTarget.getAttribute('data-page');
            loadPage(page);
        });
        
    });
    loadPage('home');
    setActiveSidebarItem('home');
});


function loadPage(page){
    const resource = document.querySelector('.resource');
    let pageUrl = `/page/${page}.html`;

    fetch(pageUrl)
    .then(response => response.text())
    .then(data => {
        resource.innerHTML = data;
        setActiveSidebarItem(page);
        
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
    }


    
    })
    .catch(error => {
        console.error('Erro', error);
    });

    
  
}

function setActiveSidebarItem(page) {
  document.querySelectorAll('.group').forEach(item => {
    if (item.dataset.page === page) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

  // Detecta clique nos itens do menu
  

  // Opcional: definir página ativa ao carregar
  // const currentPage = 'home'; // ou 'campanhas', etc.
  // setActiveSidebarItem(currentPage);