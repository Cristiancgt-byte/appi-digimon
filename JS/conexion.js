var digimones = [];

async function conexion() {
    const res = await fetch("https://digimon-api.vercel.app/api/digimon");
    const data = await res.json();
    return data;
}

async function general() {
    if (digimones.length === 0) {
        digimones = await conexion();
    }
    home();
}
