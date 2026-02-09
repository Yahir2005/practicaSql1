/*Crear Tablas*/
create database Empresa;
use Empresa;

create table Unidad(
    UnidadId int primary key auto_increment,
    Nombre varchar(50),
    Descripcion VARCHAR(70)
);

create table Proveedor(
    ProveedorId int primary key auto_increment,
    NombreProveedor varchar(50),
    Telefono VARCHAR(15),
    Direccion VARCHAR(70)
);

create table Precio(
    PrecioId int primary key auto_increment,
    PrecioCompra DECIMAL(10,2),
    PrecioVenta DECIMAL(10,2)
);

create table Sucursal(
    SucursalId int primary key auto_increment,
    Nombre varchar(50),
    Direccion VARCHAR(100),
    Encargado VARCHAR(100)
);

create table Producto(
    ProductoID int primary key auto_increment,
    Nombre varchar(50),
    Descripcion VARCHAR(70),
    UnidadId INT,
    ProveedorId INT,
    PrecioId INT,
    SucursalId INT,
    FOREIGN KEY (UnidadId) REFERENCES Unidad(UnidadId),
    FOREIGN KEY (ProveedorId) REFERENCES Proveedor(ProveedorId),
    FOREIGN KEY (PrecioId) REFERENCES Precio(PrecioId),
    FOREIGN KEY (SucursalId) REFERENCES Sucursal(SucursalId)
);

/*Datos*/
INSERT INTO Unidad (Nombre, Descripcion) VALUES ('Kilogramo', 'Unidad de peso');
INSERT INTO Proveedor (NombreProveedor, Telefono, Direccion) VALUES ('Daniel Olivera', '123456789', 'Calle 123');
INSERT INTO Precio (PrecioCompra, PrecioVenta) VALUES (100, 120);
INSERT INTO Sucursal (Nombre, Direccion, Encargado) VALUES ('El Puesto', 'Calle 123', 'Daniel Perez');
INSERT INTO Producto (Nombre, Descripcion, UnidadId, ProveedorId, PrecioId, SucursalId) VALUES ('Arroz', '120 gramos', 1, 1, 1, 1);
/*JOIN*/
/*Join 1*/
SELECT P.ProductoID, P.Nombre, P.Descripcion, U.Nombre, Pr.NombreProveedor
FROM Producto P
JOIN Unidad U ON P.UnidadId = U.UnidadId
JOIN Proveedor Pr ON P.ProveedorId = Pr.ProveedorId;

/*Join 2*/
SELECT P.ProductoID, P.Nombre, P.Descripcion, Pr.NombreProveedor, P.PrecioId, S.Nombre
FROM Producto P
JOIN Proveedor Pr ON P.ProveedorId = Pr.ProveedorId
JOIN Precio Precio ON P.PrecioId = Precio.PrecioId
JOIN Sucursal S ON P.SucursalId = S.SucursalId;
