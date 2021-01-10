const { users } = require('../config/db.config.js');
const db = require('../config/db.config.js');

//définition User de type users notre entity dans model
const User = db.users;
/*********Définition des Fonctions de CRUD *********/

// Post a User

exports.create = (req, res) => {
    // Save to MySQL database
    let client = req.body;
    User.create(client).then(result => {
        // Send created customer to client
        res.json(result);
    });
};

// Fetch all Users
exports.findAll = (req, res) => {
    User.findAll().then(users => {
        // Send all customers to Client
        res.json(users);
    });
};

// Find a User by Id
exports.findById = (req, res) => {
    const id = req.params.userId;
    User.findByPk(id).then(data => {
        res.json(data);
    })
};
// Delete a User by Id

exports.delete = (req, res) => {
    const id = req.params.idUser;
    User.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({ msg: 'deleted successfully a customer with id = ' + id });
    });
};
// Delete  User by Id (22)
exports.deleteId = (req, res) => {

    User.destroy(id, {
        where: { id: id }
    }).then(() => {
        res.status(200).json({ msg: 'deleted successfully a customer with id = ' });
    });
};
// Delete  All User 
exports.deleteAll = (req, res) => {
    User.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({ message: `${nums} Tutorials were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all tutorials."
            });
        });
};
//Modifier User
exports.UpdateUser = (req, res) => {

    let client = req.body;
    let id = req.body.id;
    User.update(client, { where: { id: id } }).then(() => {
            res.status(200).json({ msg: "updated successfully a User with id = " + id });
        },
        error => res.status(200).json({ msg: "updated Error a User with id = " + id }));

};