import React from 'react';

import Content from './Content'
import StateExample from './StateExample'

function App() {
  return (
    <>
      <Content title="EU SEI REACT!">
        <p>Se você souber esses 3 conceitos, você pode dizer que sabe React!</p>
      </Content>
      
      <Content title="1. Componente">
        <p>Um bloco isolado de HTML, CSS e JS o qual não interfere no restante da aplicação. <br/>
        É uma função que retorna um HTML ou uma estrutura para tela, como o CSS ou JS</p>

        <p><strong>Quando criar ou dividir um componente?</strong></p>
        <li>Quando você observar blocos no seu layout</li>
        <li>Quando você conseguir isolar um pedaço da aplicação sem estragar algum outro componente</li>
        <li>Quando houver muita repetição de código</li>

        <p><strong>Dicas</strong></p>
        <li>Coloque 2 componentes por arquivo</li>  
        <p><br/></p>
      </Content>

      <Content title="2. Propriedade">
        <p>Informações que um componente Pai passa para o component filho</p>
        <p>Podemos passar funções, variáveis, além de textos</p>
        <p>As informações são passadas através de atributos no componente e capturado através do parâmetro <pre>props</pre> recebido pela função que renderiza o componente</p>
        <p>Para usar esse conteúdo JS no HTML, eu uso chaves por volta. Observe esse código e seus componentes.</p>
      </Content>

      <Content title="3. Estado">
        <p>Uma informação mantida pelo componente. Alguma variável que o componente vai manipular.</p>
        <strong>Exemplo de Estado</strong>
        <StateExample></StateExample>
      </Content>
      
    </>
  );
}

export default App;