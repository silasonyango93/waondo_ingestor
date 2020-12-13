var mysql = require("mysql");
var express = require("express");
var app = express();
var path = require("path");
var con = require("../common/dbConnect.js");

module.exports = class Repository {

    static fetchAllStudents() {
        return new Promise(function(resolve, reject) {
            con.query(
                "SELECT * FROM students;",
                function(err, result) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    }
};
