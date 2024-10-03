import express from "express";
import { createRestaurant } from "../controllers/retaurant.controller.js";

const router = express.Router();

router.route("/").post(createRestaurant)