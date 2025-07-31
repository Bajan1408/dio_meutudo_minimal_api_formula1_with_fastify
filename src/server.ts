import fastify from 'fastify';
import { request } from 'http';
import cors from '@fastify/cors';

const server = fastify({ logger: true });

server.register(cors, {
    origin: 'http://www.localhost',
})

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

server.get('/riders', async (request, response) => {
    response.type('application/json').code(200);

    return riders;
})

interface DriversParams {
    id: string;
}

server.get<{ Params: DriversParams }>('/riders/:id', async (request, response) => {
    const id = Number(request.params.id);

    const rider = riders.find((rider) => {
        return rider.id === id;
    })

    if(!rider) {
        response.type('application/json').code(404);
        return { err: "Rider not found!" };
    }

    response.type('application/json').code(200);

    return rider;
})

server.listen({ port: 3335 }, () => {
    console.log('Servidor rodando na porta 3335');
})