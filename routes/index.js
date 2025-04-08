import express from "express"
import pool from "../db.js"
import bcrypt from "bcrypt"
import session from "express-session"
import user from "../db.js"

const router = express.Router()
const app = express()

let myPlaintextPassword = "bibnib"
bcrypt.hash(myPlaintextPassword, 10, function(err, hash) {
	// här får vi nu tag i lösenordets hash i variabeln hash
	console.log(hash)
})

router.get("/login", async (req, res) => { 
  const [user] = await pool.promise().query(`
  user.name*
  `)
})

router.get("/", async (req, res) => {
    if (req.session.views) {
        req.session.views++
      } else {
        req.session.views = 1
      }
      res.render("index.njk",
        { title: "Login", message: "Do the thing", views: req.session.views }
      )
})

/*router.get("/login", (req, res) => {
  if (user.name && user.password) {
    res.render("login.njk", {
      title: "logged in"
    })
  } else {
      if (req.session.views) {
        req.session.views++
      } else {
        req.session.views = 1
      }
    res.render("index.njk",
    { title: "Wrong username or password", views: req.session.views }
    )
  }
})*/


export default router