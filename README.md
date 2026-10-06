# @rubenciveira/opr-kit

Logica y vistas de ejercitos de [One Page Rules](https://www.onepagerules.com/)
sin depender de ningun backend: constructor de listas, desglose de mejoras,
reglas y auras, composicion, hechizos, importacion de listas de Army Forge y
cartas e impresion en React.

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

## Vistas en React

`react` (18 o 19) es `peerDependency`: usa la de tu aplicacion.

```tsx
import UnitCard from "@rubenciveira/opr-kit/react/UnitCard";
import ArmyPrintView from "@rubenciveira/opr-kit/react/ArmyPrintView";
```

| Componente | Que dibuja |
|---|---|
| `UnitCard` | Carta de unidad de 120 x 70 mm (o de personaje, 120 x 140) |
| `RuleCard`, `SpellCard`, `HeroSkillCard` | Cartas Mini Euro de 44 x 68 mm |
| `ArmyPrintView` | Impresion de un ejercito: modo libro o tarjetas con dorso |
| `FactionPrintView` | Impresion de una faccion entera como libro |
| `LoreText`, `TextoConReferencias`, `IconoArma` | Piezas que usan las anteriores |

Las imagenes llegan ya resueltas, como URL o como funcion (`avatarDe`,
`miniaturaDe`, `coverUrl`): el paquete no sabe donde se guardan.

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

`pnpm build --watch` recompila al guardar. Con el paquete enlazado, el bundler
puede acabar con dos copias de React —la de la app y la de desarrollo del
paquete— y los hooks fallan; en Vite se evita con
`resolve: { dedupe: ["react", "react-dom"] }`.

## Licencia

MIT
