import fastify from 'fastify';
import { request } from 'http';

const server = fastify({ logger: true });

const teams = [
    { id: 1, name: 'Caloi', base: 'Brazil' },
    { id: 2, name: 'Monark', base: 'Brazil' },
    { id: 3, name: 'Sundown', base: 'Brazil' }
]

const riders = [
    { id: 1, name: 'Avancinni', team: 'Caloi' },
    { id: 2, name: 'Ulan Galinski', team: 'Monark' },
    { id: 3, name: 'Mathiew Van Der Poel', team: 'Sundown' },
    
]

server.get('/teams', async (request, response) => {
    response.type('application/json').code(200);

    return teams;
})

server.get('/pilots', async (request, response) => {
    response.type('application/json').code(200);

    return riders;
})

server.listen({ port: 3335 }, () => {
    console.log('Servidor rodando na porta 3335');
})