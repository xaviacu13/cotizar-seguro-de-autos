// obtine la diferencia del anio
 export function  obtenerDiferenciaYear(year){
    return new Date().getFullYear()-year;
}

// calcula total a pagar segun la marca
export function calcularMarca(marca){
    let incrememto;
    switch(marca){
        case 'europeo':
            incrememto=1.30;
            break;
        case 'americano':
            incrememto = 1.15;
            break;
        case 'asiatico':
            incrememto= 1.05;
            break;         
        default:
            break;
    }
    return incrememto;
}
// calcula el tipo de seguro
export function obtenerPlan (plan){
    return (plan==='basico')? 1.20: 1.50;
}
 