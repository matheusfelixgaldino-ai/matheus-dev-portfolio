# Matheus.dev

Portfólio pessoal de Matheus Felix Galdino, estudante de Ciência da Computação no 2º semestre e desenvolvedor Full Stack em formação. A página apresenta sua trajetória, tecnologias em desenvolvimento e formas de contato.

## Requisitos

- Node.js 18 ou superior
- npm

## Instalação e execução

```bash
npm install
npm run dev
```

O Vite exibirá no terminal o endereço local para abrir no navegador.

## Scripts

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: gera a versão otimizada em `dist/`.
- `npm run preview`: serve localmente a versão gerada para inspeção.

## Estrutura

```text
src/
├── assets/                 # Espaço para imagens e outros arquivos estáticos
├── components/
│   ├── Header.jsx          # Monograma, menu acessível e controle de tema
│   ├── ThemeToggle.jsx     # Botão de alternância claro/escuro
│   ├── Hero.jsx            # Apresentação inicial
│   ├── About.jsx           # Sobre o Matheus
│   ├── Skills.jsx          # Tecnologias em aprendizado
│   ├── Contact.jsx         # Links e espaços de contato
│   └── Footer.jsx          # Rodapé e navegação curta
├── data/
│   └── projects.js         # Conteúdo dos cartões de projeto
├── App.jsx                 # Composição das seções
├── main.jsx                # Ponto de entrada do React
└── index.css               # Variáveis, estilos globais e responsividade
public/
└── favicon.svg             # Ícone MF da aba do navegador
```

## Decisões técnicas

- React com JavaScript e JSX, usando Vite para desenvolvimento e build.
- CSS puro com variáveis para cores, tipografia e espaçamento visual.
- Sem biblioteca de ícones: os ícones de contato são SVG inline, mantendo a lista de dependências pequena.
- A seção de projetos está temporariamente desativada em `src/App.jsx`; os componentes existentes permanecem no projeto.
- O menu funciona por teclado e fecha com `Escape`, clique fora ou seleção de uma seção.
- A preferência de tema é salva no `localStorage`; na primeira visita, o tema segue a preferência do sistema.
- O WhatsApp abre uma conversa com texto inicial preenchido, que o visitante pode revisar antes de enviar.
- A folha de estilos inclui foco visível, link para pular ao conteúdo, layout adaptável e suporte a `prefers-reduced-motion`.
- Links para e-mail usam `mailto:`; links externos abrem em nova aba com proteção.
- O tema usa variáveis CSS para as paletas clara e escura.

## Personalização

Para adicionar um projeto, inclua um objeto com `name`, `status`, `description`, `technologies` e `codeUrl` em `src/data/projects.js`. Informe `demoUrl` apenas quando houver uma demonstração válida. Se a stack ainda não estiver confirmada, mantenha `technologies` como uma lista vazia. Para atualizar os canais de contato, edite os valores no início de `src/components/Contact.jsx`.
