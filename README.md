# NEXUS — operação e proteção de dados

Aplicativo estático hospedado via GitHub Pages. Os cadastros criados no navegador são locais ao perfil e à origem (domínio) utilizados; publicar uma versão nova do HTML **não** sincroniza nem recupera automaticamente esses dados em outros dispositivos.

## Repositório canônico e publicação

- A consulta à API GitHub em 10/11/2026 retornou o mesmo ID de repositório (`1448283511`) para `raphaelbuenocaptacao-creator/NEXUS` e `AUREON-TECH/NEXUS`. O nome canônico atual é **`AUREON-TECH/NEXUS`**, na branch `main`. O endereço antigo é resolvido pela API para o repositório transferido; isso **não comprova** redirecionamento ou funcionamento do GitHub Pages.
- Repositório: https://github.com/AUREON-TECH/NEXUS
- Endereço Pages a verificar na configuração de Pages: https://aureon-tech.github.io/NEXUS/ . O endereço antigo https://raphaelbuenocaptacao-creator.github.io/NEXUS/ não deve ser considerado publicado sem teste HTTP/navegador.
- **Atenção aos cadastros:** `localStorage` é separado por origem. Mesmo que o código seja idêntico, dados salvos no domínio antigo não aparecem automaticamente no domínio novo. Antes de orientar qualquer mudança de endereço, exporte os dois backups no domínio original e teste a importação em perfil isolado. Nunca apague chaves locais nem sobrescreva registros existentes.

## Backups antes de alterações

1. No navegador onde os cadastros estão salvos, abra **Exportar backup** no menu de gestão e guarde o JSON em local seguro.
2. Na área de **Análise / Desempenho**, use separadamente **Exportar backup da análise** para guardar histórico e custos. O backup de núcleos **não inclui** os dados da análise.
3. Confirme que os dois arquivos foram baixados e mantenha uma cópia fora do dispositivo antes de limpar dados do navegador, trocar domínio, reinstalar o navegador ou migrar de computador.
4. Na importação de núcleos, o aplicativo tenta mesclar novos nós e vínculos sem substituir IDs locais existentes. Mesmo assim, faça cópia antes de importar. A restauração de custos analíticos possui confirmação específica de substituição.

## Armazenamento e concorrência

- Núcleos e conexões: `localStorage['aureon-nexus-v1']`.
- Histórico analítico local: `localStorage['nexus-performance-aggregated-v1']`.
- Custos analíticos locais: `localStorage['nexus-performance-costs-v1']`.
- Há verificações de conflitos entre abas para o cadastro de núcleos. Não assuma sincronização multiusuário ou backup automático em nuvem.
- **Nunca** apague ou renomeie essas chaves como parte de uma atualização sem migração e backup verificados.

## Atenção: dados públicos

O arquivo `historico-operacao.json` está versionado neste **repositório público** e é solicitado pelo navegador para alimentar a análise. Qualquer pessoa com acesso ao repositório ou ao site pode obter o arquivo. Não adicione informações pessoais, financeiras confidenciais ou credenciais a esse arquivo. Para restringir acesso, é necessário migrar o histórico para um serviço autenticado com autorização no servidor; esconder um botão ou colocar senha somente no JavaScript público não protege os dados. Antes de remover ou alterar a fonte, implementar e testar uma alternativa para não quebrar a análise.

## Checklist de publicação

- Conferir o diff do HTML e validar a sintaxe dos scripts.
- Testar abertura da página e console em navegador real, inclusive no celular.
- Testar entrar e voltar entre bolinhas e subnúcleos, núcleo P.O, busca e layout móvel.
- Criar um nó de teste, recarregar, confirmar persistência e excluí-lo apenas após backup.
- Testar exportação e importação em perfil de navegador **separado**, nunca sobre cadastros reais.
- Verificar a URL efetivamente publicada e o status da implantação do GitHub Pages.

Este documento descreve o comportamento inspecionado no código, **não** certifica testes funcionais ou uma implantação.
