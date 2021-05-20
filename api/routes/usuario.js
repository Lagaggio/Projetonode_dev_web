module.exports = app => {
    const controller = app.controllers.usuario;
    app.route('/usuario')
        .post(
            controller.createUsuario
        )
        .get(
            controller.getUsuario
        )
        .delete(
            controller.deleteUsuario
        )
}
