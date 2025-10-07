import { Filme } from "./schema.js"

export const getFilme = async (req, res) => {
    try {
        return await Filme.find()
    } catch (error) {
        console.log('erro ao buscar filmes', error.message)
        throw error
    }
}