import server from './server';

// Configuración del servidor
const host: string = "localhost";
const port: number = Number(process.env.PORT) || 4000;

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}/api`);
});
