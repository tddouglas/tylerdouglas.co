import createError from "http-errors"
import express, { ErrorRequestHandler } from "express"
import path from "path"
import { fileURLToPath } from "url"
import cookieParser from "cookie-parser"
import logger from "morgan"
import dotenv from "dotenv"
import pool from "./database/database.js"

import { router as indexRouter } from "./routes/index.js"
import { router as usersRouter } from "./routes/users.js"

export const app = express()

dotenv.config()

//configure database
pool.connect(function (err, client, done) {
	if (err) throw new Error(err.message)
	console.log("Connected to db")
})

// view engine setup
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.set("views", path.join(__dirname, "views"))

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", indexRouter)
app.use("/users", usersRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError(404))
})

// error handler
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get("env") === "development" ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.render("error")
}
app.use(errorHandler)
