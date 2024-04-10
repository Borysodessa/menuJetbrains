import { MenuJetbains } from "./components/menuJetbains";
import { menu } from "./components/HelpTOC";

export function App() {
  const menuIds = menu.topLevelIds;
  return (
    <section className="section__app">
      <MenuJetbains menuIds={menuIds} entitiesPages={menu.entities.pages} />
    </section>
  );
}
