const express = require("express");
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "project123",
    database: "nodemysql"
})

db.getConnection((err) => {
    if (err) {
        throw err;
    }
    console.log("MySql Connected");
});

const app = express();

app.get("/createddb", (req, res) => {
    db.query(sql, (err) => {
        if (err) {
            throw err;
        }

        res.send("Database created")
    });
});

app.get("/createemployee", (req, res) => {
    let sql = "CREATE TABLE employee (id int AUTO_INCREMENT,name VARCHAR(100), designation VARCHAR(200), PRIMARY KEY(id))"

    db.query(sql, (err) => {
        if (err) {
            throw err;
        }
        res.send("created employee table");
    })
})

app.get("./employeeOne", (req, res) => {
    let post = { name: "John Doe", designation: "CEO" };
    let sql = "INSERT INTO employee SET ?";
    let query = db.query(sql, post, (err) => {
        if (err) {
            throw err;
        }
        res.send("employee added")
    })

})

app.get("/updateemployee/:id", (req, res) => {
    let newRole = "Updated Role";
    let sql = `UPDATE employee SET role ='${newRole}'WHERE id=${req.params.id}`;
    let query = db.query(sql, (err) => {
        if (err) {
            throw err;
        }
        res.send("Role Updated");
    })
})

app.listen("3001", () => {

    console.log("Server started on port 3001");

});