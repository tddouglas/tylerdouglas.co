import poolPkg from "pg"
const { Pool } = poolPkg
// Will move to config file outside of version control for production

// Export default should produce singleton
export default new Pool({
	user: "root",
	host: "localhost",
	database: "tinyboiz",
	password: "y4DNksFDZ*DtmpyCV2d2",
	port: 5432
})
