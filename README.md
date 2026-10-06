# @rubenciveira/opr-kit

Logica de ejercitos de [One Page Rules](https://www.onepagerules.com/) sin
depender de ningun backend: constructor de listas, desglose de mejoras, reglas
y auras, composicion, hechizos e importacion de listas de Army Forge.

Nace de [Warhost](https://github.com/RubenCiveira/warhost), que la usa sobre
Appwrite, pero no sabe nada de Appwrite: cada aplicacion trae sus datos.

> Version 0.x: la API puede cambiar entre versiones menores.

## Instalar

```bash
pnpm add @rubenciveira/opr-kit
```

Solo ESM, con tipos incluidos.

## Uso

Cada modulo se importa por separado:

```ts
import { sectionsForUnit, buildArmy } from "@rubenciveira/opr-kit/core/builder";
import { reglasUsadasEnEjercito } from "@rubenciveira/opr-kit/core/faccion";
import { parseSpells } from "@rubenciveira/opr-kit/core/spells";
```

| Modulo | Para que |
|---|---|
| `builder` | Componer unidades desde el catalogo: secciones de mejora, costes, limites, ejercito resultante |
| `loadout` | Armas y equipo de una unidad tras aplicar reemplazos |
| `opciones` | Desglosar una opcion de mejora en lo que concede |
| `armyForgeResolve`, `armyForgeGains` | Leer listas compartidas de Army Forge |
| `reglas`, `auras`, `faccion` | Reglas con valor, auras, reglas propias y generales de una faccion |
| `composicion` | Avisos de composicion y puntos |
| `spells` | Hechizos de un libro |
| `unidades` | Agrupar unidades y emparejar heroes |
| `print` | Cuadricula de impresion en A4 |
| `gameSystems` | Sistemas de juego y sus particularidades |
| `questHero`, `questShop` | Heroes y tienda de Star Quest / Fantasy Quest |
| `model` | Tipos de entrada |

## Tus datos

Los tipos de `core/model` solo declaran los campos que la logica lee. Cualquier
objeto que los lleve encaja tal cual, aunque tenga mas: una fila de base de
datos, el JSON de un army book, lo que sea.

Las funciones que devuelven reglas son genericas: devuelven tu mismo tipo de
regla, con todos sus campos.

## Desarrollo

```bash
pnpm install
pnpm typecheck
pnpm build
```

Para probar cambios en una aplicacion sin publicar, enlazalo desde ella:

```bash
cd ../mi-app
pnpm link ../opr-kit
```

`pnpm build --watch` recompila al guardar.

## Licencia

MIT
