eventsApp.controller('EventCtrl',
    function EventCtrl($scope) {
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA',
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    title: 'Python Fundamentals',
                    lecturer: 'Joe Doe',
                },{
                    title: 'Python Beyoned the basics',
                    lecturer: 'Paul Dan',
                },{
                    title: 'Django Fundamentals',
                    lecturer: 'Dan Pastia',
                },
            ]
        }
    }
);