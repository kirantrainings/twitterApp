function userSvc() {
    this.getUsers = function () {
        var users = {
            "profiles": [
                {
                    "username": "kiran123",
                    "email": "kiran@gmail.com",
                    "phoneNumber": "9959688870"
    }, {
                    "username": "ravi1234",
                    "email": "ravi@gmail.com",
                    "phoneNumber": "6474648909"
    }, {
                    "username": "Reene1234",
                    "email": "Reene@gmail.com",
                    "phoneNumber": "938493839"
    }, {
                    "username": "teja222",
                    "email": "teja@gmail.com",
                    "phoneNumber": "983837399"
    }
    ]
        };
        return users;
    }
}

angular.module('twitterApp')
    .service('userSvc', [userSvc])
