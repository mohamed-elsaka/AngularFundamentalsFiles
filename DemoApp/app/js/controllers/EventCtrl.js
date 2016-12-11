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
                    time: '10:30 am',
                },{
                    title: 'Python Beyoned the basics',
                    lecturer: 'Paul Dan',
                    time: '11:30 am',
                },{
                    title: 'Django Fundamentals',
                    lecturer: 'Dan Pastia',
                    time: '12:30 am',
                },
            ]
        }
    }
);