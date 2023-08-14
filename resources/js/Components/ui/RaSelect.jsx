import {
  Button,
  Item,
  Label,
  ListBox,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";

export default function RaSelect(props) {
  return (
    <Select {...props}>
      <Button className="flex items-center gap-x-7">
        <div className="flex items-baseline gap-x-1 py-3 ps-3">
          <Label className="text-sm text-zinc-500">Sort by:</Label>
          <SelectValue className="text-sm font-medium text-zinc-700" />
        </div>
        <div
          aria-hidden="true"
          className=" border-l border-gray-100 px-1.5 py-3 text-zinc-500"
        >
          ▼
        </div>
      </Button>
      <Popover>
        <ListBox>
          <Item>Aardvark</Item>
          <Item>Cat</Item>
          <Item>Dog</Item>
          <Item>Kangaroo</Item>
          <Item>Panda</Item>
          <Item>Snake</Item>
        </ListBox>
      </Popover>
    </Select>
  );
}
