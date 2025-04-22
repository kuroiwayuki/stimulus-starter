// import { Controller } from "@hotwired/stimulus"

// export default class extends Controller {
//     static targets = ["name", "output"]

//     greet() {
//         const name = this.nameTarget.value
//         this.outputTarget.textContent = `Hello, ${name}!`
//     }
// }


// src/controllers/hello_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["name","output"]

    greet() {
        const element = this.nameTarget
        const name = element.value
        console.log(element)
        console.log(element.value)
        console.log(`Hello, ${name}!`)
    }
}