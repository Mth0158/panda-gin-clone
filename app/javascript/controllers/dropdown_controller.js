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
    if (this.dropdownButtonTarget.classList.contains("fa-bars")) {
      this.dropdownButtonTarget.classList.remove("fa-bars");
      this.dropdownButtonTarget.classList.add("fa-minus");
    } else {
      this.dropdownButtonTarget.classList.remove("fa-minus");
      this.dropdownButtonTarget.classList.add("fa-bars");
    }
  }
}
