
# 📝 Proyecto: Mock de Social Website con React llamado FreeSpace 

Este proyecto es una aplicación tipo *feed de usuario* construida con **React**, que permite a los usuarios iniciar sesión, crear publicaciones personalizadas, visualizar artículos externos y gestionar su contenido de manera local.

## 🚀 Funcionalidades

- Autenticación simulada usando `localStorage`
- Crear, listar y eliminar publicaciones personalizadas
- Visualización de artículos desde una API externa (mock con json-server)
- Diseño adaptable y moderno con Tailwind CSS
- Ruteo y navegación con `react-router-dom`
- Datos persistentes simulados con `json-server`

## 🛠️ Tecnologías y herramientas utilizadas

### ⚙️ React + React Hooks
- `useState`: manejo del estado de la aplicación
- `useEffect`: efectos secundarios como llamadas a APIs y control de sesión
- `useMemo`: para memorizar valores derivados y evitar renders innecesarios
- `useContext`: para manejar la autenticación globalmente
- `useNavigate`: navegación programática
- `react-hook-form`: manejo sencillo de formularios

### 🧠 Custom Hooks
- Hooks personalizados para obtener y administrar datos de usuario y blogs

### 📡 Axios
- Cliente HTTP para hacer peticiones `GET`, `POST`, `PATCH`, etc.

### 🎨 Tailwind CSS
- Utilizado para construir la interfaz con un diseño limpio y responsivo

### 🧩 Iconify
- Biblioteca de íconos para mejorar la experiencia visual de la app

### 🗂️ JSON Server
- Usado como una base de datos falsa local para simular peticiones a una API REST

## 📁 Estructura del Proyecto

```bash
/src
│
├── components         # Componentes reutilizables
├── context            # Contextos globales (como autenticación)
├── hooks              # Custom hooks
├── pages              # Páginas principales (UserFeed, UserProfile, etc.)
├── services           # Llamadas HTTP con Axios
├── App.jsx            # Configuración de rutas principales
└── main.jsx           # Entrada de la app
```

## 🧪 Instalación y ejecución

1. Clona este repositorio  
   ```bash
   git clone https://github.com/tuusuario/nombre-del-proyecto.git
   cd nombre-del-proyecto
   ```

2. Instala las dependencias  
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo  
   ```bash
   npm run dev
   ```

4. Corre el servidor JSON
   ```bash
   npx json-server --watch ./src/utils/data.json --port 3000
   ```

## 📌 Notas

- Asegúrate de tener `json-server` instalado globalmente o usar el comando con `npx`.
- Este proyecto es ideal para aprender cómo manejar formularios, estado global y peticiones API en React.
