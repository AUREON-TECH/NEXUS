# NEXUS — segurança e recuperação de dados

## Situação conhecida (10/11/2026)
O repositório público distribui `historico-operacao.json` com dados identificáveis de profissionais e indicadores operacionais/financeiros. **Não há controle de acesso efetivo** a um arquivo servido pelo GitHub Pages. Issue de acompanhamento: https://github.com/AUREON-TECH/NEXUS/issues/1.

## Medidas de contenção
1. Não acrescentar novos dados pessoais, credenciais, chaves de API ou indicadores confidenciais a arquivos públicos, commits, issues ou logs.
2. Restringir acesso requer backend autenticado, autorização por usuário e auditoria de acesso. Uma tela de login em JavaScript estático, esconder menus ou ofuscar o JSON não protege o conteúdo.
3. Antes de substituir a fonte da análise, criar cópia segura do histórico, verificar integridade e configurar uma API autenticada com testes de autorização (inclusive acesso negado para usuários sem permissão).
4. Remover o arquivo público apenas após verificar a nova fonte e a compatibilidade dos relatórios. A exclusão no commit atual não elimina o histórico Git nem cópias já publicadas: avaliar rotação de URLs, expurgo de histórico com coordenação e comunicação interna apropriada.
5. Nunca incluir dados reais em testes, capturas ou relatórios públicos.

## Proteção de cadastros locais
O mapa de núcleos usa `localStorage['aureon-nexus-v1']`; a análise utiliza `nexus-performance-aggregated-v1` e `nexus-performance-costs-v1`. Não limpar, renomear ou substituir essas chaves durante correções. Antes de mudar domínio ou importar dados, exportar backups de núcleos e da análise **separadamente** e testar restauração em perfil isolado. Domínios GitHub Pages diferentes têm armazenamento local independente.

## Verificação mínima antes de publicar
- Revisar diff e sintaxe, sem introduzir segredos nem dados pessoais.
- Testar abertura, console e layout móvel em navegador real.
- Testar navegação de bolinhas e subnúcleos, retorno, P.O, busca, zoom e teclado.
- Testar persistência e importação apenas em perfil isolado, com dados fictícios.
- Confirmar URL publicada e resultado de GitHub Pages, sem confundir commit com implantação.

Este documento é orientação de mitigação; sua publicação **não corrige** a exposição atual.
