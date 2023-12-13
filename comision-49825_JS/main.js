//* Calcular el ISR por la renta de propiedades

let ingresos, pagoPredial, deducciones, baseGravable;

do {
    ingresos = parseFloat(prompt("Ingrese el total de sus ingresos por la renta de sus propiedades"));
    if (isNaN(ingresos) || ingresos < 0) {
        alert("Por favor, ingrese un valor numérico válido y positivo.");
    }
} while (isNaN(ingresos) || ingresos < 0);


do {
    pagoPredial = parseFloat(prompt("Ingrese el total del pago Predial pagado"));
    if (isNaN(pagoPredial) || pagoPredial < 0) {
        alert("Por favor, ingrese un valor numérico válido y positivo.");
    }
} while (isNaN(pagoPredial) || pagoPredial < 0);

deducciones = (ingresos * 0.35) + pagoPredial;
baseGravable = ingresos - deducciones;


if (baseGravable > 0) {
   
    let tarifas = [8952.49, 75984.56, 133536.08, 155229.81, 185852.58];
    let tasas = [0.0192, 0.0640, 0.1088, 0.16,0.1792,0.2136];

    
    let isrTotal = 0;
    let i = 0;

    do {
        let tramo = Math.min(baseGravable, tarifas[i]);
        isrTotal += tramo * tasas[i];
        baseGravable -= tramo;

        i++;

        if (baseGravable <= 0) {
            break;
        }
    } while (true);

    alert(`Tu ISR es de $${isrTotal.toFixed(2)}`);
} else {
    alert("No tienes ISR que pagar debido a las deducciones aplicadas.");
}
