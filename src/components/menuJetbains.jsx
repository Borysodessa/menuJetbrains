import "./styles.css";

import { MenuList } from "./menuList";

// import { menu } from "./HelpTOC";
// const entitiesPages = menu.entities.pages;

export function MenuJetbains({ menuIds, entitiesPages }) {
  return (
    <ul className="toc-tree list">
      {menuIds.map((el) => (
        <MenuList
          key={el}
          item={entitiesPages[el]}
          entitiesPages={entitiesPages}
        />
      ))}
    </ul>
  );
}
