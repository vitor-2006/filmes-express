import express from 'express'
import { getFilme } from './get.js'
import { createFilme } from './post.js';
import { updateFilme } from "./put.js"
import { deleteFilme } from './delete.js';
import { pesqPorTitulo, pesqPorDiretor, pesqPorAno, pesqPorGenero } from './pesquisa.js'

const routesFilme  = express.Router();

routesFilme.get('/filme', async (req, res) => {
    const Filmes = await getFilme()
    if(Filmes) {
        return res.status(200).send(Filmes)
    } else {
        return res.status(404).send({ message: 'não têm Filmes registrados' })
    }
});

routesFilme.post('/filme', async (req, res) => {
    const { titulo, diretor, ano, genero } = req.body
    const newFilme = await createFilme(titulo, diretor, ano, genero)
    if(!newFilme) {
        return res.status(400).send("Filme inválido!")
    }
    return res.status(201).send({ message: 'Filme criado com sucesso', filme: newFilme })
});

routesFilme.put('/filme/:id', async (req, res) => {
    const { id } = req.params
    const { titulo, diretor, ano, genero } = req.body
    const updatedFilme = await updateFilme(id, titulo, diretor, ano, genero)
    if(updatedFilme) {
        return res.status(200).send({ message: 'Filme atualizado com sucesso', filme: updatedFilme })
    } else {
        return res.status(404).send({ message: 'Filme não encontrado ou inválido' })
    }
});

routesFilme.delete('/filme/:id', async (req, res) => {
    const { id } = req.params
    const deletedFilme = deleteFilme(id)
    if(deletedFilme) {
        return res.status(200).send({ message:'Filme deletado com sucesso', Filme: deletedFilme })
    } else {
        return res.status(404).send({ message: 'Filme não encontrado' })
    }
});

routesFilme.get('/filme/search', async (req, res) => {
    const { titulo, diretor, ano, genero } = req.query
    let searchFilme 
    if(titulo) {
       searchFilme = await pesqPorTitulo(titulo)
    } else if(diretor) {
        searchFilme = await pesqPorDiretor(diretor)
    } else if(ano) {
        searchFilme = await pesqPorAno(ano)
    }else if(genero) {
        searchFilme = await pesqPorGenero(genero)
    }
    if(searchFilme) {
        return res.status(200).send(searchFilme)
    } else {
        return res.status(404).send({ message: 'Filme não encontrado' })
    }
})

export {routesFilme}