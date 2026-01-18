const express = require('express');
const path = require('path');
const app = express();

// Puerto que Railway asigna automáticamente o 3000 por defecto
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde el directorio raíz
app.use(express.static(__dirname));

// Ruta principal - servir index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Redirigir todas las rutas a index.html (para SPA si es necesario)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en el puerto ${PORT}`);
    console.log(`📡 Visita: http://localhost:${PORT}`);
});
