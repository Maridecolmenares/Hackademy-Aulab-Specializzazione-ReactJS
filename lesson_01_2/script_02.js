// Modulo 2
export const add_contacts = (object, ...names) => {
    object.contatti = names;
}

export const show_contacts = ({ contatti }) => {
    console.log(`I miei contatti: ${contatti}`);
}