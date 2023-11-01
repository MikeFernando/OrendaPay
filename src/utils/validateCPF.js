function formatarCPFCNPJ(numero) {
    // Remove caracteres não numéricos
    numero = numero.replace(/\D/g, '');

    // Verifica se é CPF (11 dígitos) ou CNPJ (14 dígitos)
    if (numero.length === 11) {
        // Formata CPF (###.###.###-##)
        return numero.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (numero.length === 14) {
        // Formata CNPJ (##.###.###/####-##)
        return numero.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    } else {
        // Retorna o número original se não for um CPF ou CNPJ válido
        return numero;
    }
}
