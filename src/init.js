export default function(app, config) {
    app.listen(config.PORT, () => {
        console.log(`${config.APP_NAME} listening at http://localhost:${config.PORT}`);
    });
}
