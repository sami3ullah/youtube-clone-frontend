import {
  Item,
  Hr,
} from "../components/MenuIcons/styled/MenuIcons.styledcomponent";

export const returnIcon = (menuItems) => {
  return menuItems.map((item) =>
    item.name === "hr" ? (
      <Hr key={item.id} />
    ) : (
      <Item key={item.id}>
        {item.icon}
        {item.name}
      </Item>
    )
  );
};
