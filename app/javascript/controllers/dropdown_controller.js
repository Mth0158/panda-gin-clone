import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="dropdown"
export default class extends Controller {
  static get targets() {
    return ["dropdownMenu", "dropdownButton"];
  }

  connect() {
    console.log("hello");
  }

  toggle() {
    console.log(this.dropdownMenuTarget.classList);
    this.dropdownMenuTarget.classList.toggle("hidden");
  }

  hide(event) {
    if (event && this.dropdownMenuTarget.contains(event.target)) {
      return;
    }
    this.dropdownMenuTarget.classList.add("hidden");
  }
}
