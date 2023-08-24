import { useState } from "react";
import { ArrowButton } from "./buttonAngleDown";
import { MenuJetbains } from "./menuJetbains";

export function MenuList({ item, entitiesPages }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function сollapseList(el) {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <li className=" item toc-tree__item--level_0">
      {item.pages && (
        <ArrowButton
          onClick={() => сollapseList(item.id)}
          isRotated={isCollapsed}
        />
      )}
      <a href={item.url}>{item.title}</a>
      {isCollapsed && item.pages && (
        <MenuJetbains menuIds={item.pages} entitiesPages={entitiesPages} />
      )}
    </li>
  );
}
