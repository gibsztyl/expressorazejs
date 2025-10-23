const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/hello', (req, res) => {
    res.send("Witaj w mojej aplikacji");
});
app.get('/', (req, res) => {
    res.render('index', {title: "Strona glowna", paragraf: "Paragraf dla strony glownej"})
});
app.get('/contact', (req, res) => {
    res.render('contact', {title: "Kontakt", paragraf: "To jest paragraf dla strony kontaktowej"})
});
app.get('/about', (req, res) => {
    res.render('about', {title:"O nas"})
});
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'))
});






const PORT = 4000;
app.listen(PORT, () => {

    console.log(`Serwer dziala na http://localhost:${PORT}`);

});