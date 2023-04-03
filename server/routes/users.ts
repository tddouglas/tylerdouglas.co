import express from "express"
import { getUsers, getUserById } from "../database/databaseMethods.js"

export const router = express.Router()

/* GET users listing. */
router.get("/", async (req, res, next) => {
	getUsers().then((response) => {
		res.send(
			"Queried users db to get " + response.id + " " + response.email
		)
	})
})

/* GET users by id. */
router.get("/:id", async (req, res, next) => {
	const id = parseInt(req.params.id)
	getUserById(id).then((response) => {
		res.send(
			"Queried users db to get " + response.id + " " + response.email
		)
	})
})
