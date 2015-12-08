export default function (server) {
    server.get('/', (req, res, next) => {
        res.send({ hello: "han" });
        next();
    });
}
