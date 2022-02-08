const fs = require('fs');
const db = require('./database.json')

function set(key, value) {
        //import { SetMethod } from "../methods/set";
        if (!key) throw new TypeError("No key specified.");

        db[key] = value;
        fs.writeFileSync('./database.json', JSON.stringify(db))
    }

function get(key) {
        //import { GetMethod } from "../methods/get";
        if (!key) throw new TypeError("No key specified.");
        return db[key];
    }

function has(key) {
        //import { HasMethod } from "../methods/has";
        if (!key) throw new TypeError("No key specified.");
        return Boolean(db[key])
    }

function all() {
        //import { AllMethod } from "../methods/all";
        return Object.keys(db).map((key) => {
            return {
                key,
                data: db[key]
            };
        });
    }

function remove(key) {
        //import { DeleateMethod } from "../methods/delete";
        if (!key) throw new TypeError("No key specified.");
        delete db[key];
        fs.writeFileSync('./database.json', JSON.stringify(db))
    }

function clear() {
        //import { ClearMethod } from "../methods/clear";
        fs.writeFileSync('./database.json', JSON.stringify({}))
    }

function deleteAll() {
        //import { DeleateAllMethod } from "../methods/deleteAll";
        fs.writeFileSync('./database.json', JSON.stringify({}))
    }

function push(key, element) {
        //import { PushMethod } from "../methods/push";
        if (!key) throw new TypeError("No key specified.");
        if (!db[key]) db[key] = [];
        db[key].push(element);
        fs.writeFileSync('./database.json', JSON.stringify(db))
    }

function add(key, number) {
        //import { AddMethod } from "../methods/add";
        if (!key) throw new TypeError("No key specified.");
        if (!db[key]) db[key] = 0;
        db[key] += number;
        fs.writeFileSync('./database.json', JSON.stringify(db))
    }

function fetchAll() {
        //import { FetchAllMethod } from "../methods/fetchAll";
        return Object.keys(db).map((key) => {
            return {
                key,
                data: db[key]
            };
        });
    }

function subtract(key, count){
        if(!db[key]) db[key] = 0;
        db[key] -= count;
        fs.writeFileSync("./database.json", JSON.stringify(db))
    };
    
function sub(key, count){
        if(!db[key]) db[key] = 0;
        db[key] -= count;
        fs.writeFileSync("./database.json", JSON.stringify(db))
    };

module.exports = {
    add,
    set,
    remove,
    has,
    fetchAll,
    subtract,
    sub,
    push,
    deleteAll,
    clear,
    all,
    get
}