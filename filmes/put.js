import { Filme } from "./schema.js"

export const updateFilme = async (id, titulo, diretor, ano, genero) => {
    try {
        const updatedFilme = await Filme.findByIdAndUpdate(
            id,
            { titulo, diretor, ano, genero },
            { new:true, runValidators:true }
        )
        return updatedFilme
    } catch (error) {
        console.error('Erro ao atualizar Filme:', error.message)
        throw error
    }
}