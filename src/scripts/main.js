console.log("Welcome to the main module")

import { createPlan } from './plan.js'
import { createAsparagus } from "./seeds/asparagus.js"


// Remember that to assign what a function returns as a value of a variable, the syntax is...

// const appropriatelyNamedVariable = theFunctionThatReturnsAValue()

const yearlyPlan = createPlan();
console.log(yearlyPlan)

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)