import chemistryImage from "figma:asset/171bb26f07fe4927f2b7e6c4300cbea459d357a2.png";
import physicsImage from "figma:asset/10d3f9ae68d5b815d94830dea730218eb46133a9.png";
import mathImage from "figma:asset/092ef18763fa0d284832c66942246e8002bcf3aa.png";

export interface ContentSection {
  title: string;
  content: string;
}

export interface ContentItem {
  id: string;
  title: string;
  description: string;
  sections: ContentSection[];
  category: 'Física' | 'Química' | 'Matemática' | 'Curiosidade' | 'História' | 'Geografia';
}

export interface Hotspot {
  id: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  label?: string;
  content: ContentItem;
}

export interface Room {
  id: string;
  name: string;
  type: 'lab' | 'classroom';
  image: string;
  hotspots: Hotspot[];
}

export const MUSEUM_ROOMS: Room[] = [
  {
    id: 'lab-chemistry',
    name: 'Laboratório de Química',
    type: 'lab',
    image: chemistryImage,
    hotspots: [
      {
        id: 'atom-model',
        x: 8,
        y: 55,
        label: 'Atomística',
        content: {
          id: 'chem-atom',
          title: 'Atomística',
          description: 'Evolução dos modelos atômicos e estrutura da matéria.',
          category: 'Química',
          sections: [
            {
              title: 'Modelos Atômicos',
              content: 'A evolução do entendimento do átomo: \n\n1. Dalton: Bola de bilhar (indivisível).\n2. Thomson: Pudim de passas (cargas elétricas).\n3. Rutherford: Sistema planetário (núcleo denso).\n4. Bohr: Níveis de energia quantizados (o modelo ilustrado).'
            },
            {
              title: 'Estrutura da Matéria',
              content: 'O átomo é formado por prótons (+) e nêutrons (sem carga) no núcleo, e elétrons (-) na eletrosfera. A distribuição eletrônica define as propriedades químicas dos elementos.'
            }
          ]
        }
      },
      {
        id: 'test-tubes',
        x: 20,
        y: 65,
        label: 'Química Geral',
        content: {
          id: 'chem-general',
          title: 'Química Geral',
          description: 'Evidências de reações químicas, misturas e análise visual.',
          category: 'Química',
          sections: [
            {
              title: 'Evidências de Reação',
              content: 'Como saber se ocorreu uma reação? Mudança de cor, liberação de gás (bolhas), formação de precipitado (sólido) ou variação de temperatura.'
            },
            {
              title: 'Misturas e Separação',
              content: 'Misturas homogêneas (uma fase) vs heterogêneas (duas ou mais fases). Métodos de separação incluem filtração, decantação e destilação.'
            }
          ]
        }
      },
      {
        id: 'burette',
        x: 31,
        y: 45,
        label: 'Físico-Química',
        content: {
          id: 'chem-phys',
          title: 'Físico-Química (Soluções)',
          description: 'Titulação, concentração, estequiometria e pH.',
          category: 'Química',
          sections: [
            {
              title: 'Titulação',
              content: 'Técnica usada para determinar a concentração de uma solução desconhecida usando uma solução padrão. A bureta permite adicionar o titulante gota a gota até atingir o ponto de equivalência.'
            },
            {
              title: 'pH e Indicadores',
              content: 'O pH mede a acidez ou alcalinidade. pH < 7 é ácido, pH > 7 é básico. Indicadores mudam de cor em faixas específicas de pH.'
            },
            {
              title: 'Estequiometria',
              content: 'Cálculo das quantidades relativas de reagentes e produtos em reações químicas, baseando-se na conservação de massa e mols.'
            }
          ]
        }
      },
      {
        id: 'lemon-battery',
        x: 41,
        y: 65,
        label: 'Eletroquímica',
        content: {
          id: 'chem-electro',
          title: 'Eletroquímica',
          description: 'Funcionamento de pilhas, baterias e reações de oxirredução.',
          category: 'Química',
          sections: [
            {
              title: 'Pilhas e Baterias',
              content: 'Dispositivos que convertem energia química em elétrica através de reações espontâneas de oxirredução (transferência de elétrons).'
            },
            {
              title: 'Oxirredução',
              content: 'O ânodo sofre oxidação (perde elétrons) e é o polo negativo. O cátodo sofre redução (ganha elétrons) e é o polo positivo. A ponte salina ou eletrólito (como o suco de limão) permite o fluxo de íons.'
            }
          ]
        }
      },
      {
        id: 'bunsen-burner',
        x: 50,
        y: 55,
        label: 'Termoquímica',
        content: {
          id: 'chem-thermo',
          title: 'Termoquímica e Cinética',
          description: 'Calor de reação e velocidade das reações.',
          category: 'Química',
          sections: [
            {
              title: 'Calor de Reação',
              content: 'Reações endotérmicas absorvem calor (ΔH > 0), esfriando o ambiente. Reações exotérmicas liberam calor (ΔH < 0), aquecendo o ambiente, como a chama do bico de Bunsen.'
            },
            {
              title: 'Cinética Química',
              content: 'Estuda a velocidade das reações. Fatores que aceleram a reação: aumento da temperatura, concentração dos reagentes, superfície de contato e uso de catalisadores.'
            }
          ]
        }
      },
      {
        id: 'dna',
        x: 69,
        y: 50,
        label: 'Bioquímica',
        content: {
          id: 'chem-bio',
          title: 'Bioquímica',
          description: 'Macromoléculas, polímeros naturais e estrutura do DNA.',
          category: 'Química',
          sections: [
            {
              title: 'DNA',
              content: 'Ácido Desoxirribonucleico. Molécula em dupla hélice que carrega a informação genética. Formada por nucleotídeos (fosfato + açúcar + base nitrogenada: A, T, C, G).'
            },
            {
              title: 'Macromoléculas',
              content: 'Proteínas, carboidratos e lipídios são polímeros essenciais para a vida, formados por unidades menores (monômeros).'
            }
          ]
        }
      },
      {
        id: 'organic-molecule',
        x: 79,
        y: 60,
        label: 'Química Orgânica',
        content: {
          id: 'chem-organic',
          title: 'Química Orgânica',
          description: 'Estrutura do carbono, funções orgânicas e isomeria.',
          category: 'Química',
          sections: [
            {
              title: 'O Elemento Carbono',
              content: 'Tetravalente (faz 4 ligações) e capaz de formar longas cadeias (catenas). É a base de todos os compostos orgânicos.'
            },
            {
              title: 'Funções Orgânicas',
              content: 'Grupos funcionais definem as propriedades. Exemplos: Álcoois (-OH), Ácidos Carboxílicos (-COOH), Cetonas (C=O), Aminas (-NH2).'
            },
            {
              title: 'Isomeria',
              content: 'Fenômeno onde compostos têm a mesma fórmula molecular, mas estruturas e propriedades diferentes.'
            }
          ]
        }
      },
      {
        id: 'nuclear',
        x: 91,
        y: 60,
        label: 'Química Nuclear',
        content: {
          id: 'chem-nuclear',
          title: 'Química Nuclear',
          description: 'Radioatividade, decaimento e segurança nuclear.',
          category: 'Química',
          sections: [
            {
              title: 'Radioatividade',
              content: 'Emissão espontânea de radiação por núcleos instáveis. Tipos: Alfa (núcleos de He), Beta (elétrons/pósitrons) e Gama (ondas eletromagnéticas).'
            },
            {
              title: 'Segurança',
              content: 'O símbolo trifólio indica perigo de radiação. O contador Geiger é usado para detectar níveis de radiação ionizante no ambiente.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'lab-physics',
    name: 'Laboratório de Física',
    type: 'lab',
    image: physicsImage,
    hotspots: [
      {
        id: 'inclined-plane',
        x: 9,
        y: 50,
        label: 'Dinâmica',
        content: {
          id: 'phys-dynamics',
          title: 'Mecânica (Dinâmica)',
          description: 'Leis de Newton, forças, plano inclinado e atrito.',
          category: 'Física',
          sections: [
            {
              title: 'Plano Inclinado',
              content: 'Superfície plana inclinada em relação à horizontal. Decompõe-se o peso em componentes paralela (Px = P·sinθ) e perpendicular (Py = P·cosθ) ao plano para analisar o movimento.'
            },
            {
              title: 'Atrito',
              content: 'Força que se opõe ao movimento relativo entre superfícies. Atrito estático (impede o início do movimento) e cinético (durante o movimento).'
            },
            {
              title: 'Leis de Newton',
              content: 'Fundamentam a dinâmica. F = m·a explica como a força resultante causa aceleração no bloco.'
            }
          ]
        }
      },
      {
        id: 'newton-cradle',
        x: 23,
        y: 48,
        label: 'Energia',
        content: {
          id: 'phys-energy',
          title: 'Mecânica (Energia)',
          description: 'Conservação da quantidade de movimento e energia.',
          category: 'Física',
          sections: [
            {
              title: 'Conservação de Energia',
              content: 'A energia não é criada nem destruída. No pêndulo, energia potencial gravitacional se converte em cinética e vice-versa.'
            },
            {
              title: 'Quantidade de Movimento',
              content: 'Em colisões elásticas (como no Pêndulo de Newton ideal), tanto a quantidade de movimento (Q = m·v) quanto a energia cinética são conservadas.'
            }
          ]
        }
      },
      {
        id: 'thermometer',
        x: 34,
        y: 42,
        label: 'Termologia',
        content: {
          id: 'phys-thermo',
          title: 'Termologia',
          description: 'Escalas termométricas, calorimetria e trocas de calor.',
          category: 'Física',
          sections: [
            {
              title: 'Escalas Termométricas',
              content: 'Celsius (°C), Fahrenheit (°F) e Kelvin (K). K = °C + 273. O zero absoluto (0 K) é a temperatura teórica onde cessa a agitação molecular.'
            },
            {
              title: 'Calorimetria',
              content: 'Estuda a transferência de calor. Q = m·c·ΔT (calor sensível, mudança de temperatura) e Q = m·L (calor latente, mudança de estado).'
            }
          ]
        }
      },
      {
        id: 'prism',
        x: 49,
        y: 45,
        label: 'Óptica',
        content: {
          id: 'phys-optics',
          title: 'Óptica',
          description: 'Refração da luz, dispersão e espectro visível.',
          category: 'Física',
          sections: [
            {
              title: 'Refração',
              content: 'Mudança na velocidade da luz ao passar de um meio para outro (ex: ar para vidro). Causa desvio na trajetória da luz.'
            },
            {
              title: 'Dispersão (Arco-íris)',
              content: 'A luz branca é uma mistura de cores. Cada cor tem um índice de refração diferente no prisma, sendo desviada em ângulos diferentes, revelando o espectro visível (vermelho a violeta).'
            }
          ]
        }
      },
      {
        id: 'magnet',
        x: 62,
        y: 48,
        label: 'Magnetismo',
        content: {
          id: 'phys-magnet',
          title: 'Magnetismo',
          description: 'Campos magnéticos, atração/repulsão e polos.',
          category: 'Física',
          sections: [
            {
              title: 'Ímãs',
              content: 'Possuem polos Norte e Sul. Polos iguais se repelem, polos opostos se atraem. Monopolos magnéticos não existem (ao quebrar um ímã, surgem dois novos ímãs).'
            },
            {
              title: 'Campo Magnético',
              content: 'Região onde forças magnéticas atuam. As linhas de campo saem do polo Norte e entram no polo Sul.'
            }
          ]
        }
      },
      {
        id: 'circuit',
        x: 71,
        y: 53,
        label: 'Eletrodinâmica',
        content: {
          id: 'phys-circuit',
          title: 'Eletrodinâmica',
          description: 'Circuitos elétricos, Lei de Ohm, corrente e resistência.',
          category: 'Física',
          sections: [
            {
              title: 'Lei de Ohm',
              content: 'V = R·I (Tensão = Resistência × Corrente). A resistência limita o fluxo de corrente.'
            },
            {
              title: 'Circuitos',
              content: 'Caminho fechado para a corrente elétrica. Componentes básicos: fonte (bateria), carga (lâmpada) e condutores.'
            }
          ]
        }
      },
      {
        id: 'vandegraaff',
        x: 81,
        y: 35,
        label: 'Eletrostática',
        content: {
          id: 'phys-electro',
          title: 'Eletrostática',
          description: 'Cargas elétricas, eletrização e potencial elétrico.',
          category: 'Física',
          sections: [
            {
              title: 'Gerador de Van de Graaff',
              content: 'Máquina eletrostática que acumula altas voltagens em seu domo esférico através do atrito de uma correia móvel. Usado para demonstrar fenômenos como repulsão de cabelos (eletrização por contato).'
            },
            {
              title: 'Potencial Elétrico',
              content: 'Capacidade de um campo elétrico realizar trabalho sobre uma carga.'
            }
          ]
        }
      },
      {
        id: 'geiger',
        x: 93,
        y: 52,
        label: 'Física Moderna',
        content: {
          id: 'phys-modern',
          title: 'Física Moderna',
          description: 'Natureza da radiação e detecção de partículas.',
          category: 'Física',
          sections: [
            {
              title: 'Radiação',
              content: 'Energia emitida por átomos instáveis. O detector Geiger-Müller mede a radiação ionizante, emitindo sinais sonoros ou visuais quando partículas atingem o sensor.'
            },
            {
              title: 'Segurança',
              content: 'Entender a radiação é crucial para aplicações médicas (raio-X) e energéticas, bem como para proteção contra exposição nociva.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'classroom-math',
    name: 'Sala de Matemática e Geografia',
    type: 'classroom',
    image: mathImage,
    hotspots: [
      {
        id: 'geo-solids',
        x: 6,
        y: 65,
        label: 'Geometria Espacial',
        content: {
          id: 'math-spatial',
          title: 'Geometria Espacial',
          description: 'Poliedros, corpos redondos e volumes.',
          category: 'Matemática',
          sections: [
            {
              title: 'Sólidos Geométricos',
              content: 'Objetos tridimensionais que ocupam lugar no espaço. Dividem-se em poliedros (faces planas, como pirâmides e prismas) e corpos redondos (superfícies curvas, como esferas e cones).'
            },
            {
              title: 'Volume e Área',
              content: 'O volume mede o espaço ocupado pelo sólido (ex: V = a³ para o cubo). A área superficial mede a soma das áreas de todas as faces.'
            }
          ]
        }
      },
      {
        id: 'galton-board',
        x: 22,
        y: 50,
        label: 'Estatística',
        content: {
          id: 'math-stats',
          title: 'Estatística e Probabilidade',
          description: 'Distribuição normal, médias e acaso.',
          category: 'Matemática',
          sections: [
            {
              title: 'Tábua de Galton',
              content: 'Dispositivo inventado por Francis Galton para demonstrar o Teorema do Limite Central. As esferas caem aleatoriamente, mas formam previsivelmente uma curva em forma de sino (Distribuição Normal ou Gaussiana).'
            },
            {
              title: 'Probabilidade',
              content: 'Cálculo das chances de um evento ocorrer. Na Tábua de Galton, a chance de uma bola cair à esquerda ou direita de um pino é 50%, resultando na acumulação central.'
            }
          ]
        }
      },
      {
        id: 'protractor',
        x: 38,
        y: 62,
        label: 'Geometria Plana',
        content: {
          id: 'math-plane',
          title: 'Geometria Plana e Trigonometria',
          description: 'Ângulos, triângulos e relações métricas.',
          category: 'Matemática',
          sections: [
            {
              title: 'Trigonometria',
              content: 'Estudo das relações entre lados e ângulos de triângulos. As funções fundamentais são Seno (cateto oposto/hipotenusa), Cosseno (adjacente/hipotenusa) e Tangente (oposto/adjacente).'
            },
            {
              title: 'Teorema de Pitágoras',
              content: 'Em todo triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos. Essencial para construção e navegação.'
            }
          ]
        }
      },
      {
        id: 'abacus',
        x: 45,
        y: 55,
        label: 'Matemática Básica',
        content: {
          id: 'math-basic',
          title: 'Matemática Básica e Funções',
          description: 'Operações fundamentais e evolução do cálculo.',
          category: 'Matemática',
          sections: [
            {
              title: 'Instrumentos de Cálculo',
              content: 'O ábaco é um dos primeiros instrumentos de cálculo da humanidade, permitindo operações aritméticas velozes. Precede a calculadora moderna.'
            },
            {
              title: 'Funções',
              content: 'Uma função f(x) relaciona uma entrada a uma única saída. Gráficos no plano cartesiano permitem visualizar o comportamento dessas relações (linear, quadrática, exponencial).'
            }
          ]
        }
      },
      {
        id: 'globe',
        x: 58,
        y: 50,
        label: 'Astronomia',
        content: {
          id: 'geo-astro',
          title: 'Astronomia e Climatologia',
          description: 'Movimentos da Terra, estações e clima.',
          category: 'Geografia',
          sections: [
            {
              title: 'Movimentos da Terra',
              content: 'Rotação (giro em torno do eixo, dura 24h, causa dia/noite) e Translação (giro em torno do Sol, dura 365 dias, causa as estações do ano devido à inclinação do eixo).'
            },
            {
              title: 'Zonas Climáticas',
              content: 'A incidência solar varia conforme a latitude, criando zonas Tropicais (quentes), Temperadas (estações definidas) e Polares (frias).'
            }
          ]
        }
      },
      {
        id: 'terrain',
        x: 72,
        y: 60,
        label: 'Geomorfologia',
        content: {
          id: 'geo-morph',
          title: 'Geomorfologia (Relevo)',
          description: 'Formas de relevo e mapas topográficos.',
          category: 'Geografia',
          sections: [
            {
              title: 'Relevo Terrestre',
              content: 'O modelo mostra formas de relevo como montanhas, vales e planícies. Essas formas são esculpidas por agentes internos (tectonismo) e externos (erosão pela água e vento).'
            },
            {
              title: 'Topografia',
              content: 'Curvas de nível em mapas representam a altitude. Linhas próximas indicam declive acentuado; linhas afastadas indicam terreno suave.'
            }
          ]
        }
      },
      {
        id: 'rocks',
        x: 88,
        y: 62,
        label: 'Geologia',
        content: {
          id: 'geo-rocks',
          title: 'Geologia',
          description: 'Rochas, minerais e estrutura da Terra.',
          category: 'Geografia',
          sections: [
            {
              title: 'Tipos de Rochas',
              content: 'Magmáticas (resfriamento do magma), Sedimentares (deposição de sedimentos) e Metamórficas (transformação por pressão/temperatura).'
            },
            {
              title: 'Estrutura Interna',
              content: 'A Terra é formada por Crosta (sólida), Manto (viscoso, onde ocorre a convecção) e Núcleo (ferro/níquel, gera o campo magnético).'
            }
          ]
        }
      },
      {
        id: 'compass',
        x: 95,
        y: 68,
        label: 'Cartografia',
        content: {
          id: 'geo-carto',
          title: 'Cartografia e Orientação',
          description: 'Coordenadas, fusos e localização.',
          category: 'Geografia',
          sections: [
            {
              title: 'Orientação',
              content: 'A bússola aponta para o norte magnético da Terra. Pontos cardeais (N, S, L, O) são essenciais para navegação.'
            },
            {
              title: 'Coordenadas Geográficas',
              content: 'Sistema de linhas imaginárias: Latitude (distância do Equador) e Longitude (distância do Meridiano de Greenwich). Permitem localizar qualquer ponto no globo.'
            }
          ]
        }
      }
    ]
  }
];
