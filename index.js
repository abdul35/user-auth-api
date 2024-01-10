import "dotenv/config"

import express from "express"
import sequelize from "./db/config.js"
import { User } from "./db/models/user.model.js"

import { router } from "./routes/index.js"


const app = express()

app.use(express.static('public'));

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send("<h1>This is the Auth API</h1>"))

app.use(router)

const main = async () => {
	try {
		app.listen(process.env.PORT, () => console.log("Server started!"))
		await sequelize.authenticate();
		await sequelize.sync()
	} catch (e) {
		throw new Error(e)
	}
}

main()
