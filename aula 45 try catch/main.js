try {
    // É executada quando não há erros 
} catch (e) {
    // É executada quando há erros
} finally {
    // Sempre é executado
}

function retornaHora (data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
       
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit', // Coloca dois digitos em cada campo da hora, minuto e segundo
    minute: '2-digit',
    second: '2-digit',
    hour12: false // Coloca a hora no padrão 24h
    });
}
 try {
    const data = new Date ('01-01-1970  12:58:12');
    const hora = retornaHora();
    console.log(hora);
 } catch (e) {
     // Tratar erro
 } finally {
     console.log('Tenha um excelente dia')
 }
