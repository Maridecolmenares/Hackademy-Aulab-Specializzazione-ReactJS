// Modulo 3 
import student from "./script.js"
console.log(student);

import { add_contacts, show_contacts } from "./script_02.js";
add_contacts(student, "Yoda", "Anakin", "Obi-wan");

console.log(student);
show_contacts(student);