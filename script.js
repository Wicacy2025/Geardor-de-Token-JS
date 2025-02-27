function Gerarsenha() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let senha = '';
    const tamanhoSenha = 12; // Defina o tamanho da senha desejada

    for (let i = 0; i < tamanhoSenha; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    document.getElementById('senhagerada').textContent = senha; // Exibe a senha gerada
}

function copiarSenha() {
    const senha = document.getElementById('senhagerada').textContent;
    navigator.clipboard.writeText(senha).then(() => {
        alert('Senha copiada: ' + senha);
    }).catch(err => {
        console.error('Erro ao copiar a senha: ', err);
    });
} 
