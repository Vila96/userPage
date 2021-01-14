//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////GENERAL////////
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors")
const port = process.env.PORT || 5001;
//Imports
const apiRouter = require("./routes");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "coolmena",
    port: "3306"
});

app.use(cors())
app.use(express.json());


app.use("/api/chirps", apiRouter);

//CONNECTION TO DB (SQL)
connection.connect((err) => {
    if(err) {
        console.log(err)
    }
    else {
        console.log("connected")
    }
});

app.listen(port);

console.log("App is listening on port " + port);


//////////////////////////// ENDPOINTS & QUERIES /////////////////////////////////////////////////////////////////////////////////////////////

app.post("/create", (req, res) => {
    console.log(req.body)
    const test1 = req.body.userData1;
    const test2 = req.body.userData2;

    connection.query(
        "INSERT INTO coolmena (test, test2) VALUES (?, ?)", [test1, test2],
            (err, result) => {
                if(err) {
                    console.log(err)
                } else {
                    res.send("Values inserted")
                }
            }
    )

})

app.get("/get", (req, res) => {
    connection.query("SELECT * FROM users", 
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)

            }
        });
        connection.end
})



app.get("/getByName/:name", (req, res) => {


    const name = req.params.name || "";

    connection.query("SELECT * FROM users WHERE name = ? ", [name],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)

            }
        });
        connection.end
})



app.put("/update", (req, res) => {
    const id = req.body.id;
    const name = req.body.name || req.body.nameSave;
    const lastname = req.body.lastname || req.body.lastnameSave;
    const birthday = req.body.birthday || "0000-00-00";
    const email = req.body.email || req.body.emailSave;
    const tel = req.body.tel || req.body.telSave;



    connection.query("UPDATE users SET name = ?, family_name = ?, birthday = ?, email = ?, tel = ? WHERE id = ?", [name, lastname, birthday, email, tel, id], 
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
                console.log(result)
            }
    })
})

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id
    connection.query("DELETE FROM users WHERE id = ?", [id],
        (err, result) => {
            if(err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })
})