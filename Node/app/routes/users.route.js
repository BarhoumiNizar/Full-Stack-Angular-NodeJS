module.exports = function(app) {
    //Appeler le controller de model users
    const users = require('../controller/users.controller.js');


    // Create a new Customer
    app.post('/api/users', users.create);

    //Afficher Tout les USERS
    app.get('/api/users', users.findAll);

    // Retrieve a single User by Id
    app.get('/api/users/:userId', users.findById);
    //Supprimer user:
    app.delete('/api/users/:idUser', users.delete);
    //Supprimer user:
    app.delete('/api/users/:id', users.deleteId);
    //Supprimer All users:
    app.delete('/api/users', users.deleteAll);

    //Route Modifier User
    app.put('/api/users', users.UpdateUser);



}