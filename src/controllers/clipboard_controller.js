// src/controllers/clipboard_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["source"]
  copy(event) {
      event.preventDefault()
      console.log('あああ', this.sourceTarget.value)
      navigator.clipboard.writeText(this.sourceTarget.value)
  }
}
