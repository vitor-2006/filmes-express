import { Filme } from "./schema.js"

export const createFilme = async (titulo, diretor, ano, genero) => {
    try {
        const newFilme = new Filme({ titulo, diretor, ano, genero })
        return await newFilme.save()
    } catch (error) {
        console.error('Erro ao criar Filme', error.message)
        throw error
    }
}