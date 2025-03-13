# Sistema Estelar de Controle de Aulas

Um sistema web moderno para gerenciamento de turmas e acompanhamento do progresso de aulas em diferentes módulos de ensino, com design futurístico inspirado em constelações.

![Sistema de Controle de Aulas](https://placeholder-image.com/950x500)

## Visão Geral

O **Sistema Estelar de Controle de Aulas** foi desenvolvido para professores e instituições de ensino gerenciarem seus cursos, turmas e o progresso das aulas. Com uma interface moderna e intuitiva, permite o acompanhamento completo de múltiplos módulos de ensino com conteúdos específicos.

### Funcionalidades Principais

- Gerenciamento completo de múltiplos cursos/módulos
- Acompanhamento visual do progresso de cada turma
- Visualização detalhada do conteúdo de cada aula
- Sistema de backup e restauração de dados
- Filtragem por dias da semana
- Design responsivo para desktop e dispositivos móveis
- Armazenamento local para funcionamento offline

## Tecnologias Utilizadas

- HTML5
- CSS3 (com animações e design responsivo)
- JavaScript (Vanilla JS)
- LocalStorage para persistência de dados
- File System Access API (quando disponível)

## Módulos Disponíveis

O sistema vem pré-configurado com 4 módulos de ensino:

1. **Excel** - Curso completo de Excel com 12 aulas
2. **Word** - Curso completo de Word com 12 aulas
3. **Informática Básica e Power BI** - Curso de fundamentos de informática e Power BI
4. **Administrativo** - Curso de rotinas administrativas e RH

## Instalação e Uso

### Método 1: Download Direto
1. Clone este repositório: `git clone https://github.com/seu-usuario/sistema-controle-aulas.git`
2. Abra o arquivo `index.html` em qualquer navegador moderno

### Método 2: Servidor Web
1. Clone o repositório em um servidor web
2. Acesse através da URL correspondente

Nenhuma instalação adicional é necessária, pois o sistema funciona totalmente no lado do cliente.

## Estrutura de Arquivos

```
sistema-controle-aulas/
├── index.html           # Estrutura da página principal
├── styles.css           # Estilos e design futurístico
├── script.js            # Lógica de funcionamento do sistema
└── Import.txt           # Arquivo para backup de dados (opcional)
```

## Guia de Utilização

### Gerenciando Turmas

1. **Adicionar Nova Turma**: Clique no botão "Adicionar Nova Turma" e preencha os detalhes.
2. **Editar Turma**: Clique no botão "Editar" em qualquer card de turma.
3. **Excluir Turma**: Clique no "×" no canto superior direito do card.
4. **Filtrar Turmas**: Use os botões de dias da semana para ver apenas turmas específicas.
5. **Buscar Turmas**: Use a barra de busca para encontrar turmas por nome, código ou local.

### Controle de Aulas

1. **Avançar Aula**: Clique no botão "Avançar Aula" para marcar a próxima aula como concluída.
2. **Ver Aulas**: Visualize e marque aulas específicas como concluídas.
3. **Ver Progresso**: Acompanhe visualmente o progresso de cada turma pela barra de progresso.

### Backup e Restauração

1. **Exportar para Clipboard**: Copie os dados para a área de transferência.
2. **Salvar em Arquivo**: Salve os dados em um arquivo texto (padrão: Import.txt).
3. **Importar do Clipboard**: Cole dados previamente exportados.
4. **Importar de Arquivo**: Carregue dados de um arquivo salvo anteriormente.
5. **Limpar Dados**: Remova todas as turmas do sistema.

## Persistência de Dados

O sistema usa várias estratégias para garantir a persistência dos dados:

1. **LocalStorage**: Armazenamento automático no navegador (principal)
2. **Arquivo de Texto**: Opção de exportar/importar dados manualmente
3. **Backup na Área de Transferência**: Cópia rápida dos dados para uso temporário

## Personalização

### Adicionar Novos Módulos

1. Edite o objeto `aulaConteudo` no arquivo `script.js`
2. Adicione um novo módulo seguindo o formato existente
3. Atualize os seletores nos formulários de edição e criação de turmas

### Modificar o Design

O sistema usa variáveis CSS para facilitar a personalização visual:

```css
:root {
    --primary: #6e4ff6;      /* Cor principal */
    --primary-dark: #4527a0; /* Cor principal escura */
    --secondary: #00b0ff;    /* Cor secundária */
    /* Outras variáveis... */
}
```

## Limitações e Requisitos

- Navegador moderno com suporte a JavaScript ES6+
- Para funcionalidade de salvar arquivos: Chrome, Edge ou navegadores baseados em Chromium
- Alguns recursos como File System Access API podem exigir permissões específicas

## Autor

Prof. Moyses Maciel Vieira Silva

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.
