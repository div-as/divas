
# WAD - Web Application Document 
## Equipe 26 (`</div>as`) - Hacking.her


### Quem são as integrantes da `</div>as`?

##### - Ana Beatriz Passos Beggiato
##### - Gabriela Silva
##### - Laura de Araújo Rodrigues
##### - Mariana Namie Guima
##### - Thalyta da Silva Viana

<br>

## Sumário

[1. Introdução](#c1)<br>
[2. Projeto da aplicação Web](#c2)<br>
[2.1. Arquitetura](#c2.1)<br>
[2.1.1. Models](#c2.1.1)<br>
[2.1.2. Views](#c2.1.2)<br>
[2.1.3. Controllers](#c2.1.3)<br>
[2.1.4. Helpers](#c2.1.4)<br>
[2.2. Guia de estilos](#c2.2)<br>
[2.3 Protótipo de alta fidelidade](#2.3)<br>
[3. Desenvolvimento da Aplicação Web & Ferramentas](#3)<br>


# <a name="c1"></a>1. Introdução

&nbsp;&nbsp;&nbsp;&nbsp;A solução proposta pelo grupo é uma plataforma que conecta mulheres em transição de carreira para a área de tecnologia com outras mulheres já estabelecidas nesse campo. Através de uma plataforma web, a iniciativa busca empoderar, encorajar e incluir essas mulheres em um mercado marcado por questões sociais e de gênero. A plataforma oferece mentorias personalizadas, trilhas técnicas especializadas e workshops, com o objetivo de capacitar as participantes para as vagas na área de tecnologia. Além disso, cria um ambiente de comunidade forte, onde as trajetórias individuais se encontram, permitindo que juntas elas construam conexões significativas para superar desafios, alcançar metas e realizar com sucesso a transição para carreiras tech, transformando vidas e inspirando novas gerações de mulheres líderes na tecnologia.


# <a name="c2"></a>2. Projeto da Aplicação Web 

&nbsp;&nbsp;&nbsp;&nbsp;A Aplicação Web é uma forma de apresentar um software sem a necessidade de uma pré-instalação. Ela é acessada por meio da internet e pode ser utilizada em qualquer dispositivo que seja compatível (Rock Content, 2022).
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Nesta seção, será abordado o processo de criação da aplicação web `</div>as`. Dentro deste tópico, nota-se a arquitetura desta aplicação, o guia de estilos serviu como um ótimo direcionador de identidade visual e o protótipo de alta fidelidade que representa a interface final.

### <a name="c2.1"></a> 2.1. Arquitetura 

&nbsp;&nbsp;&nbsp;&nbsp;A arquitetura de software é o projeto de um sistema de software, que define normas, técnicas e o modo de interação entre os componentes do software. Ela estabelece a base para o desenvolvimento, a evolução e a manutenção do software. As arquiteturas possuem diversos padrões, que devem ser escolhidos de acordo com o modelo de negócio e os requisitos, ou seja, a arquitetura de um software é a organização de um sistema, sendo responsável por definir tudo o que será utilizado dentro do projeto.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;No caso do `</div>as`, o padrão MVC foi escolhido (Model-View-Controller) devido à sua flexibilidade, escalabilidade e reusabilidade. A arquitetura MVC é composta pelo Model, que estabelece a regra de negócio e as interações com os dados, o View, que define a apresentação da interface e dos dados para o usuário, e o Controller, responsável por conectar a View ao Model. 
<br>

### <a name="c2.1.1"></a> 2.1.1. Models

&nbsp;&nbsp;&nbsp;&nbsp;Os Models são responsáveis por representar a estrutura dos dados e interagir diretamente com o banco de dados.

- *usuario*: 
  - *Atributos*: nome, idade, telefone, email, idade, nível, senha.

- *contato*
  - *Atributos*: nome, email, mensagem.

### <a name="c2.1.2"></a> 2.1.2. Views

&nbsp;&nbsp;&nbsp;&nbsp;As Views são responsáveis por renderizar a interface do usuário e exibir os dados processados pelo Controller. Elas incluem diferentes telas e componentes da interface. São elas: Apresentação, cadastro, dicionário, firewall, homepage, login, perfil e trilhas.

### <a name="c2.1.3"></a> 2.1.3. Controllers

&nbsp;&nbsp;&nbsp;&nbsp;O controller corresponde à camada que é responsável por responder as ações do usuário e age como intermediário entre o Model e a View. Na aplicação web `</div>as`, verifica-se os seguintes controllers: Homepage, Perfil e Usuário.

### <a name="c2.1.4"></a> 2.1.4. Helpers

&nbsp;&nbsp;&nbsp;&nbsp;Helper é um método que pode ser utilizado na view para renderizar algum elemento HTML ou um comportamento desejável nessa view (DevMedia, 2017). O helper utilizado na aplicação web foi: Upload. Sua principal função é realziar o upload da foto de perfil da pessoa.


## <a name="c2.2"></a> 2.2. Guia de estilos 

&nbsp;&nbsp;&nbsp;&nbsp;O guia de estilos é criado a fim de centralizar, organizar e documentar todas as definições de design que serão utilizadas ao decorrer do projeto, a fim de padronizá-lo visualmente (Aela School, 2021). Isso garante a consistência do design e facilita a comunicação e a flexibilidade dos times, o que aumenta a produtividade e evita o desperdício de recursos e tempo. O guia de estilos é especialmente importante para o projeto, já que ele é baseado na metodologia ágil, a qual necessita de documentos que acompanhem a flexibilidade e eficiência do desenvolvimento. O guia de estilos a seguir foi simplificado devido ao tempo de desenvolvimento do projeto, limitando-se à paleta de cores utilizada.

<div align="center">
<sub><a name="f2"></a>Figura 2 - Guia de estilos </sub>
<img src="/assets/guiadeestilo.png" width="100%">
<sup>Fonte: Material produzido pelas autoras (2024)</sup>
</div>

## <a name="c2.3"></a> 2.3 Protótipo de alta fidelidade
&nbsp;&nbsp;&nbsp;&nbsp;Um protótipo de alta fidelidade é uma ferramenta importante no desenvolvimento de projetos web, representando uma simulação interativa que se assemelha muito ao produto final em termos de design, interatividade e navegação. Através desse protótipo, é possível reduzir erros, otimizar recursos e garantir que o produto final seja não apenas funcional, mas também alinhado com as expectativas do usuário final. Com o intuito de produzir um protótipo de alta fidelidade, foi utilizada a plataforma "Figma". 
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Abaixo, segue uma foto do protótipo e uma pequena descrição dos fluxos de telas:

<div align="center">
<sub><a name="f3"></a>Figura 3 - Diagrama dos prototipos - parte 1</sub>
<img src="/assets/diagramapro1.png">
<br>
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

<div align="center">
<sub><a name="f4"></a>Figura 4 - Diagrama dos prototipos - parte 2</sub>
<img src="/assets/diagramapro2.png">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;O diagrama ilustra a interface e os fluxos de navegação do protótipo de alta fidelidade do projeto. A navegação entre as telas é primariamente conduzida através de uma barra lateral (sidebar), consistentemente posicionada à esquerda em todas as telas, onde cada ícone representa e permite o acesso direto a uma tela específica. Os ícones da Sidebar direcionam para as seguintes telas: autoavaliação, homepage, avaliação de pares, perfil e grupo.

&nbsp;&nbsp;&nbsp;&nbsp;Após a conclusão do desenvolvimento da aplicação web, as telas e suas funcionalidades definiram-se da seguinte forma:  

<div align="center">
<sub><a name="f5"></a>Figura 5 - Apresentação</sub>
<br>
<img src="/assets/apresentacaoSide.png">
<br>
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;A tela de apresentação é a primeira tela disponível assim que a usuária clica na aplicação web `</div>as`. Nela, é possível ler o que nós disponibilizamos na plataforma, quais são os nossos valores, visões e nossa missão, além disso, também é possível ver o depoimento de mulheres que já utilizaram a plataforma, assim como conta com uma footer que abre espaço para tirar dúvidas e disponibiliza nossas redes sociais para contato. 

<div align="center">
<sub><a name="f6"></a>Figura 6 - Login</sub>
<br>
<img src="/assets/LoginDivas.png">
<br>
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Na tela de login, a usuária já cadastrada pode entrar com seu e-mail e senha. Caso a usuária não tenha o seu cadastro, será redirecionada para a seguinte tela de cadastro e seu perfil será criado na plataforma: 

<div align="center">
<sub><a name="f7"></a>Figura 7 - Cadastro</sub>
<img src="/assets/CadastroDivas.png">
<br>
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Após realizado o login, a usuária será redirecionada à homepage da aplicação web `</div>as`. Na homepage, pode ser visualizado todas as trilhas técnicas disponíveis na plataforma: Trilha básica, BlockChain, Inteligência Artificial, Cyberseguraça, Web Dev e UX Design. Assim como a usuária pode verificar o seu desempenho dentro da plataforma conforme o andamento e conclusão das trilhas propostas: 

<div align="center">
<sub><a name="f8"></a>Figura 8 - Homepage</sub>
<img src="/assets/HomeSide.png">
<br>
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

&nbsp;&nbsp;&nbsp;&nbsp; Dentro de cada trilha, as seguintes informações estão disponíveis para estudo: Os tópicos que aquela trilha aborda e sua ordem de estudo, assim como os conteúdos e canais nos quais a usuária pode estudar, praticar e se informar sobre o assunto em questão. Além disso, assim que a usuária clica no botão "Acessar", o progresso em sua homepage é alterado para que ela possa acompanhar o seu andamento entre as trilhas.

<div align="center">
<sub><a name="f9"></a>Figura 9 - Homepage</sub>
<img src="/assets/CursoSide.png">
<br>
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Explorando a SideBar, temos um ícone que leva a usuária ao seu perfil dentro da plataforma. Nesta tela, ela pode verificar suas informações de cadastro, sua foto de perfil, as mentorias disponíveis, além de poder consultar o dicionário tech para iniciantes na área de tecnologia e ter acesso ao nosso chat exclusivo da comunidade!

<div align="center">
<sub><a name="f10"></a>Figura 10 - Perfil</sub>
<img src="/assets/PerfilSide.png" width="80%">
<br>
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;O dicionário tech disponibiliza uma lista de palavras mais usadas e importantes dentro das diversas áreas da tecnologia e seus significados! Garantindo que as `<div>as` possam ficar por dentro do vocabulário tech e formas de se referir a ferramentas.

<div align="center">
<sub><a name="f11"></a>Figura 11 - Dicionário tech</sub>
<img src="/assets/DicioSide1.png" width="80%">
<br>
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

<div align="center">
<sub><a name="f12"></a>Figura 12 - Dicionário tech</sub>
<img src="/assets/DicioSide2.png" width="80%">
<br>
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Ainda na SideBar, nota-se um icon de estrela que leva a usuária para a página de inspirações. Nessa aba, as `</div>as` podem conhecer mulheres que foram ou são referência na área de tecnologia para se inspirarem em suas trajetórias, ao mesmo tempo em que aumenta os seus repertórios e expande suas visões sobre possibilidades de carreira e enfretamento dos esteriótipos contra mulheres.

<div align="center">
<sub><a name="f13"></a>Figura 13 - Tela de Inspirações</sub>
<img src="/assets/inspiSide.png">
<br>
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;É importante ressaltar que para o controle e adição de novos conteúdos, workshops e mentorias na plataforma, é necessária a ação de uma administradora. Para esse tipo de usuário, a seguinte tela é disponibilizada a fim de que ela possa adicionar novos conteúdos e manter a plataforma em dia:

<div align="center">
<sub><a name="f14"></a>Figura 14 - Tela de Administradora</sub>
<img src="/assets/AdminSide.png" width="80%">
<br>
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

&nbsp;&nbsp;&nbsp;&nbsp; Para conferir o protótipo de alta fidelidade e os wireframes da aplicação web `</div>as`, explore o protótipo por meio desse link: [https://www.figma.com/design/dUaMH9jE7VYFZO2OHXdhHK/prot%C3%B3tipo?node-id=0-1&t=KZxjmPNU3bvnG8XQ-1](?)

# <a name="c3"></a>3. Ferramentas para desenvolvimento da Aplicação Web
&nbsp;&nbsp;&nbsp;&nbsp;Para desenvolver o projeto, utilizou-se diversas ferramentas e softwares auxiliares. No código, as linguagens HTML, CSS e JavaScript foram usadas para a criação do frontend; já o backend foi construido com base em SQL. Além disso, o framework Sails.js ajudou a construção do código no modelo MVC, o qual já foi explicado anteriormente. Quanto ao banco de dados, ele foi armazenado em um servidor no Render. Para visualizar esses dados utilizou-se o software DBeaver. Além do Node.js como runtime environment e o HTML5 e CSS3 para a construção da UI. Essas tecnologias se relacionam à arquitetura MVC da seguinte forma:

HTML5 e CSS3: View
Sails.js: Controller/model
Dbeaver: Model
Render: Server
Node.js: runtime environment

# Referências 

“Aplicação Web: Entenda O Que é, Como Funciona E a Diferença Para Site!” Rock Content - BR, 4 Aug. 2022, rockcontent.com/br/talent-blog/aplicacao-web/.

Henrique. “ASP.NET MVC: Como Utilizar HTML Helpers.” DevMedia, 2017, www.devmedia.com.br/asp-net-mvc-como-utilizar-html-helpers/37983#:~:text=Um%20Helper%2C%20no%20MVC%2C%20%C3%A9. Accessed 14 July 2024.

“Style Guide: Como Desenvolver O Guia de Estilo Da Sua Interface? - Aela School.” Aela, 6 Dec. 2021, aelaschool.com/pt/designvisual/style-guide-como-desenvolver-o-guia-de-estilo-da-sua-interface/.