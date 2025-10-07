import mongoose from "mongoose";

const FilmeSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    diretor: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    }, 
    genero: {
        type: String,
        required: true
    }
})
export const Filme = mongoose.model('filme', FilmeSchema)