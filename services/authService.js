import axios from 'axios';

// URL do back-end hospedado no Heroku
const API_URL = 'https://seduc-professores-alunos-a611446c60df.herokuapp.com';

export const login = async (cpf, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, {
            cpf: cpf,
            password: password
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao fazer login", error);
        throw error; // Lança o erro para ser tratado no componente
    }
};
