import knex from "../database/db";
import { stringify, v4 as uuidv4 } from "uuid";
import jwt = require("jsonwebtoken");
import { Context } from "koa";

export const addUser = async (ctx: Context) => {
    try {
        const username = ctx.request.body.username;
        const password = ctx.request.body.password;
        const email = ctx.request.body.email;
        const id = uuidv4();
        await knex("users").insert({ id: id, username: username, email: email, password: password, }).returning("*")

        const token = jwt.sign({ id: id, email: email, password: password }, "secret")
        ctx.body = {token:token}
    }
    catch (err) {
        ctx.status = 404;
        console.log(err)
        ctx.body = err
    }
}


export const loginUser = async (ctx: Context) => {
    try {
        const email = ctx.request.body.email;
        const password = ctx.request.body.password;
        console.log(email, password)
        const data = await knex("users").where({ email: email, password: password }).select("*")
        const obj={
            id:data[0].id,
            email:data[0].email,
            password:data[0].password
        }
        const token=jwt.sign(obj,"secret")
        ctx.body={token:token}        
    }
    catch (err) {
        ctx.status = 404;
        console.log(err)
        ctx.body = err
    }
}