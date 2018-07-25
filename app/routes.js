// app/routes.js

// grab the countdown model we just created
var date = require('./models/day');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/countdown', function(req, res) {
            // use mongoose to get a date in the database
            date.find({selected: true}, {}, {}, function(err, day) {
                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err){
                    res.send(err);
                }

                res.json(day); // return a date in JSON format
            }); 
        });

        app.post('/api/countdown', function(req, res) {

            var newDate = new date();

            newDate.day = req.body[0].day;
            newDate.month = req.body[0].month;
            newDate.year = req.body[0].year;
            newDate.hours = req.body[0].hours;
            newDate.minutes = req.body[0].minutes;

            newDate.selected = true;

            newDate.save(function(err, result) {

                if(err) {
                    res.send(err);
                }

                res.json(result);
            }); 
        });

        app.put('/api/countdown', function(req, res) {

            var newDate = new date();

            newDate.day = req.body[0].day;
            newDate.month = req.body[0].month;
            newDate.year = req.body[0].year;
            newDate.hours = req.body[0].hours;
            newDate.minutes = req.body[0].minutes;

            date.find({selected: true}, {}, {}, function(err, day) {
                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err){
                    res.send(err);
                    return;
                }
                
                day[0].day = req.body[0].day;
                day[0].month = req.body[0].month;
                day[0].year = req.body[0].year;
                day[0].hours = req.body[0].hours;
                day[0].minutes = req.body[0].minutes;
                day[0].save(function(err, result){
                    if(err) {
                        res.send(err);
                    } else {
                        res.json(result);
                    }
                })
            }); 
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

    };
