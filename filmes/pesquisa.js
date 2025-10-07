import { Filme } from "./schema.js";

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
export const pesqPorTitulo = async (titulo) => {
    try {
      const safeTitulo = escapeRegex(titulo);
      console.log(safeTitulo)
      console.log(titulo)
      return await Filme.find({ titulo: { $regex: safeTitulo, $options: "i" } }).exec();
    } catch (error) {
      console.error('Erro ao pesquisar Filme', error.message);
      throw error;
    }
}

export const pesqPorDiretor = async (diretor) => {
    try {
      const safeDiretor = escapeRegex(diretor);
      return await Filme.find({ diretor: { $regex: safeDiretor, $options: "i" } }).exec();
    } catch (error) {
      console.error('Erro ao pesquisar Filme', error.message);
      throw error;
    }
}

export const pesqPorAno = async (ano) => {
    try {
      return await Filme.find({ ano: ano }).exec();
    } catch (error) {
      console.error('Erro ao pesquisar Filme', error.message);
      throw error;
    }
}

export const pesqPorGenero = async (genero) => {
    try {
      const safeGenero = escapeRegex(genero);
      return await Filme.find({ genero: { $regex: safeGenero, $options: "i" } }).exec();
    } catch (error) {
      console.error('Erro ao pesquisar Filme', error.message);
      throw error;
    }
}