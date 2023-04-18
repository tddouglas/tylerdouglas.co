var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import { getUsers, getUserById } from "../database/databaseMethods.js";
export const router = express.Router();
/* GET users listing. */
router.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    getUsers().then((response) => {
        res.send("Queried users db to get " + response.id + " " + response.email);
    });
}));
/* GET users by id. */
router.get("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    getUserById(id).then((response) => {
        res.send("Queried users db to get " + response.id + " " + response.email);
    });
}));
