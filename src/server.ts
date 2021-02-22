import express, { request, response } from 'express';
const app = express();

/*
 * GET => BUSCAR INFORMAÇÃO
 * POST => SALVAR
 * PUT => ALTERAR
 * DELETE => DELETAR
 * PATCH  => ALTERAÇÃO ESPECÍFICA
 */

// http>//localhost:3333/user
app.get("/route1", (request, response)=> {
    return response.send("HW NLW04");
});

app.get("/", (request,response)=>{
    return response.json({ message: "HW NLW04" });
});

app.post("/", (request, response)=>{
    // Recebeu os dados para salvar
    return response.json({ message: "Os dados foram salvos com sucesso!" });
});

app.listen(3333, ()=> console.log('Server is Running!'));