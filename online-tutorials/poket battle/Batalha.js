var bocaDeMotor = new Object();
bocaDeMotor.classe = 'Monstro';
bocaDeMotor.nome = 'Boca De Motor';
bocaDeMotor.dano = 50;
bocaDeMotor.escudo = 100;
bocaDeMotor.Hp = 1000;

var Sherekao_da_Fiona = new Object();
Sherekao_da_Fiona.classe = 'Sherekao'
Sherekao_da_Fiona.nome = 'sherekão da Fiona'
Sherekao_da_Fiona.dano = 50;
Sherekao_da_Fiona.escudo = 100;
Sherekao_da_Fiona.Hp = 1000;

function combateInicial(personagem1,personagem2){   //determina(calcula) os valores de danos sobre os escudos

    let reduzEscudo1 = Math.abs((personagem1.escudo / 10) * (Math.random() * 5));    //dano sofrido pelo escudo do personagem1    
    let reduzEscudo2 = Math.abs((personagem2.escudo / 10) * (Math.random() * 5));    //dano sofrido pelo escudo do personagem2    
    
    let dano1 = Math.abs(personagem1.dano - ((personagem1.dano / 100) * (Math.random() * 1.5)));
    let dano2 = Math.abs(personagem2.dano - ((personagem1.dano / 100) * (Math.random() * 1.5)));

    while (personagem1.escudo > 0) {    //aplica os valores de danos sobre os escudos e a HP até que os escudos tenham resistência === 0
        console.log(personagem1.nome + ' resistência do escudo: ' + Math.abs(personagem1.escudo));
        console.log('-------------------------------------');
        
        console.log(personagem1.nome + ' HP: ' + Math.abs(personagem1.Hp));
        console.log('-------------------------------------');

        console.log(personagem2.nome + ' resistência do escudo: ' + Math.abs(personagem2.escudo));
        console.log('-------------------------------------');
        
        console.log(personagem2.nome + ' HP: ' + Math.abs(personagem2.Hp));
        console.log('-------------------------------------');

        console.log(personagem2.nome + " sofre " + dano1 + " de dano.");
        console.log('-------------------------------------');

        console.log(personagem1.nome + " sofre " + dano2 + " de dano.");
        console.log('-------------------------------------');

        if(personagem2.escudo <= 0){
            break;
        }
        if (personagem1.Hp <= 0){
            break;
        }
        if(personagem2.Hp <= 0){
           break;
        }
        personagem1.escudo -= reduzEscudo1;
        personagem1.Hp -= dano2;

        personagem2.escudo -= reduzEscudo2;
        personagem2.Hp -= dano1;
    }
};

function combateDireto(personagem1,personagem2){ //aplica danos diretamente no HP
   
    combateInicial(personagem1,personagem2);

    let dano1 = personagem1.dano - Math.abs((personagem2.Hp / 100)) * ((Math.random()) * 5);    
    let dano2 = personagem2.dano - Math.abs((personagem1.Hp / 100)) * ((Math.random()) * 5);
    
    while(personagem1.Hp > 0){
        console.log(personagem1.nome + ' HP: ' + personagem1.Hp);            
        console.log('-------------------------------------');

        console.log(personagem2.nome + ' HP: ' + personagem2.Hp);
        console.log('-------------------------------------');
    
        console.log(personagem1.nome + " recebe " + dano2 + " de dano.");
        console.log('-------------------------------------');

        console.log(personagem2.nome + " recebe " + dano1 + " de dano.");
        console.log('-------------------------------------');

        if (personagem2.Hp <= 0){
            return console.log('Vitória de ' + personagem1.classe + ' ' + personagem1.nome + "!!!");
        } 
        personagem1.Hp -= dano2;
        personagem2.Hp -= dano1;
    }

    if (personagem1.Hp <= 0){
        return console.log('Vitória de ' + personagem2.classe + ' ' + personagem2.nome + "!!!");
   }
};

function ativaBatalha(persoagem1,personagem2){ 
    combateDireto(persoagem1,personagem2);
} 
console.log(ativaBatalha(maou,bocaDeMotor));