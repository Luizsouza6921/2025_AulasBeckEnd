let diaSemana = 'Sexta-feira';

switch (diaSemana) {
    case 'Segunda-feira': //IF (diaSemana == 'Segunda-feira')   
        console.log('Hoje tem SENAI');
        break;
    case 'Terça-feira':
        console.log('Hoje tem SENAI');
        break;
    case 'Quarta-feira':
    case 'Quinta-feira':
    case 'Sexta-feira':
        console.log('Hoje tem Aula do SESI');
        break;
        default:   //ELSE
            console.log('Hoje não tem aula');
}
