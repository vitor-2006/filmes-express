import { Filme } from "./schema.js"

export const deleteFilme = async (id) => {
    try {
        return await Filme.findByIdAndDelete(id)
    } catch (error) {
        console.error('Erro ao deletar Filme:', error.message)
        throw error
    }
}