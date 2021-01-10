module.exports = (sequelize, Sequelize) => {

    const User = sequelize.define('personnes', {
        nom: {
            //STRING et pas string
            type: Sequelize.STRING
        },
        prenom: {
            type: Sequelize.STRING
        }

    });
    return User;

}