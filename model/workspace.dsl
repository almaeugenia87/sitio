workspace "APW" "Arquitectura de los Productos Web" {

    !impliedRelationships "false"
    !identifiers "hierarchical"

    model {
        enterprise "Soft4pilot" {
            Repositorio = softwareSystem "Repositorio" "Repositorio de datos" "Storage" {
                url "https://api.soft4pilot.net"
                Datos = container "Datos" "Base de datos" "MySQL" "Storage"
                Editor = container "Editor" "Editor de datos" "Directus" "Browser"
                Archivos = container "Archivos" "Recursos digitales" "Linux" "Storage"
                API = container "API" "Interfaz programática" "GraphQL"
            }
            Producto = softwareSystem "Producto" "Producto Web" "Hero" {
                Cliente = container "Cliente" "Cliente del servicio" "W3C" "Browser" {
                    Aplicacion = component "Aplicación" "Aplicación principal" "React"
                    Paginas = component "Páginas" "Páginas y plantillas" "React - Component"
                    Mecanismos = component "Mecanismos" "Funcionalidad compartida" "React - Hooks"
                    Contexto = component "Contexto" "Contexto del producto" "JSON"
                }
                Servidor = container "Servidor" "Servidor de aplicaciones"
                Cache = container "Cache" "Memoria intermedia" "Service Worker" "Storage"
            }
            Diseno = softwareSystem "Diseño" "Sistema de diseño" {
                url "https://soft4pilot.github.io/sd"
                Componentes = container "Componentes" "Librería de componentes" "GitHub Packages" "Package" {
                    Estilos = component "Estilos" "Estilos globales" "Variables CSS"
                    Componentes = component "Componentes" "Componentes interactivos" "React"
                    Recursos = component "Recursos" "Recursos digitales" "Arch"
                    Reticulas = component "Retículas" "Retículas y plantillas" "React"
                }
                Esquemas = container "Esquemas" "Esquemas de las páginas" "Figma" "Package"
                Guias = container "Guías" "Guías de estilo" "Storybook" "Documentation"
            }
        }

        Usuario = person "Usuario" "Usuario del producto"
        Programador = person "Programador" "Programador Web"
        Arquitecto = person "Arquitecto" "Arquitecto de datos"
        Disenador = person "Diseñador" "Diseñador gráfico"
        Repositorio.API -> Repositorio.Datos "Gestiona" "SQL"
        Diseno.Componentes.Componentes -> Diseno.Componentes.Estilos "Utilizan"
        Disenador -> Diseno.Esquemas "Elabora"
        Disenador -> Diseno.Guias "Elabora"
        Producto -> Repositorio.API "Utiliza" "HTTP"
        Diseno.Esquemas -> Diseno.Componentes "Representan"
        Producto.Cliente.Mecanismos -> Repositorio "Gestionan" "HTTP"
        Producto.Cliente.Paginas -> Diseno.Componentes "Importan" "ES6"
        Usuario -> Producto.Cliente.Aplicacion "Utiliza"
        Programador -> Repositorio.Editor "Implementa"
        Repositorio.API -> Repositorio.Archivos "Gestiona"
        Arquitecto -> Repositorio.Editor "Utiliza"
        Diseno.Componentes.Recursos -> Diseno.Componentes.Componentes "Complementan"
        Diseno.Componentes.Reticulas -> Diseno.Componentes.Componentes "Organizan"
        Repositorio.Editor -> Repositorio.API "Utiliza"
        Producto -> Repositorio "Consulta y gestiona" "HTTP"
        Arquitecto -> Repositorio "Responsable"
        Usuario -> Producto "Utiliza"
        Usuario -> Producto.Cliente "Utiliza"
        Producto.Cliente -> Producto.Servidor "Descarga aplicación" "HTTP"
        Producto.Cliente.Aplicacion -> Producto.Cliente.Paginas "Despliega"
        Programador -> Producto "Responsable"
        Producto -> Diseno "Importa componentes" "ES6"
        Producto.Cliente -> Repositorio "Gestiona datos" "HTTP"
        Producto.Cliente -> Producto.Cache "Gestiona datos (sin conexión)"
        Producto.Cliente -> Diseno "Importa" "ES6"
        Disenador -> Diseno "Responsable"
        Diseno.Guias -> Diseno.Componentes "Explican cómo utilizar"
        Producto.Cliente -> Diseno.Componentes "Importa"
        Programador -> Diseno.Componentes "Implementa"
        Producto.Cliente.Paginas -> Producto.Cliente.Mecanismos "Utilizan"
        Producto.Cliente.Mecanismos -> Diseno.Componentes "Actualizan" "React"
        Producto.Cliente.Aplicacion -> Producto.Cliente.Contexto "Consultan"
        Producto.Cliente.Paginas -> Producto.Cliente.Contexto "Consultan"

    }

    views {
        systemContext Producto "C1" "Contexto APW" {
            include Repositorio
            include Producto
            include Usuario
            include Programador
            include Arquitecto
            include Diseno
            include Disenador
        }

        container Diseno "C2Diseno" "Sistema de diseño" {
            include Programador
            include Disenador
            include Diseno.Componentes
            include Diseno.Esquemas
            include Diseno.Guias
        }

        container Producto "C2Producto" "Producto Web" {
            include Repositorio
            include Producto.Cliente
            include Producto.Servidor
            include Producto.Cache
            include Usuario
        }

        container Repositorio "C2Repositorio" "Repositorio de información" {
            include Repositorio.Datos
            include Repositorio.Editor
            include Repositorio.Archivos
            include Repositorio.API
            include Producto
            include Arquitecto
        }

        component Producto.Cliente "C3Cliente" "Cliente de servicios" {
            include Repositorio
            include Producto.Cliente.Aplicacion
            include Producto.Cliente.Paginas
            include Producto.Cliente.Mecanismos
            include Producto.Cliente.Contexto
            include Usuario
            include Diseno.Componentes
        }

        component Diseno.Componentes "C3Componentes" "Librería de componentes" {
            include Diseno.Componentes.Estilos
            include Diseno.Componentes.Componentes
            include Diseno.Componentes.Recursos
            include Diseno.Componentes.Reticulas
        }

        styles {
            element "Active" {
                # empty style
            }
            element "Adapter" {
                shape "Pipe"
            }
            element "Application" {
                shape "Folder"
            }
            element "Browser" {
                shape "WebBrowser"
            }
            element "Cloud" {
                shape "Circle"
            }
            element "Component" {
                shape "Component"
            }
            element "Container" {
                shape "RoundedBox"
            }
            element "Person" {
                shape "Person"
            }
            element "Storage" {
                shape "Cylinder"
            }
        }

        branding {
            logo "data:image/png;base64,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"
            font "Raleway" "https://fonts.googleapis.com/css2?family=Raleway"
        }

    }


}
