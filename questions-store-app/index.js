const path = require('path');
// load express dependencies;
const express = require('express');
const app = express();

//  db dependencies
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@questions-store.ma1bp.mongodb.net/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });
const QuestionSchema = new mongoose.Schema({ name: String, body: String }, { timestamps: true })
const Question = mongoose.model('questions', QuestionSchema);

app.use(express.static("views"));
app.use(express.json());
// set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', async (request, response) => {
    const questions = await Question.find().sort({
        createdAt: -1
    });
    response.render('index', {
        bg_color: process.env.BG_COLOR,
        text_color: process.env.TEXT_COLOR,
        questions: questions
    });
});

app.post('/add-question', async (request, response) => {
    const newQuestion = new Question({ name: request.body.name, body: request.body.body })
    newQuestion.save()
        .then(result => {
            console.log('Question stored succesufully!');
            response.status(200).send();
        }).catch(err => {
            console.error(err);
            response.status(500).send();
        })

});

app.listen(8080, (res) => {
    console.log('We are listening to :: 8080');
})