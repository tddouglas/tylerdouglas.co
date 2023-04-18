var __awaiter =
	(this && this.__awaiter) ||
	function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function (resolve) {
						resolve(value)
				  })
		}
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value))
				} catch (e) {
					reject(e)
				}
			}
			function rejected(value) {
				try {
					step(generator["throw"](value))
				} catch (e) {
					reject(e)
				}
			}
			function step(result) {
				result.done
					? resolve(result.value)
					: adopt(result.value).then(fulfilled, rejected)
			}
			step(
				(generator = generator.apply(thisArg, _arguments || [])).next()
			)
		})
	}
import pool from "./database.js"
function getUsers() {
	return __awaiter(this, void 0, void 0, function* () {
		try {
			const { rows } = yield pool.query(
				"SELECT * FROM users WHERE id = $1",
				[1]
			)
			console.log("user:", rows[0])
			return rows[0]
		} catch (err) {
			console.log(err)
			throw err
		}
	})
}
function getUserById(id) {
	return __awaiter(this, void 0, void 0, function* () {
		try {
			const { rows } = yield pool.query(
				"SELECT * FROM users WHERE id = $1",
				[id]
			)
			console.log("user by id:", rows[0])
			return rows[0]
		} catch (err) {
			console.log(err)
			throw err
		}
	})
}
function createUser(name, email) {
	return __awaiter(this, void 0, void 0, function* () {
		try {
			const { rows } = yield pool.query(
				"INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
				[name, email]
			)
			console.log("Created user with id:", rows[0].id)
			return rows[0]
		} catch (err) {
			console.log(err)
			throw err
		}
	})
}
export { getUsers, getUserById, createUser }
