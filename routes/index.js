import express from "express"
import pool from "../db.js"
import bcrypt from "bcrypt"
import session from "express-session"

const router = express.Router()
const app = express()

let myPlaintextPassword = "bibnib"
bcrypt.hash(myPlaintextPassword, 10, function(err, hash) {
	// här får vi nu tag i lösenordets hash i variabeln hash
	console.log(hash)
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
await
router.get("/login", (req, res) => {
  if (user.name && user.password) {
    res.render("login.njk", {
      title: "logged in"
    })
  } else {
    res.render("index.njk", {
      title: "Wrong username or password"
    })
  }
})

export default router