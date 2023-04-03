import pool from "./database.js"

async function getUsers() {
	try {
		const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [
			1
		])
		console.log("user:", rows[0])
		return rows[0]
	} catch (err) {
		console.log(err)
		throw err
	}
}

async function getUserById(id: Number) {
	try {
		const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [
			id
		])
		console.log("user by id:", rows[0])
		return rows[0]
	} catch (err) {
		console.log(err)
		throw err
	}
}

async function createUser(name: String, email: String) {
	try {
		const { rows } = await pool.query(
			"INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
			[name, email]
		)
		console.log("Created user with id:", rows[0].id)
		return rows[0]
	} catch (err) {
		console.log(err)
		throw err
	}
}

export { getUsers, getUserById, createUser }
