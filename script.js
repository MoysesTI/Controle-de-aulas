// Dados iniciais das turmas (apenas um exemplo, será apenas sugestão)
let turmas = [
    {
        id: "A4602-1",
        nome: "GTA Qua e Sex - 9h às 10h30",
        local: "UNIDADE 1: Pacote Office",
        modulo: "excel",
        dias: ["quarta", "sexta"],
        horario: "9:00 - 10:30",
        aulaAtual: 0,
        totalAulas: 12,
        status: "active"
    }
];

// Conteúdo das aulas para cada módulo
const aulaConteudo = {
    "excel": [
        { numero: 1, titulo: "Introdução ao Excel", descricao: "Navegação básica, interface, criação e salvamento de planilhas (fontes, cores, alinhamento, formatação de coluna, mesclagem e quebra de texto)" },
        { numero: 2, titulo: "Operações Básicas de Células", descricao: "Inserção, edição e exclusão de dados; copiar, colar e mover células." },
        { numero: 3, titulo: "Formatação de Células", descricao: "Formatação de texto, números, datas e alinhamento; uso de estilos e temas." },
        { numero: 4, titulo: "Fórmulas", descricao: "Introdução a fórmulas; operações aritméticas simples." },
        { numero: 5, titulo: "Funções Básicas", descricao: "Funções básicas como SOMA, MÉDIA, MÍNIMO, MÁXIMO e CONT.SE." },
        { numero: 6, titulo: "Funções de Texto e Data", descricao: "Funções como CONCATENAR, TEXTO, HOJE, e DIAS" },
        { numero: 7, titulo: "Travamento de fórmula", descricao: "Função INDICE e travamento de fórmula" },
        { numero: 8, titulo: "Manipulação de Dados", descricao: "Ordenação e filtragem de dados; uso de filtros automáticos." },
        { numero: 9, titulo: "Gráficos e Visualização", descricao: "Criação e personalização de gráficos; tipos de gráficos e suas aplicações." },
        { numero: 10, titulo: "Tabelas Dinâmicas", descricao: "Criação e configuração de tabelas dinâmicas; agrupamento e resumo de dados." },
        { numero: 11, titulo: "Revisão", descricao: "Travamento de células, Gráficos, Funções e Manipulação de dados" },
        { numero: 12, titulo: "Avaliação de final de módulo", descricao: "Avaliação de final de módulo" }
    ],
    "word": [
        { numero: 1, titulo: "Introdução ao Word", descricao: "Navegação básica, interface, criação e salvamento de documentos." },
        { numero: 2, titulo: "Edição de Texto", descricao: "Inserção, edição e exclusão de texto; uso do teclado e comandos básicos." },
        { numero: 3, titulo: "Formatação de Texto", descricao: "Alteração de fonte, tamanho, cor e estilo do texto; alinhamento e espaçamento." },
        { numero: 4, titulo: "Parágrafos e Listas", descricao: "Formatação de parágrafos, recuo, espaçamento; criação e personalização de listas numeradas e com marcadores." },
        { numero: 5, titulo: "Estilos e Temas", descricao: "Aplicação e modificação de estilos; uso de temas para uniformizar o documento." },
        { numero: 6, titulo: "Inserção de Imagens e Objetos", descricao: "Inserção e formatação de imagens, gráficos, formas e outros objetos no documento." },
        { numero: 7, titulo: "Tabelas e Gráficos", descricao: "Criação e formatação de tabelas; inserção e manipulação de gráficos básicos." },
        { numero: 8, titulo: "Cabeçalhos, Rodapés e Numeração de Páginas", descricao: "Criação e formatação de cabeçalhos e rodapés; configuração de numeração de páginas." },
        { numero: 9, titulo: "Ferramentas de Revisão", descricao: "Uso de revisão ortográfica e gramatical; comentários e controle de alterações." },
        { numero: 10, titulo: "Quebra de Página e Seções", descricao: "Inserção e gerenciamento de quebras de página; criação e formatação de seções." },
        { numero: 11, titulo: "Sumário e Índice", descricao: "Criação e atualização automática de sumário e índice; uso de referências cruzadas." },
        { numero: 12, titulo: "Revisão e Aplicações Práticas", descricao: "Revisão dos conceitos aprendidos; prática com um projeto final de documento." }
    ],
    "informatica_powerbi": [
        { numero: 1, titulo: "Conceitos de Redes de Computadores", descricao: "Como surgiu a internet, definição e importância das redes, tipos de redes (LAN, WAN, MAN, PAN), endereçamento IP e DNS, dispositivos de rede (roteadores, switches), segurança em redes." },
        { numero: 2, titulo: "Fundamentos do Sistema Operacional", descricao: "O que é um sistema operacional, funções principais, tipos (Windows, Linux, macOS), gerenciamento de arquivos, interface gráfica e interação." },
        { numero: 3, titulo: "Introdução à Informática", descricao: "Definição de informática, componentes do computador (hardware e software), tipos de computadores, diferenças entre memória RAM, ROM e processador." },
        { numero: 4, titulo: "Manutenção do Computador", descricao: "Aula prática com computador" },
        { numero: 5, titulo: "Segurança Digital e Proteção do PC", descricao: "Conceitos de segurança digital, ameaças comuns (vírus, malware, phishing), proteção do PC contra ameaças, importância de backups e armazenamento seguro" },
        { numero: 6, titulo: "Diagnóstico e Resolução de Problemas Comuns", descricao: "Identificação de problemas comuns (lentidão, travamentos), diagnóstico de falhas de hardware e software, quando chamar um especialista." },
        { numero: 7, titulo: "Primeiros passos Power BI", descricao: "O que é possível fazer com Power BI" },
        { numero: 8, titulo: "Power Query", descricao: "Formatando dados no Power Query" },
        { numero: 9, titulo: "Power Query 2", descricao: "Ferramentas de Colunas" },
        { numero: 10, titulo: "Fórmulas", descricao: "Visão Geral da DAX" },
        { numero: 11, titulo: "Relacionamento entre tabelas", descricao: "Como Funcionam os Relacionamentos" },
        { numero: 12, titulo: "Gráficos", descricao: "Painel de Relatórios" }
    ],
    "administrativo": [
        { numero: 1, titulo: "Introdução a Recursos Humanos", descricao: "Conceitos básicos de Recursos Humanos; papel e importância na organização." },
        { numero: 2, titulo: "Recrutamento e Seleção", descricao: "Processos de recrutamento; elaboração de descrição de cargos; técnicas de seleção." },
        { numero: 3, titulo: "Treinamento e Desenvolvimento", descricao: "Planejamento e implementação de treinamentos; avaliação de desempenho e desenvolvimento de carreira." },
        { numero: 4, titulo: "Gestão de Benefícios e Remuneração", descricao: "Estruturação de pacotes de benefícios; políticas de remuneração e salários." },
        { numero: 5, titulo: "Departamento Pessoal: Introdução e Funções", descricao: "Funções e responsabilidades do Departamento Pessoal; estrutura e processos." },
        { numero: 6, titulo: "Admissão e Demissão de Funcionários", descricao: "Procedimentos de admissão e demissão; elaboração de contratos e rescisões." },
        { numero: 7, titulo: "Folha de Pagamento e Cálculos", descricao: "Processamento da folha de pagamento; cálculos de salários, férias, e 13º salário." },
        { numero: 8, titulo: "Legislação Trabalhista e Obrigações Fiscais", descricao: "Leis trabalhistas essenciais; obrigações fiscais e tributárias relacionadas ao Departamento Pessoal." },
        { numero: 9, titulo: "Introdução à Contabilidade e Assistente Contábil", descricao: "Conceitos básicos de contabilidade; papel do assistente contábil na organização." },
        { numero: 10, titulo: "Lançamentos Contábeis e Conciliação Bancária", descricao: "Registro de lançamentos contábeis; conciliação bancária e de contas." },
        { numero: 11, titulo: "Demonstrações Financeiras e Relatórios", descricao: "Elaboração e análise de demonstrações financeiras; relatórios contábeis e gerenciais." },
        { numero: 12, titulo: "Integração de Recursos Humanos e Contabilidade", descricao: "Como Recursos Humanos e Contabilidade trabalham juntos; estudo de casos e aplicações práticas." }
    ]
};

// Função para obter o conteúdo das aulas com base no módulo da turma
function getAulaConteudo(modulo) {
    switch(modulo ? modulo.toLowerCase() : 'excel') {
        case 'excel':
            return aulaConteudo.excel;
        case 'word':
            return aulaConteudo.word;
        case 'informatica_powerbi':
            return aulaConteudo.informatica_powerbi;
        case 'administrativo':
            return aulaConteudo.administrativo;
        default:
            return aulaConteudo.excel; // Padrão para compatibilidade
    }
}

// Arquivo padrão para salvar/carregar
const nomeArquivoConfiguracao = 'Import.txt';

// Suporte para localStorage com fallback
function salvarDados() {
    try {
        localStorage.setItem('dadosTurmas', JSON.stringify(turmas));
        return true;
    } catch (e) {
        console.warn("Não foi possível salvar no localStorage: ", e);
        return false;
    }
}

function carregarDados() {
    try {
        const dadosSalvos = localStorage.getItem('dadosTurmas');
        if (dadosSalvos) {
            turmas = JSON.parse(dadosSalvos);
            return true;
        }
    } catch (e) {
        console.warn("Não foi possível carregar do localStorage: ", e);
    }
    return false;
}

// Função para salvar dados em arquivo Import.txt
async function salvarEmArquivo() {
    try {
        // Gerar o conteúdo JSON
        const dadosJSON = JSON.stringify(turmas, null, 2);
        
        // Verificar se a File System Access API está disponível
        if ('showSaveFilePicker' in window) {
            try {
                // Tentar usar a API moderna (Chrome, Edge)
                const options = {
                    suggestedName: nomeArquivoConfiguracao,
                    types: [{
                        description: 'Arquivo de texto',
                        accept: {'text/plain': ['.txt']}
                    }]
                };
                
                const fileHandle = await window.showSaveFilePicker(options);
                const writable = await fileHandle.createWritable();
                await writable.write(dadosJSON);
                await writable.close();
                
                mostrarNotificacao("Arquivo de configuração salvo com sucesso!");
                return;
            } catch (err) {
                // Se o usuário cancelar ou houver algum erro, continuamos para o fallback
                console.warn("Não foi possível usar a API de Arquivo: ", err);
            }
        }
        
        // Fallback - mostrar instruções para cópia manual
        const dataTextarea = document.getElementById('data-text');
        const exportInstructions = document.getElementById('export-instructions');
        
        dataTextarea.value = dadosJSON;
        dataTextarea.style.display = 'block';
        exportInstructions.style.display = 'block';
        exportInstructions.innerHTML = `
            <p><strong>Importante:</strong> Copie o texto acima e salve-o no arquivo <b>Import.txt</b> do seu projeto.</p>
            <p>Este arquivo será carregado automaticamente na próxima vez que abrir o sistema.</p>
        `;
        
        dataTextarea.select();
        document.execCommand('copy');
        
        mostrarNotificacao("Dados copiados! Cole-os no arquivo Import.txt");
    } catch (error) {
        alert("Erro ao tentar salvar: " + error.message);
    }
}

// Função para tentar carregar dados do arquivo Import.txt
async function carregarDeArquivo() {
    try {
        // Verificar se a API de Acesso a Arquivos está disponível
        if ('showOpenFilePicker' in window) {
            try {
                const options = {
                    types: [{
                        description: 'Arquivo de texto',
                        accept: {'text/plain': ['.txt']}
                    }],
                    multiple: false
                };
                
                const [fileHandle] = await window.showOpenFilePicker(options);
                const file = await fileHandle.getFile();
                const contents = await file.text();
                
                try {
                    const dadosImportados = JSON.parse(contents);
                    if (Array.isArray(dadosImportados)) {
                        turmas = dadosImportados;
                        salvarDados(); // Salvar no localStorage também
                        renderTurmas();
                        mostrarNotificacao("Dados importados com sucesso!");
                        return true;
                    } else {
                        throw new Error("Formato inválido - não é um array");
                    }
                } catch (parseError) {
                    alert("Erro ao processar o arquivo: " + parseError.message);
                    return false;
                }
            } catch (err) {
                // Se o usuário cancelar ou houver algum erro
                console.warn("Não foi possível acessar o arquivo: ", err);
                return false;
            }
        } else {
            // Para navegadores sem suporte à API moderna
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.txt,.json';
            
            // Criar uma promessa para o evento de seleção de arquivo
            const filePromise = new Promise((resolve, reject) => {
                input.onchange = (event) => {
                    const file = event.target.files[0];
                    if (!file) {
                        reject("Nenhum arquivo selecionado");
                        return;
                    }
                    
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        try {
                            const dadosImportados = JSON.parse(e.target.result);
                            if (Array.isArray(dadosImportados)) {
                                turmas = dadosImportados;
                                salvarDados();
                                renderTurmas();
                                mostrarNotificacao("Dados importados com sucesso!");
                                resolve(true);
                            } else {
                                reject("Formato de arquivo inválido. O arquivo deve conter um array de turmas.");
                            }
                        } catch (error) {
                            reject("Erro ao processar o arquivo: " + error.message);
                        }
                    };
                    
                    reader.onerror = () => reject("Erro ao ler o arquivo");
                    reader.readAsText(file);
                };
            });
            
            // Simular um clique no input
            input.click();
            
            try {
                return await filePromise;
            } catch (error) {
                alert(error);
                return false;
            }
        }
    } catch (error) {
        alert("Erro ao importar: " + error.message);
        return false;
    }
}

// Tentar importar automaticamente ao iniciar
async function tentarImportacaoAutomatica() {
    // Primeiro, tentar carregar do localStorage
    const dadosLocalStorage = carregarDados();
    if (dadosLocalStorage) {
        // Se já temos dados no localStorage, usamos eles
        mostrarNotificacao("Dados carregados da memória local", 2000);
        return;
    }
    
    // Se não temos dados no localStorage, tentar carregar do arquivo Import.txt
    try {
        // Em ambiente real, aqui tentaríamos acessar o arquivo Import.txt diretamente
        // Mas por limitações de segurança do navegador, precisamos pedir ao usuário
        const confirmar = confirm("Deseja carregar o arquivo de configuração das turmas?");
        if (confirmar) {
            await carregarDeArquivo();
        }
    } catch (e) {
        console.warn("Erro ao tentar importação automática:", e);
    }
}

// Tentar carregar dados do localStorage
const localStorageDisponivel = carregarDados();
if (!localStorageDisponivel) {
    // Se localStorage não está disponível, mostra mensagem para usar exportação manual
    document.querySelector('.setup-container').style.display = 'block';
    mostrarNotificacao("LocalStorage não disponível. Use os botões de exportar/importar para salvar seus dados.", 5000);
}

// Renderizar todas as turmas
function renderTurmas(filtro = 'all') {
    const container = document.getElementById('turma-container');
    container.innerHTML = '';
    
    const turmasFiltradas = filtro === 'all' 
        ? turmas 
        : turmas.filter(turma => turma.dias.includes(filtro));
    
    turmasFiltradas.forEach(turma => {
        const turmaCard = document.createElement('div');
        turmaCard.className = 'turma-card';
        
        const progressPercent = (turma.aulaAtual / turma.totalAulas) * 100;
        const statusLabel = turma.status === 'active' ? 'Ativa' : 'A Iniciar';
        const statusClass = turma.status === 'active' ? 'active' : 'pending';
        
        const diasAula = turma.dias.map(dia => {
            const primeiraMaiuscula = dia.charAt(0).toUpperCase() + dia.slice(1);
            return primeiraMaiuscula;
        }).join(' e ');
        
        // Adicionar indicação de módulo
        const moduloNome = turma.modulo ? obterNomeModulo(turma.modulo) : "Excel";
        
        turmaCard.innerHTML = `
            <span class="delete-btn" data-id="${turma.id}">&times;</span>
            <div class="turma-header">
                <h2>${turma.nome}</h2>
                <span class="status ${statusClass}">${statusLabel}</span>
            </div>
            <div class="turma-info">
                <div class="info-row">
                    <span class="label">Código:</span>
                    <span class="value">${turma.id}</span>
                </div>
                <div class="info-row">
                    <span class="label">Módulo:</span>
                    <span class="value">${moduloNome}</span>
                </div>
                <div class="info-row">
                    <span class="label">Local:</span>
                    <span class="value">${turma.local}</span>
                </div>
                <div class="info-row">
                    <span class="label">Dias:</span>
                    <span class="value">${diasAula}</span>
                </div>
                <div class="info-row">
                    <span class="label">Horário:</span>
                    <span class="value">${turma.horario}</span>
                </div>
                <div class="info-row">
                    <span class="label">Progresso:</span>
                    <span class="value">Aula ${turma.aulaAtual} de ${turma.totalAulas}</span>
                </div>
                
                <div class="progress-container">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progressPercent}%"></div>
                    </div>
                </div>
                
                <div class="aula-controls">
                    <button class="btn btn-primary btn-avancar" data-id="${turma.id}">Avançar Aula</button>
                    <button class="btn btn-secondary btn-ver-aulas" data-id="${turma.id}">Ver Aulas</button>
                    <button class="btn btn-secondary btn-editar" data-id="${turma.id}">Editar</button>
                </div>
            </div>
        `;
        
        container.appendChild(turmaCard);
    });
    
    // Adicionar event listeners para os botões
    document.querySelectorAll('.btn-avancar').forEach(button => {
        button.addEventListener('click', avancarAula);
    });
    
    document.querySelectorAll('.btn-ver-aulas').forEach(button => {
        button.addEventListener('click', verAulas);
    });
    
    document.querySelectorAll('.btn-editar').forEach(button => {
        button.addEventListener('click', editarTurma);
    });
    
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', deletarTurma);
    });
}

// Função para obter nome amigável do módulo
function obterNomeModulo(modulo) {
    switch(modulo) {
        case 'excel':
            return 'Excel';
        case 'word':
            return 'Word';
        case 'informatica_powerbi':
            return 'Informática e Power BI';
        case 'administrativo':
            return 'Administrativo';
        default:
            return 'Excel';
    }
}

// Mostrar notificação
function mostrarNotificacao(mensagem, duracao = 3000) {
    const notification = document.getElementById('notification');
    notification.textContent = mensagem;
    notification.style.display = 'block';
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, duracao);
}

// Função para avançar aula
function avancarAula(e) {
    const turmaId = e.target.getAttribute('data-id');
    const turma = turmas.find(t => t.id === turmaId);
    
    if (turma.aulaAtual < turma.totalAulas) {
        turma.aulaAtual += 1;
        if (turma.status === 'pending') {
            turma.status = 'active';
        }
        
        // Tentar salvar no localStorage
        const salvou = salvarDados();
        
        renderTurmas(document.querySelector('.filter-btn.active').getAttribute('data-filter'));
        
        if (salvou) {
            mostrarNotificacao("Aula avançada e salva com sucesso!");
        } else {
            mostrarNotificacao("Aula avançada! Lembre-se de salvar os dados em arquivo.");
        }
    }
}

// Função para abrir modal com lista de aulas
function verAulas(e) {
    const turmaId = e.target.getAttribute('data-id');
    const turma = turmas.find(t => t.id === turmaId);
    
    const modal = document.getElementById('aula-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content-container');
    
    modalTitle.textContent = `Aulas da Turma ${turma.id} - ${turma.nome}`;
    
    // Obter o conteúdo das aulas para o módulo específico da turma
    const conteudoAulas = getAulaConteudo(turma.modulo);
    
    let aulaListHTML = '<ul class="aula-list">';
    
    conteudoAulas.forEach(aula => {
        const isCompleted = aula.numero <= turma.aulaAtual;
        
        aulaListHTML += `
            <li class="aula-item">
                <div class="aula-info">
                    <div class="aula-title">Aula ${aula.numero}: ${aula.titulo}</div>
                    <div class="aula-desc">${aula.descricao}</div>
                </div>
                <input type="checkbox" class="aula-checkbox" ${isCompleted ? 'checked' : ''} 
                       data-turma="${turma.id}" data-aula="${aula.numero}" 
                       ${isCompleted ? 'disabled' : ''}>
            </li>
        `;
    });
    
    aulaListHTML += '</ul>';
    modalContent.innerHTML = aulaListHTML;
    
    // Adicionar evento para os checkboxes
    document.querySelectorAll('.aula-checkbox:not([disabled])').forEach(checkbox => {
        checkbox.addEventListener('change', function(e) {
            if (e.target.checked) {
                const turmaId = e.target.getAttribute('data-turma');
                const aulaNum = parseInt(e.target.getAttribute('data-aula'));
                const turma = turmas.find(t => t.id === turmaId);
                
                // Atualizar a aula atual para a aula marcada
                turma.aulaAtual = aulaNum;
                if (turma.status === 'pending') {
                    turma.status = 'active';
                }
                
                // Tentar salvar no localStorage
                const salvou = salvarDados();
                
                // Fechar o modal e atualizar a interface
                modal.style.display = 'none';
                renderTurmas(document.querySelector('.filter-btn.active').getAttribute('data-filter'));
                
                if (salvou) {
                    mostrarNotificacao("Aula marcada e salva com sucesso!");
                } else {
                    mostrarNotificacao("Aula marcada! Lembre-se de salvar os dados em arquivo.");
                }
            }
        });
    });
    
    modal.style.display = 'flex';
}

// Função para editar turma
function editarTurma(e) {
    const turmaId = e.target.getAttribute('data-id');
    const turma = turmas.find(t => t.id === turmaId);
    
    if (!turma) return;
    
    const modal = document.getElementById('aula-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content-container');
    
    modalTitle.textContent = `Editar Turma: ${turma.nome}`;
    
    // Criar dias selecionados
    const diasSelecionados = {
        segunda: turma.dias.includes('segunda'),
        terca: turma.dias.includes('terca'),
        quarta: turma.dias.includes('quarta'),
        quinta: turma.dias.includes('quinta'),
        sexta: turma.dias.includes('sexta'),
        sabado: turma.dias.includes('sabado')
    };
    
    // Obter o módulo atual ou definir excel como padrão
    const moduloAtual = turma.modulo || 'excel';
    
    modalContent.innerHTML = `
        <div class="form-container">
            <div class="form-group">
                <label for="edit-id">Código da Turma:</label>
                <input type="text" id="edit-id" value="${turma.id}">
            </div>
            <div class="form-group">
                <label for="edit-nome">Nome da Turma:</label>
                <input type="text" id="edit-nome" value="${turma.nome}">
            </div>
            <div class="form-group">
                <label for="edit-local">Local:</label>
                <input type="text" id="edit-local" value="${turma.local}">
            </div>
            <div class="form-group">
                <label for="edit-modulo">Módulo:</label>
                <select id="edit-modulo">
                    <option value="excel" ${moduloAtual === 'excel' ? 'selected' : ''}>Excel</option>
                    <option value="word" ${moduloAtual === 'word' ? 'selected' : ''}>Word</option>
                    <option value="informatica_powerbi" ${moduloAtual === 'informatica_powerbi' ? 'selected' : ''}>Informática Básica e Power BI</option>
                    <option value="administrativo" ${moduloAtual === 'administrativo' ? 'selected' : ''}>Administrativo</option>
                </select>
            </div>
            <div class="form-group">
                <label>Dias da Semana:</label>
                <div class="checkbox-group">
                    <label><input type="checkbox" value="segunda" ${diasSelecionados.segunda ? 'checked' : ''}> Segunda</label>
                    <label><input type="checkbox" value="terca" ${diasSelecionados.terca ? 'checked' : ''}> Terça</label>
                    <label><input type="checkbox" value="quarta" ${diasSelecionados.quarta ? 'checked' : ''}> Quarta</label>
                    <label><input type="checkbox" value="quinta" ${diasSelecionados.quinta ? 'checked' : ''}> Quinta</label>
                    <label><input type="checkbox" value="sexta" ${diasSelecionados.sexta ? 'checked' : ''}> Sexta</label>
                    <label><input type="checkbox" value="sabado" ${diasSelecionados.sabado ? 'checked' : ''}> Sábado</label>
                </div>
            </div>
            <div class="form-group">
                <label for="edit-horario">Horário:</label>
                <input type="text" id="edit-horario" value="${turma.horario}">
            </div>
            <div class="form-group">
                <label for="edit-aula-atual">Aula Atual:</label>
                <input type="number" id="edit-aula-atual" min="0" max="12" value="${turma.aulaAtual}">
            </div>
            <div class="form-group">
                <label for="edit-status">Status:</label>
                <select id="edit-status">
                    <option value="pending" ${turma.status === 'pending' ? 'selected' : ''}>A Iniciar</option>
                    <option value="active" ${turma.status === 'active' ? 'selected' : ''}>Ativa</option>
                </select>
            </div>
            <button id="btn-update-turma" class="btn btn-primary" style="width: 100%;">Atualizar Turma</button>
        </div>
    `;
    
    // Mostrar modal
    modal.style.display = 'flex';
    
    // Adicionar evento para atualizar
    document.getElementById('btn-update-turma').addEventListener('click', function() {
        // Coletar dados do formulário
        const id = document.getElementById('edit-id').value;
        const nome = document.getElementById('edit-nome').value;
        const local = document.getElementById('edit-local').value;
        const modulo = document.getElementById('edit-modulo').value;
        const horario = document.getElementById('edit-horario').value;
        const aulaAtual = parseInt(document.getElementById('edit-aula-atual').value);
        const status = document.getElementById('edit-status').value;
        
        // Coletar dias selecionados
        const dias = [];
        document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked').forEach(checkbox => {
            dias.push(checkbox.value);
        });
        
        // Validação básica
        if (!id || !nome || !local || !horario || dias.length === 0) {
            alert('Por favor, preencha todos os campos!');
            return;
        }
        
        // Atualizar turma existente
        const turmaIndex = turmas.findIndex(t => t.id === turmaId);
        if (turmaIndex !== -1) {
            // Criar objeto atualizado
            const turmaAtualizada = {
                id,
                nome,
                local,
                modulo,
                dias,
                horario,
                aulaAtual,
                totalAulas: turma.totalAulas, // Manter o mesmo número total de aulas
                status
            };
            
            // Atualizar na lista
            turmas[turmaIndex] = turmaAtualizada;
            
            // Tentar salvar no localStorage
            const salvou = salvarDados();
            
            // Atualizar interface
            modal.style.display = 'none';
            renderTurmas(document.querySelector('.filter-btn.active').getAttribute('data-filter'));
            
            if (salvou) {
                mostrarNotificacao("Turma atualizada e salva com sucesso!");
            } else {
                mostrarNotificacao("Turma atualizada! Lembre-se de salvar os dados em arquivo.");
            }
        }
    });
}

// Função para deletar turma
function deletarTurma(e) {
    if (confirm("Tem certeza que deseja excluir esta turma?")) {
        const turmaId = e.target.getAttribute('data-id');
        turmas = turmas.filter(t => t.id !== turmaId);
        
        // Tentar salvar no localStorage
        const salvou = salvarDados();
        
        renderTurmas(document.querySelector('.filter-btn.active').getAttribute('data-filter'));
        
        if (salvou) {
            mostrarNotificacao("Turma excluída e alterações salvas!");
        } else {
            mostrarNotificacao("Turma excluída! Lembre-se de salvar os dados em arquivo.");
        }
    }
}

// Função para adicionar nova turma
function adicionarNovaTurma() {
    const modal = document.getElementById('aula-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content-container');
    
    modalTitle.textContent = 'Adicionar Nova Turma';
    
    modalContent.innerHTML = `
        <div class="form-container">
            <div class="form-group">
                <label for="new-id">Código da Turma:</label>
                <input type="text" id="new-id" placeholder="Ex: A1234-1">
            </div>
            <div class="form-group">
                <label for="new-nome">Nome da Turma:</label>
                <input type="text" id="new-nome" placeholder="Ex: GTA Qua e Sex - 9h às 10h30">
            </div>
            <div class="form-group">
                <label for="new-local">Local:</label>
                <input type="text" id="new-local" value="UNIDADE 1: Pacote Office">
            </div>
            <div class="form-group">
                <label for="new-modulo">Módulo:</label>
                <select id="new-modulo">
                    <option value="excel">Excel</option>
                    <option value="word">Word</option>
                    <option value="informatica_powerbi">Informática Básica e Power BI</option>
                    <option value="administrativo">Administrativo</option>
                </select>
            </div>
            <div class="form-group">
                <label>Dias da Semana:</label>
                <div class="checkbox-group">
                    <label><input type="checkbox" value="segunda"> Segunda</label>
                    <label><input type="checkbox" value="terca"> Terça</label>
                    <label><input type="checkbox" value="quarta"> Quarta</label>
                    <label><input type="checkbox" value="quinta"> Quinta</label>
                    <label><input type="checkbox" value="sexta"> Sexta</label>
                    <label><input type="checkbox" value="sabado"> Sábado</label>
                </div>
            </div>
            <div class="form-group">
                <label for="new-horario">Horário:</label>
                <input type="text" id="new-horario" placeholder="Ex: 9:00 - 10:30">
            </div>
            <div class="form-group">
                <label for="new-aula-atual">Aula Atual:</label>
                <input type="number" id="new-aula-atual" min="0" max="12" value="0">
            </div>
            <div class="form-group">
                <label for="new-status">Status:</label>
                <select id="new-status">
                    <option value="pending">A Iniciar</option>
                    <option value="active">Ativa</option>
                </select>
            </div>
            <button id="btn-save-turma" class="btn btn-primary" style="width: 100%;">Salvar Turma</button>
        </div>
    `;
    
    // Mostrar modal
    modal.style.display = 'flex';
    
    // Adicionar evento para salvar
    document.getElementById('btn-save-turma').addEventListener('click', function() {
        // Coletar dados do formulário
        const id = document.getElementById('new-id').value;
        const nome = document.getElementById('new-nome').value;
        const local = document.getElementById('new-local').value;
        const modulo = document.getElementById('new-modulo').value;
        const horario = document.getElementById('new-horario').value;
        const aulaAtual = parseInt(document.getElementById('new-aula-atual').value);
        const status = document.getElementById('new-status').value;
        
        // Coletar dias selecionados
        const dias = [];
        document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked').forEach(checkbox => {
            dias.push(checkbox.value);
        });
        
        // Validação básica
        if (!id || !nome || !local || !horario || dias.length === 0) {
            alert('Por favor, preencha todos os campos!');
            return;
        }
        
        // Criar nova turma
        const novaTurma = {
            id,
            nome,
            local,
            modulo,
            dias,
            horario,
            aulaAtual,
            totalAulas: 12,
            status
        };
        
        // Adicionar à lista
        turmas.push(novaTurma);
        
        // Tentar salvar no localStorage
        const salvou = salvarDados();
        
        // Atualizar interface
        modal.style.display = 'none';
        renderTurmas(document.querySelector('.filter-btn.active').getAttribute('data-filter'));
        
        if (salvou) {
            mostrarNotificacao("Turma adicionada e salva com sucesso!");
        } else {
            mostrarNotificacao("Turma adicionada! Lembre-se de salvar os dados em arquivo.");
        }
    });
}

// Exportar dados
document.getElementById('btn-exportar').addEventListener('click', function() {
    const dataTextarea = document.getElementById('data-text');
    const exportInstructions = document.getElementById('export-instructions');
    
    dataTextarea.value = JSON.stringify(turmas, null, 2);
    dataTextarea.style.display = 'block';
    exportInstructions.style.display = 'block';
    
    dataTextarea.select();
    document.execCommand('copy');
    
    mostrarNotificacao("Dados copiados para a área de transferência!");
});

// Botão para salvar em arquivo
document.getElementById('btn-salvar-arquivo').addEventListener('click', salvarEmArquivo);

// Importar dados do textarea
document.getElementById('btn-importar').addEventListener('click', function() {
    const dataTextarea = document.getElementById('data-text');
    
    if (dataTextarea.style.display === 'none' || dataTextarea.style.display === '') {
        dataTextarea.style.display = 'block';
        dataTextarea.placeholder = "Cole os dados aqui e clique novamente em 'Importar Dados'...";
        return;
    }
    
    try {
        const dadosImportados = JSON.parse(dataTextarea.value);
        
        if (Array.isArray(dadosImportados) && dadosImportados.length > 0) {
            turmas = dadosImportados;
            salvarDados(); // Tentar salvar no localStorage
            renderTurmas();
            dataTextarea.style.display = 'none';
            document.getElementById('export-instructions').style.display = 'none';
            mostrarNotificacao("Dados importados com sucesso!");
        } else {
            alert("Formato de dados inválido. Por favor, verifique os dados e tente novamente.");
        }
    } catch (error) {
        alert("Erro ao importar dados: " + error.message);
    }
});

// Importar dados de arquivo
document.getElementById('btn-importar-arquivo').addEventListener('click', carregarDeArquivo);

// Limpar dados
document.getElementById('btn-reset').addEventListener('click', function() {
    if (confirm("Tem certeza que deseja limpar todos os dados? Esta ação não pode ser desfeita.")) {
        turmas = [];
        salvarDados(); // Tentar salvar no localStorage
        renderTurmas();
        mostrarNotificacao("Dados limpos com sucesso!");
    }
});

// Fechar modal
document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('aula-modal').style.display = 'none';
});

// Fechar modal ao clicar fora
window.addEventListener('click', function(e) {
    const modal = document.getElementById('aula-modal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Filtrar turmas
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
        renderTurmas(this.getAttribute('data-filter'));
    });
});

// Buscar turmas
document.querySelector('.search-bar').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    if (searchTerm.length === 0) {
        renderTurmas(document.querySelector('.filter-btn.active').getAttribute('data-filter'));
        return;
    }
    
    const filtroAtual = document.querySelector('.filter-btn.active').getAttribute('data-filter');
    const turmasFiltradas = filtroAtual === 'all' 
        ? turmas 
        : turmas.filter(turma => turma.dias.includes(filtroAtual));
    
    const turmasBuscadas = turmasFiltradas.filter(turma => 
        turma.id.toLowerCase().includes(searchTerm) || 
        turma.nome.toLowerCase().includes(searchTerm) ||
        turma.local.toLowerCase().includes(searchTerm)
    );
    
    const container = document.getElementById('turma-container');
    container.innerHTML = '';
    
    turmasBuscadas.forEach(turma => {
        const turmaCard = document.createElement('div');
        turmaCard.className = 'turma-card';
        
        const progressPercent = (turma.aulaAtual / turma.totalAulas) * 100;
        const statusLabel = turma.status === 'active' ? 'Ativa' : 'A Iniciar';
        const statusClass = turma.status === 'active' ? 'active' : 'pending';
        
        const diasAula = turma.dias.map(dia => {
            const primeiraMaiuscula = dia.charAt(0).toUpperCase() + dia.slice(1);
            return primeiraMaiuscula;
        }).join(' e ');
        
        // Adicionar indicação de módulo
        const moduloNome = turma.modulo ? obterNomeModulo(turma.modulo) : "Excel";
        
        turmaCard.innerHTML = `
            <span class="delete-btn" data-id="${turma.id}">&times;</span>
            <div class="turma-header">
                <h2>${turma.nome}</h2>
                <span class="status ${statusClass}">${statusLabel}</span>
            </div>
            <div class="turma-info">
                <div class="info-row">
                    <span class="label">Código:</span>
                    <span class="value">${turma.id}</span>
                </div>
                <div class="info-row">
                    <span class="label">Módulo:</span>
                    <span class="value">${moduloNome}</span>
                </div>
                <div class="info-row">
                    <span class="label">Local:</span>
                    <span class="value">${turma.local}</span>
                </div>
                <div class="info-row">
                    <span class="label">Dias:</span>
                    <span class="value">${diasAula}</span>
                </div>
                <div class="info-row">
                    <span class="label">Horário:</span>
                    <span class="value">${turma.horario}</span>
                </div>
                <div class="info-row">
                    <span class="label">Progresso:</span>
                    <span class="value">Aula ${turma.aulaAtual} de ${turma.totalAulas}</span>
                </div>
                
                <div class="progress-container">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progressPercent}%"></div>
                    </div>
                </div>
                
                <div class="aula-controls">
                    <button class="btn btn-primary btn-avancar" data-id="${turma.id}">Avançar Aula</button>
                    <button class="btn btn-secondary btn-ver-aulas" data-id="${turma.id}">Ver Aulas</button>
                    <button class="btn btn-secondary btn-editar" data-id="${turma.id}">Editar</button>
                </div>
            </div>
        `;
        
        container.appendChild(turmaCard);
    });
    
    // Adicionar event listeners para os botões
    document.querySelectorAll('.btn-avancar').forEach(button => {
        button.addEventListener('click', avancarAula);
    });
    
    document.querySelectorAll('.btn-ver-aulas').forEach(button => {
        button.addEventListener('click', verAulas);
    });
    
    document.querySelectorAll('.btn-editar').forEach(button => {
        button.addEventListener('click', editarTurma);
    });
    
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', deletarTurma);
    });
});

// Adicionar botão para nova turma
document.getElementById('btn-add-turma').addEventListener('click', adicionarNovaTurma);

// Tentar importação automática ao carregar a página
window.addEventListener('DOMContentLoaded', tentarImportacaoAutomatica);

// Inicializar a aplicação
renderTurmas();