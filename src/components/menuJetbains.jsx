import "./styles.css";

import { MenuList } from "./menuList";

export function MenuJetbains({ menuIds, entitiesPages }) {
  return (
    <ul className="toc-tree list">
      {menuIds.map((el) => (
        <MenuList
          className="menu-list"
          key={el}
          item={entitiesPages[el]}
          entitiesPages={entitiesPages}
        />
      ))}
    </ul>
  );
}
