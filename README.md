# El Sabor Digital - Sistema de Reservas

Esta es una Single Page Application (SPA) construida con React, Tailwind CSS y Vite para la gestión de reservas del restaurante "El Sabor Digital".

## Requisitos Previos

Para ejecutar este proyecto, necesitas tener instalado **Node.js** en tu computadora.
Puedes descargarlo e instalarlo desde: [https://nodejs.org/](https://nodejs.org/)

## Instrucciones de Instalación

1. Abre una terminal (PowerShell o CMD).
2. Navega hasta la carpeta del proyecto:
   ```bash
   cd "C:\Users\yosimardiamo\OneDrive - Universidad de la Sabana\Documentos\0.6 Clases Unisabana 2025-2\5.1 Diplomado en PBI 2025-2 V2\Semana 10\el-sabor-digital"
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecución

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Luego abre tu navegador en la URL que aparecerá en la terminal (usualmente `http://localhost:5173`).

## Características

- **Stack Tecnológico**: React + Vite + Tailwind CSS
- **Base de Datos**: Supabase
- **Funcionalidades**:
  - Formulario de reserva (Nombre, Fecha, Personas)
  - Validación de campos
  - Conexión real a base de datos
  - Diseño responsivo y moderno

## Estructura del Proyecto

- `src/App.jsx`: Componente principal y lógica del formulario.
- `src/supabaseClient.js`: Configuración de la conexión a Supabase.
- `src/index.css`: estilos globales y configuración de Tailwind.
