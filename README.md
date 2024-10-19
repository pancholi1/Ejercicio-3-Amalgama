# Ejercicio 3 - Amalgama

Este proyecto es una aplicación de React creada para el desafío de autenticación de **Amalgama**.

## Tecnologías Utilizadas

- **Vite**: Para mejorar el la velocidad de compilacion y desarrollo.
- **React 18**: La última versión de React, que proporciona características avanzadas y mejoras en el rendimiento.
- **TypeScript**: Para un desarrollo más seguro y robusto gracias a la tipificación estática.
- **Context API**: Para manejar el estado global de la aplicación de manera eficiente.

## Funcionalidades

- **Pantalla de Inicio de Sesión**: Permite a los usuarios autenticarse en la aplicación.
- **Pantalla Privada**: Accesible únicamente para usuarios autenticados.

## Características

- Pantalla de inicio de sesión con email y password.
- Manejo de autenticación utilizando Context API.
- Redirección automática a la pantalla privada después de iniciar sesión.
- Protección de rutas privadas.
- Funcionalidad de cierre de sesión.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/pancholi1/Ejercicio-3-Amalgama.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd Ejercicio-3-Amalgama
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

## Uso

1. Inicia la aplicación:

   ```bash
   npm start
   ```

2. Abre tu navegador y ve a `http://localhost:5174`.

3. Usa las siguientes credenciales para iniciar sesión:
   - **Email**: `user@amalgama.co`
   - **Password**: `password`

## Estructura del Proyecto

- `src/App.tsx`: Configuración de rutas y navegación.
- `src/context/AuthProvidder.tsx`: Maneja el estado de autenticación utilizando Context API y el patrón Flux.
- `src/components/PrivateRoute.tsx`: Componente para proteger rutas privadas.
- `src/components/LoginScreen.tsx`: Componente de la pantalla de inicio de sesión.
- `src/components/HomeScreen.tsx`: Componente de la pantalla privada.

## Posible Mejoras

- Validación de Formularios
- Manejo de Sesiones usando localStorage o sessionsStorage para almacenar el token y que persista la sesion en la recarga de la pagina
- Pruebas unitarias y de integracion utilizando Jest y React Testing Library
- Mejorar toda la estructura de carpeta, creando Pages, Routes, etc
- Se podria utilizar redux-toolkit para manejo de estado.
- Implementar manejo de errores más detallado.
