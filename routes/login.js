const express = require('express');
const LoginService = require('../services/login');
const Login = require('../interfaces/login')

function loginApi(app){

    const router = express.Router();
    app.use("/login", router);
    const loginService = new LoginService();

    // Crear un nuevo usuario
    router.put("/", async function(req, res, next){
        const { body: prim_nombre, seg_nombre, prim_apellido, seg_apellido, correo, contraseña, telefono } = req;
        try {
           
            const loginCreated = await loginService.createLogin(prim_nombre, seg_nombre, prim_apellido, seg_apellido, correo, contraseña, telefono);
            res.status(200).json({
                data: loginCreated,
                message: 'login created succesfully'
            });

        } catch (err) {
            next(err);
        }
    });

    // Obtener un usuario por id
    router.get ("/", async function(req, res, next){
        const { body: id } = req;
        try {
           const _id = await loginService.getLogin(id.id);
           res.status(200).json({
               id: _id,
               message: 'login requested'
           });
        }
        catch (err) {
            next(err);
        }
    });


    router.post("/", async function(req, res, next){
        const { id, prim_nombre, seg_nombre, prim_apellido, seg_apellido, correo, contraseña, telefono } = req.body;
        try {
            const loginUpdate = await loginService.updateLogin(id, prim_nombre, seg_nombre, prim_apellido, seg_apellido, correo, contraseña, telefono);
            res.status (200).json({
                data: loginUpdate,
                message: 'login succesfully upadate'
            });
             
        } catch (err) {
            next(err);
        }
    });

    router.delete("/", async function(req, res, next){
        const { body: id } = req;
        console.log('login to delete', id);
        try {
           const loginDelete = await loginService.deleteLogin(id.id);
           res.status(200).json({
               luhn: loginDelete,
               message: 'login succesfully deleted'
           });
        }
        catch (err) {
             next(err);
        }
    });

}

module.exports = loginApi;