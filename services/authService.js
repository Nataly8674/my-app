const API_URL = 'https://seduc-professores-alunos-a611446c60df.herokuapp.com'; // Certifique-se de que está correto

export const login = async (cpf, senha) => {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cpf: cpf,
                senha: senha, // "senha" é o campo correto, conforme você testou
            }),
        });
        
        const data = await response.json();
        
        if (response.ok) {
            console.log("Login bem-sucedido", data);
            return data;
        } else {
            console.error("Erro no login:", data);
            throw new Error(data.message || "Erro desconhecido");
        }
    } catch (error) {
        console.error("Erro de conexão:", error);
        throw error;
    }
};
