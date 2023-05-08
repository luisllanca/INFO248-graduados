## Intrucciones ejecución

1. Instalar modulos con `npm install`
2. Renombrar `template.env` por a `.env`
3. Para correr el proyecto escribir `npm run dev`
-- Funcionalidad filtar estudiante (retorna la informacion del estudiante)
4. ir a la ruta http://localhost:8080/gestion/estudiantes/1
5. el valor "1" filtra por id de estudiante, si lo cambian muestran otro estudiante.
-- Funcionalidad ver comprobantes  (retorna los comprobantes de un estudiante en especifico)
6. ir a la ruta http://localhost:8080/gestion/estudiantes/1/comprobantes
7. el valor "1" filtra por id de estudiante, si lo cambian muestran otros comprobantes de otro estudiante.
-- Funcionalidad revisarHistorialPagos  (retorna los pagos de un estudiante en especifico)
6. ir a la ruta http://localhost:8080/gestion/estudiantes/1/pagos
7. el valor "1" filtra por id de estudiante, si lo cambian muestran otros pagos de otro estudiante.

## Para desplegar en Docker
1. Simplemente hay que descomentar el `template.env`.
2. Ejecutar el comando `docker-compose up --build`.
3. Realizar pasos desde el 4 hasta el 7 de las Instrucciones de ejecución.