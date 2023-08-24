import { MenuJetbains } from "./components/menuJetbains";
import { menu } from "./components/HelpTOC";
import { MenuList } from "./components/menuList";
console.log(menu);
export function App() {
  const menuIds = menu.topLevelIds;
  return (
    <section>
      <MenuJetbains menuIds={menuIds} entitiesPages={menu.entities.pages} />
    </section>
  );
}
