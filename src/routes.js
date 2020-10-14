export default function (app, config) {
    app.get('/', (req, res) => {
        res.json(config);
    });
};