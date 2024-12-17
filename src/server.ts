
//Depois de instalado importamos no arquivo SERVER.TS o fastify
import fastify from "fastify";

//vamos criar o servidor com fastity
//atribuimos a uma variavel o fastify , temos varias configurações 
//que podemos lançar para esta variavel , inserimos para ele mostrar

//Logs da nossa requisição
const server = fastify({
    logger:true,
})

//Dados dos top 15 campeões de todos os tempos do mundial de F1
const champPilot=[
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
    },
    {
      "id": 2,
      "driverName": "Lewis_Hamilton",
      "team": "Mercedes",
      "careerPoints": 4192,
      "polePositions": 103,
      "championshipYears": [2008, 2014, 2015, 2017, 2018, 2019, 2020],
      "victoryCircuits": [
        {
          "circuit": "Silverstone",
          "bestTime": "1:24.303"
        },
        {
          "circuit": "Monaco",
          "bestTime": "1:10.111"
        },
        {
          "circuit": "Monza",
          "bestTime": "1:20.089"
        },
        {
          "circuit": "Interlagos",
          "bestTime": "1:11.452"
        },
        {
          "circuit": "Baku_City_Circuit",
          "bestTime": "1:43.000"
        }
      ]
    },
    {
      "id": 3,
      "driverName": "Juan_Manuel_Fangio",
      "team": "Mercedes",
      "careerPoints": 240,
      "polePositions": 29,
      "championshipYears": [1951, 1954, 1955, 1956, 1957],
      "victoryCircuits": [
        {
          "circuit": "Nurburgring",
          "bestTime": "8:04.400"
        },
        {
          "circuit": "Monza",
          "bestTime": "1:40.225"
        },
        {
          "circuit": "Reims-Gueux",
          "bestTime": "1:53.100"
        }
      ]
    },
    {
      "id": 4,
      "driverName": "Alain_Prost",
      "team": "McLaren",
      "careerPoints": 798,
      "polePositions": 33,
      "championshipYears": [1985, 1986, 1989, 1993],
      "victoryCircuits": [
        {
          "circuit": "Magny-Cours",
          "bestTime": "1:15.200"
        },
        {
          "circuit": "Monaco",
          "bestTime": "1:21.600"
        },
        {
          "circuit": "Silverstone",
          "bestTime": "1:23.500"
        }
      ]
    },
    {
      "id": 5,
      "driverName": "Sebastian_Vettel",
      "team": "Red_Bull_Racing",
      "careerPoints": 3061,
      "polePositions": 57,
      "championshipYears": [2010, 2011, 2012, 2013],
      "victoryCircuits": [
        {
          "circuit": "Singapore",
          "bestTime": "1:43.902"
        },
        {
          "circuit": "Monza",
          "bestTime": "1:21.000"
        },
        {
          "circuit": "Spa-Francorchamps",
          "bestTime": "1:46.140"
        },
        {
          "circuit": "Interlagos",
          "bestTime": "1:11.800"
        }
      ]
    },
    {
      "id": 6,
      "driverName": "Niki_Lauda",
      "team": "Ferrari",
      "careerPoints": 1270,
      "polePositions": 24,
      "championshipYears": [1975, 1977],
      "victoryCircuits": [
        {
          "circuit": "Nordschleife",
          "bestTime": "8:24.700"
        },
        {
          "circuit": "Monza",
          "bestTime": "1:25.500"
        },
        {
          "circuit": "Zandvoort",
          "bestTime": "1:14.100"
        }
      ]
    },
    {
      "id": 7,
      "driverName": "Nelson_Piquet",
      "team": "Brabham",
      "careerPoints": 485,
      "polePositions": 24,
      "championshipYears": [1981, 1983, 1987],
      "victoryCircuits": [
        {
          "circuit": "Hockenheim",
          "bestTime": "1:45.008"
        },
        {
          "circuit": "Interlagos",
          "bestTime": "1:14.150"
        },
        {
          "circuit": "Kyalami",
          "bestTime": "1:08.500"
        }
      ]
    },
    {
      "id": 8,
      "driverName": "Jackie_Stewart",
      "team": "Tyrrell",
      "careerPoints": 239,
      "polePositions": 17,
      "championshipYears": [1969, 1971, 1973],
      "victoryCircuits": [
        {
          "circuit": "Nurburgring",
          "bestTime": "8:01.850"
        },
        {
          "circuit": "Monaco",
          "bestTime": "1:22.500"
        },
        {
          "circuit": "Silverstone",
          "bestTime": "1:24.000"
        }
      ]
    },
    {
      "id": 9,
      "driverName": "Jim_Clark",
      "team": "Lotus",
      "careerPoints": 198,
      "polePositions": 33,
      "championshipYears": [1963, 1965],
      "victoryCircuits": [
        {
          "circuit": "Silverstone",
          "bestTime": "1:20.400"
        },
        {
          "circuit": "Monaco",
          "bestTime": "1:22.000"
        },
        {
          "circuit": "Spa-Francorchamps",
          "bestTime": "1:55.700"
        }
      ]
    },
    {
      "id": 10,
      "driverName": "Ayrton_Senna",
      "team": "McLaren",
      "careerPoints": 610,
      "polePositions": 65,
      "championshipYears": [1988, 1990, 1991],
      "victoryCircuits": [
        {
          "circuit": "Interlagos",
          "bestTime": "1:13.400"
        },
        {
          "circuit": "Monaco",
          "bestTime": "1:18.200"
        },
        {
          "circuit": "Suzuka",
          "bestTime": "1:31.750"
        }
      ]
    },
    {
      "id": 11,
      "driverName": "Fernando_Alonso",
      "team": "Renault",
      "careerPoints": 1900,
      "polePositions": 22,
      "championshipYears": [2005, 2006],
      "victoryCircuits": [
        {
          "circuit": "Barcelona",
          "bestTime": "1:21.900"
        },
        {
          "circuit": "Monza",
          "bestTime": "1:20.750"
        },
        {
          "circuit": "Interlagos",
          "bestTime": "1:11.600"
        }
      ]
    },
    {
      "id": 12,
      "driverName": "Kimi_Raikkonen",
      "team": "Ferrari",
      "careerPoints": 1843,
      "polePositions": 18,
      "championshipYears": [2007],
      "victoryCircuits": [
        {
          "circuit": "Monza",
          "bestTime": "1:21.300"
        },
        {
          "circuit": "Interlagos",
          "bestTime": "1:11.800"
        },
        {
          "circuit": "Spa-Francorchamps",
          "bestTime": "1:47.500"
        }
      ]
    },
    {
      "id": 13,
      "driverName": "Mika_Hakkinen",
      "team": "McLaren",
      "careerPoints": 510,
      "polePositions": 26,
      "championshipYears": [1998, 1999],
      "victoryCircuits": [
        {
          "circuit": "Monaco",
          "bestTime": "1:21.850"
        },
        {
          "circuit": "Suzuka",
          "bestTime": "1:31.200"
        },
        {
          "circuit": "Interlagos",
          "bestTime": "1:12.000"
        }
      ]
    },
    {
      "id": 14,
      "driverName": "Jim_Clark",
      "team": "Lotus",
      "careerPoints": 162,
      "polePositions": 33,
      "championshipYears": [1963, 1965],
      "victoryCircuits": [
        {
          "circuit": "Nurburgring",
          "bestTime": "8:01.850"
        },
        {
          "circuit": "Monaco",
          "bestTime": "1:22.000"
        },
        {
          "circuit": "Spa-Francorchamps",
          "bestTime": "1:55.700"
        }
      ]
    },
    {
      "id": 15,
      "driverName": "Daniel_Ricciardo",
      "team": "Red_Bull_Racing",
      "careerPoints": 1375,
      "polePositions": 3,
      "championshipYears": [],
      "victoryCircuits": [
        {
          "circuit": "Monza",
          "bestTime": "1:20.900"
        }
      ]
    }
  ]
  
//Dados dos ultimos 20 anos de campeonato mundial de F1 Escuderias campeã do MUNDIAL DE CONSTRUTORES
const champConstructor=[
    {
      "id": 1,
      "team": "Red_Bull_Racing",
      "pilots": [
        "Max_Verstappen",
        "Sergio_Perez"
      ],
      "ageVictory": 2023,
      "points": 860
    },
    {
      "id": 2,
      "team": "Red_Bull_Racing",
      "pilots": [
        "Max_Verstappen",
        "Sergio_Perez"
      ],
      "ageVictory": 2022,
      "points": 759
    },
    {
      "id": 3,
      "team": "Mercedes",
      "pilots": [
        "Lewis_Hamilton",
        "Valtteri_Bottas"
      ],
      "ageVictory": 2021,
      "points": 613.5
    },
    {
      "id": 4,
      "team": "Mercedes",
      "pilots": [
        "Lewis_Hamilton",
        "Valtteri_Bottas"
      ],
      "ageVictory": 2020,
      "points": 573
    },
    {
      "id": 5,
      "team": "Mercedes",
      "pilots": [
        "Lewis_Hamilton",
        "Valtteri_Bottas"
      ],
      "ageVictory": 2019,
      "points": 739
    },
    {
      "id": 6,
      "team": "Mercedes",
      "pilots": [
        "Lewis_Hamilton",
        "Valtteri_Bottas"
      ],
      "ageVictory": 2018,
      "points": 765
    },
    {
      "id": 7,
      "team": "Mercedes",
      "pilots": [
        "Lewis_Hamilton",
        "Nico_Rosberg"
      ],
      "ageVictory": 2017,
      "points": 468
    },
    {
      "id": 8,
      "team": "Mercedes",
      "pilots": [
        "Lewis_Hamilton",
        "Nico_Rosberg"
      ],
      "ageVictory": 2016,
      "points": 765
    },
    {
      "id": 9,
      "team": "Mercedes",
      "pilots": [
        "Lewis_Hamilton",
        "Nico_Rosberg"
      ],
      "ageVictory": 2015,
      "points": 703
    },
    {
      "id": 10,
      "team": "Red_Bull_Racing",
      "pilots": [
        "Sebastian_Vettel",
        "Mark_Webber"
      ],
      "ageVictory": 2014,
      "points": 696
    },
    {
      "id": 11,
      "team": "Red_Bull_Racing",
      "pilots": [
        "Sebastian_Vettel",
        "Mark_Webber"
      ],
      "ageVictory": 2013,
      "points": 759
    },
    {
      "id": 12,
      "team": "Red_Bull_Racing",
      "pilots": [
        "Sebastian_Vettel",
        "Mark_Webber"
      ],
      "ageVictory": 2012,
      "points": 460
    },
    {
      "id": 13,
      "team": "Red_Bull_Racing",
      "pilots": [
        "Sebastian_Vettel",
        "Mark_Webber"
      ],
      "ageVictory": 2011,
      "points": 650
    },
    {
      "id": 14,
      "team": "Red_Bull_Racing",
      "pilots": [
        "Sebastian_Vettel",
        "Mark_Webber"
      ],
      "ageVictory": 2010,
      "points": 498
    },
    {
      "id": 15,
      "team": "Brawn_GP",
      "pilots": [
        "Jenson_Button",
        "Rubens_Barrichello"
      ],
      "ageVictory": 2009,
      "points": 172
    },
    {
      "id": 16,
      "team": "Ferrari",
      "pilots": [
        "Kimi_Räikkönen",
        "Felipe_Massa"
      ],
      "ageVictory": 2008,
      "points": 172
    },
    {
      "id": 17,
      "team": "Ferrari",
      "pilots": [
        "Kimi_Räikkönen",
        "Felipe_Massa"
      ],
      "ageVictory": 2007,
      "points": 204
    },
    {
      "id": 18,
      "team": "Ferrari",
      "pilots": [
        "Michael_Schumacher",
        "Felipe_Massa"
      ],
      "ageVictory": 2006,
      "points": 201
    },
    {
      "id": 19,
      "team": "Renault",
      "pilots": [
        "Fernando_Alonso",
        "Giancarlo_Fisichella"
      ],
      "ageVictory": 2005,
      "points": 191
    },
    {
      "id": 20,
      "team": "Renault",
      "pilots": [
        "Fernando_Alonso",
        "Giancarlo_Fisichella"
      ],
      "ageVictory": 2004,
      "points": 126
    }
  ]

//Para se fazer um GET listando as equipes por exemplo
//precisamos passar 3 funções , implementar um metodo HTTP , passar uma ROTA para ele e
// criar um controller 

//    GET -> ROTA ->CONTROLLER
//Listar Campeão dos contrutores
{
  server.get("/champConstructor", async(request,response)=>{

    //CONFIGURANDO O MEU RESPONSE , INSERINDO O TIPO DE ARQUIVO
    //e passo o stats code de aceito OK que seria o 200
    response.type("application/json").code(200)


    //aqui mostro o retorno que será dado quando estiver tudo OK 
    return{champConstructor};
})
}
//Listar Campeão do Mundial de F1
{
  server.get("/champPilot",async(request,Response)=>{
    Response.type("application/json").code(200);
    return{champPilot};
})
}

// Contratos de Interface para servir as ROTAS
  interface DriverParams {
    id: string;
  }
  interface DriverParamsT {
    team: string;
  }


//Este faz a parte da Services 
//
//Serviços de Rotas para Busca por Id e Nome da Scuderia do Top15 Campeões
{
//End-point principal: http://localhost:3333/
//End-point busca pela key : id -> exemplo:http://localhost:3333/champPilot/1
{
server.get<{Params:DriverParams}>("/champPilot/:id", async(request,response)=>{
  const id = parseInt(request.params.id);
  const Pilot = champPilot.find((dri)=>dri.id===id);

  //caso não se ache damos este tratamento
  if(!Pilot){
    response.type("application/json").code(404);
    return{message:"Pilot not found!"}
  }else{
    response.type("application/json").code(200);
    return{Pilot}
  }
});
}


//End-point principal: http://localhost:3333/
//End-point busca pela key : team -> exemplo:http://localhost:3333/champPilot/team/Mercedes
{
server.get<{Params:DriverParamsT}>("/champPilot/team/:team", async(request,response)=>{
  const team = request.params.team;
  const PilotTeam = champPilot.filter((drip)=>drip.team === team);

  //caso não se ache damos este tratamento
  if(!PilotTeam){
    response.type("application/json").code(404);
    return{message:"Team not found!"}
  }else{
    response.type("application/json").code(200);
    return{PilotTeam}
  }
});
}
}
//-------------------------------------------------------------------------------------------------------

//Serviços de Rotas para Busca por Id e Nome da Scuderia do Top20 Equipes ganhadoras do Mundial de Construtores

//End-point principal: http://localhost:3333/
//End-point busca pela key : id -> exemplo:http://localhost:3333/champConstructor/1
{
  server.get<{Params:DriverParams}>("/champConstructor/:id", async(request,response)=>{
    const id = parseInt(request.params.id as string);
    const Constructor = champConstructor.find((dri)=>dri.id===id);
  
    //caso não se ache damos este tratamento
    if(!Constructor){
      response.type("application/json").code(404);
      return{message:"Scudi/Team not found!"}
    }else{
      response.type("application/json").code(200);
      return{Constructor}
    }
  });
}

//End-point busca pela key : team -> exemplo:http://localhost:3333/champConstructor/team/Mercedes
{
  server.get<{Params:DriverParamsT}>("/champConstructor/team/:team", async(request,response)=>{
    const team =request.params.team;
    const ConstructorT = champConstructor.find((dri)=>dri.team===team);
  
    //caso não se ache damos este tratamento
    if(!ConstructorT){
      response.type("application/json").code(404);
      return{message:"Scudi/Team not found!"}
    }else{
      response.type("application/json").code(200);
      return{ConstructorT}
    }
  });
}


// Aqui seria a porta a ser escutada para o client poder escutar 
// Aqui usamos o arrayFunction como uma função de resposta/ callback
// com uma mensagem para sabermos o estado que se encontra nossa conexão

server.listen({port:3333},()=>{
    console.log("Server Logado!");
})
