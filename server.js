const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// מאפשר קריאת JSON מהבקשה
app.use(bodyParser.json());

// מאפשר CORS כדי שה-FE יוכל לשלוח בקשות
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.post("/submit", (req, res) => {
    const { fullname, email , msg , phone , subject } = req.body;
    console.log("שם משתמש:", fullname);
    console.log("אימייל:", email);
    console.log("הודעה:", msg);
    console.log("מספר טלפון:", phone);
    console.log("נושא:",  subject);

    res.send("הנתונים התקבלו בהצלחה!");
});

// הפעלת השרת
app.listen(port, () => {
    console.log(`השרת רץ: http://localhost:${port}`);

});