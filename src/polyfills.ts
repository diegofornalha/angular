/**
 * Este arquivo inclui polyfills necessários para o Angular, e é carregado antes do aplicativo.
 * Você pode adicionar seus próprios polyfills extras a este arquivo.
 *
 * Este arquivo está dividido em 2 seções:
 * 1. Polyfills do navegador. Eles são aplicados antes de carregar o ZoneJS e são classificados por navegadores.
 * 2. Importações de aplicativos. Arquivos importados após ZoneJS que devem ser carregados antes de seu arquivo principal.
 *
 * A configuração atual é para os chamados navegadores "perenes"; as últimas versões de navegadores que
 * atualizam-se automaticamente. Isso inclui Safari> = 10, Chrome> = 55 (incluindo Opera),
 * Edge> = 13 na área de trabalho e iOS 10 e Chrome no celular.
 *
 * Saiba mais em https://angular.io/guide/browser-support
 */

/************************************************** ***************************************************
 * BROWSER POLYFILLS
 */

/** IE10 e IE11 requerem o seguinte para suporte NgClass em elementos SVG */

// import 'classlist.js'; // Execute `npm install --save classlist.js`.

/**
 * Animações da Web `@ angular / platform-browser / animations`
 * Requerido apenas se o AnimationBuilder for usado dentro do aplicativo e usando o IE / Edge ou Safari.
 * O suporte de animação padrão no Angular NÃO requer nenhum polyfills (a partir do Angular 6.0).
 */

// import 'web-animations-js'; // Execute `npm install --save web-animations-js`.

/**
 * Por padrão, zone.js corrigirá todos os macroTask e DomEvents possíveis
 * o usuário pode desabilitar partes do patch macroTask / DomEvents definindo os seguintes sinalizadores
 * porque essas sinalizações precisam ser definidas antes de `zone.js` ser carregado, e o webpack
 * colocará a importação no topo do pacote, então o usuário precisa criar um arquivo separado
 * neste diretório (por exemplo: zone-flags.ts) e coloque os seguintes sinalizadores
 * nesse arquivo e, em seguida, adicione o código a seguir antes de importar zone.js.
 * import './zone-flags.ts';
 *
 * Os sinalizadores permitidos em zone-flags.ts estão listados aqui.
 *
 * Os sinalizadores a seguir funcionarão em todos os navegadores.
 *
 * (janela como qualquer outra) .__ Zone_disable_requestAnimationFrame = true; // desativa patch requestAnimationFrame
 * (janela como qualquer outra) .__ Zone_disable_on_property = true; // desativa o patch onProperty como onclick
 * (janela como qualquer outra) .__ zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // desativa o patch especificado eventNames
 *
 * nas ferramentas de desenvolvedor do IE / Edge, o addEventListener também será encapsulado por zone.js
 * com a seguinte sinalização, ele ignorará o patch `zone.js` para IE / Edge
 *
 * (janela como qualquer outra) .__ Zone_enable_cross_context_check = true;
 *
 */

/************************************************** ***************************************************
 * A zona JS é exigida por padrão para o próprio Angular.
 */

import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/parse-int';
import 'core-js/es6/parse-float';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/date';
import 'core-js/es6/array';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
import 'core-js/es6/weak-map';
import 'core-js/es6/set';

import 'core-js/es6/reflect';
import 'zone.js/dist/zone'; // Incluído com Angular CLI.


/***************************************************************************************************
 * IMPORTAÇÕES DE APLICAÇÃO
 */
