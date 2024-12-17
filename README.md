## Intruções Como iniciar um projeto em TypeScript e Fastify
npm install
###### Vamos usar o framework - fastify
npm i fastify

## API COM FRAMEWORK FASTIFY TYPESCRIPT

"Este projeto foi criado como parte de um portfólio e para estudo. Trata-se de uma API REST usando o framwork Fastify com a temática FORMULA 1(F1), onde é possível listar o TOP15 campeões da F1 e listar as equipes campeãos do mundial de construtores dos ultimos 20 anos ,e buscar por atributos específicos de cada um para consultas detalhadas."


# Neste projeto encontraremos !
#####  - A arquitetura do projeto simples baseada na rapidez da entrega com o minimo de esforço !
#####  - Uma API com o uso de Frameworks , Usamos neste projeto o FASTIFY para controle das rotas.
#####  - A API segue o formato REST, utilizando o protocolo HTTP para comunicação. Foi construída com recursos vindos do Node.js e faz uso de TypeScript e a framework Fastify.
#####  - Levando-se em conta a rapidez da entrega e a organização dentro de só um documento
#####  - Retornará uma informação no formato (JSON)
Formato Json retornado:
TOP 15 PILOTOS
```js
{
      "id": 1,
      "driverName": "Michael_Schumacher",
      "team": "Ferrari",
      "careerPoints": 1566,
      "polePositions": 68,
      "championshipYears": [1994, 1995, 2000, 2001, 2002, 2003, 2004],
      "victoryCircuits": [
        {
          "circuit": "Monza",
          "bestTime": "1:21.905"
        },
        {
          "circuit": "Spa-Francorchamps",
          "bestTime": "1:45.250"
        },
        {
          "circuit": "Suzuka",
          "bestTime": "1:30.565"
        },
        {
          "circuit": "Silverstone",
          "bestTime": "1:24.300"
        },
        {
          "circuit": "Interlagos",
          "bestTime": "1:11.950"
        }
      ]
    }
```
### Sendo composto por um :
#### id , Para identificação do dado na listagem
#### driverName, Contendo o nome do campeão
#### team , Ultimo time cujo o qual teve participação
#### careerPoints , Pontos acumulados em sua carreira 
#### polePositions , Poles feitas em toda a carreira
#### championshipYears , Anos cujo os quais ele se consagrou campeão
#### victoryCircuits , Pistas e tempos cujo o quais foram destaque ! ganhando e fazendo o melhor tempo

EQUIPES CAMPEÃ DOS ULTIMOS 20 ANOS DE MUNDIAL DE CONSTRUTORES
```js
 {
      "id": 1,
      "team": "Red_Bull_Racing",
      "pilots": [
        "Max_Verstappen",
        "Sergio_Perez"
      ],
      "ageVictory": 2023,
      "points": 860
}
```
### Sendo composto por um :
#### id , Para identificação do dado na listagem
#### team , Traz o time campeão do mundial dos construtores
#### pilots , Pilotos da equipe campeã
#### ageVictory , Ano que a equipe se consagrou campeã do mundial de construtores
#### points , com quantos pontos a equipe se consagrou campeã

## (END-POINT) PARA ACESSO
#### End-point principal: http://localhost:3333/
###  Top-15 campeões da F1
#### End-point busca pela key : id -> exemplo:http://localhost:3333/champPilot/1
#### End-point busca pela key : team -> exemplo:http://localhost:3333/champPilot/team/Mercedes

###  20 ultimos campeões da F1 mundial de construtores
#### End-point busca pela key : id -> exemplo:http://localhost:3333/champConstructor/1
#### End-point busca pela key : team -> exemplo:http://localhost:3333/champConstructor/team/Mercedes


# Lições Aprendidas
## Vantagens de uma API mínima:
#### Simplicidade: Fácil de entender e manter.
#### Performance: Menos sobrecarga, mais rápido.
#### Facilidade de Integração: Dados simples, fácil integração.
#### Manutenção: Menos código, mais fácil de modificar.
#### Menor Superfície de Ataque: Menos endpoints, maior segurança.
## Desvantagens de uma API mínima:
#### Funcionalidades Limitadas: Pode exigir mais funcionalidades no futuro.
#### Dificuldade de Adaptação: Mudanças podem ser mais difíceis de implementar.
#### Escalabilidade Limitada: Aumentar o escopo pode ser complicado.
#### Falta de Recursos Avançados: Recursos como autenticação robusta ou versionamento precisam ser #### #### implementados separadamente.
#### Menos Flexibilidade para o Consumidor: Menos opções de personalização para os consumidores da API.

