export const Node =  [{
    id:"1",
    type:"input",
    data:{label:(
         <table>
            <tr className="title">
            <th >
        Web app
        </th>
            </tr>
       <tr className="name">
       <td >
        клиент-серверное приложение, в котором клиент взаимодействует с веб-сервером при помощи браузера. Логика веб-приложения распределена между сервером и клиентом, хранение данных осуществляется, преимущественно, на сервере, обмен информацией происходит по сети. 

        </td>
       </tr>      
        
      </table>
       
    )},
    position:{ x:200,y:200},
    draggable:true,
    style:{
        with:200,
        height:200,
        overflow:"auto"
    }
    
},
{
    id:"2",    
    data:{label:"Архитектура программного обеспечения"},
    position:{ x:0,y:500},  
      
    draggable:true,
    
},
{
    id:"a",    
    data:{label:"это дисциплина в программной инженерии, занимающаяся структурным и поведенческим проектированием программных систем. структурным и поведенческим дизайном программных систем"},
    position:{ x:-300,y:400},
    type:"output",    
    draggable:true,
    targetPosition:'right',   
   
},
{
    id:"3",    
    data:{label:"front-end"},
    position:{ x:700,y:500},
    draggable:true
},
{
    id:"b",    
    data:{label:"это создание клиентской части в веб-приложениях, то есть frontend разработчики имеют дело со всем, с чем взаимодействует пользователь"},
    position:{ x:500,y:300},
    type:'output',
    draggable:true,
    targetPosition:'bottom',
},

{
    id:"4",    
    data:{label:"Backend"},
    position:{ x:1200,y:500},
    draggable:true
},
{
    id:"c",    
    data:{label:"программно-аппаратная часть сервиса. Это набор средств, с помощью которых происходит реализация логики веб-сайта. Это то, что скрыто от наших глаз, т. е. происходит вне компьютера и браузера"},
    position:{ x:1000,y:200},
    type:'output',
    draggable:true,
    targetPosition:'bottom',
},
{
    id:"5",    
    data:{label:"UML-моделирование"},
    position:{ x:0,y:600},
    draggable:true
},
{
    id:"d",    
    data:{label:"язык для определения, представления, проектирования и документирования программных систем, организационно-экономических систем, технических систем и других систем различной природы. UML содержит стандартный набор диаграмм и нотаций самых разнообразных видов"},
    position:{ x:-500,y:600},
    type:'output',
    draggable:true,
    targetPosition:'top',
},
{
    id:"6",    
    data:{label:(
        <table>
           <tr className="title">
           <th >
           диаграмма use-case
       </th>
           </tr>
      <tr className="name">
      <td >
      отношения между акторами и прецедентами
       </td>
      </tr></table>
      
   )},
    position:{ x:-200,y:700},
    draggable:true,
    type:'output'
},
{
    id:"7",    
    data:{label:(
        <table>
           <tr className="title">
           <th >
           диаграмма последовательности
       </th>
           </tr>
      <tr className="name">
      <td >
      это вид диаграммы поведения в языке UML (Unified Modeling Language), предназначенный для отображения последовательности взаимодействия между объектами. Она фокусируется на последовательности взаимодействия объектов в системе и передаче сообщений
       </td>
      </tr>
      </table>      
   )
        },
    position:{ x:30,y:700},
    draggable:true,
    type:'output'
},{
    id:"8",    
    data:{label:(
        <table>
           <tr className="title">
           <th >
           диаграмма классов
       </th>
           </tr>
      <tr className="name">
      <td >
      это описание набора объектов с одинаковыми атрибутами, операциями, связями и семантикой
       </td>
      </tr>
       
       
     </table>
      
   )},
    position:{ x:300,y:700},
    draggable:true,
    type:'output'
},{
    id:"9",    
    data:{label:(
        <table>
           <tr className="title">
           <th >
           Дизайн UI
       </th>
           </tr>
      <tr className="name">
      <td >
      процесс визуализации прототипа, который разработали на основании пользовательского опыта и исследования целевой аудитории.
       </td>
      </tr>
       
       
     </table>
      
   )},
    position:{ x:500,y:700},
    draggable:true,
    type:'output'
},{
    id:"10",    
    data:{label:(
        <table>
           <tr className="title">
           <th >
           React
       </th>
           </tr>
      <tr className="name">
      <td >
      одна из самых популярных фронтенд-библиотек. Она поддерживается компанией Facebook и широко используется во многих крупных проектах и компаниях
       </td>
      </tr>
       
       
     </table>
      
   )},
    position:{ x:700,y:700},
    draggable:true,
    type:'output'
},{
    id:"11",    
    data:{label:(
        <table>
           <tr className="title">
           <th >
           Vue
       </th>
           </tr>
      <tr className="name">
      <td >
      представляет собой продвинутый JavaScript-фреймворк для создания пользовательского интерфейса, а также для создания очень быстрого, мощного и полностью адаптивного одностраничного приложения
       </td>
      </tr>
       
       
     </table>
      
   )},
    position:{ x:900,y:700},
    draggable:true,
    type:'output'
},
{
    id:"14",    
    data:{label:"Node"},
    position:{ x:1100,y:700},
    draggable:true
},
{
    id:"e",    
    data:{label:"это кросс-платформенная среда выполнения JavaScript с открытым исходным кодом; среда выполнения JavaScript, основанная на JavaScript движке V8 из Chrome; Node.js спроектирован для построения масштабируемых сетевых приложений"},
    position:{ x:1005,y:1000},
    draggable:true,
    type:'output'
},
{
    id:"15",    
    data:{label:"DataBase"},
    position:{ x:1400,y:700},
    draggable:true
},
{
    id:"f",    
    data:{label:"это упорядоченный набор структурированной информации или данных, которые обычно хранятся в электронном виде в компьютерной системе. База данных обычно управляется системой управления базами данных (СУБД). Данные вместе с СУБД, а также приложения, которые с ними связаны, называются системой баз данных, или, для краткости, просто базой данных"},
    position:{ x:1800,y:600},
    type:'output',
    draggable:true,
    targetPosition:'top',
},
{
    id:"16",    
    data:{label:"реляционная база данных"},
    position:{ x:1250,y:800},
    draggable:true
},
{
    id:"g",    
    data:{label:"это набор данных с предопределенными связями между ними. Эти данные организованны в виде набора таблиц, состоящих из столбцов и строк. В таблицах хранится информация об объектах, представленных в базе данных. В каждом столбце таблицы хранится определенный тип данных, в каждой ячейке – значение атрибута. Каждая стока таблицы представляет собой набор связанных значений, относящихся к одному объекту или сущности "},
    position:{ x:1600,y:200},
    type:'output',
    draggable:true,
    targetPosition:'left',
},
{
    id:"17",    
    data:{label:"Нереляционная база данных"},
    position:{ x:1500,y:800},
    draggable:true
},
{
    id:"h",    
    data:{label:"хранилище данных, которое не использует язык запросов SQL. Вместо этого для запроса данных используются другие языки программирования и конструкции "},
    position:{ x:1800,y:1000},
    type:'output',
    draggable:true,
    targetPosition:'top',
},
{
    id:"18",    
    data:{label:(
        <table>
           <tr className="title">
           <th >
           PostgreSQL
       </th>
           </tr>
      <tr className="name">
      <td >
      это реляционная база данных с открытым кодом, которая поддерживается в течение 30 лет разработки и является одной из наиболее известных среди всех существующих реляционных баз данных.
       </td>
      </tr>
       
       
     </table>
      
   )},
    position:{ x:1250,y:900},
    draggable:true,
    type:'output'
},
{
    id:"19",    
    data:{label:(
        <table>
           <tr className="title">
           <th >
           MongDB
       </th>
           </tr>
      <tr className="name">
      <td >
      кроссплатформенная документоориентированная база данных с открытым ПО и ведущая база данных NoSQL, написанная на C++. Она опирается на концепции коллекций и документов
       </td>
      </tr>
       
       
     </table>
      
   )},
    position:{ x:1500,y:1000},
    draggable:true,
    type:'output'
},
]