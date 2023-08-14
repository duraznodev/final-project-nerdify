import { useState } from "react";
import {
  Button,
  DialogTrigger,
  Heading,
  Input,
  Label,
  Modal,
  TextField,
  Dialog as _Dialog,
} from "react-aria-components";
import Portal from "../Portal";

export default function RaDialog({ trigger, children }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <Portal>
      <DialogTrigger>
        <div onClick={() => setOpen(true)}>{trigger}</div>
        <Modal
          className="absolute top-0 h-screen w-full bg-gray-950 bg-opacity-50"
          isDismissable
          isOpen={isOpen}
          onOpenChange={setOpen}
        >
          <_Dialog>
            <div className="mx-auto mt-24 w-[625px] rounded-2xl bg-white">
              {children}
            </div>
          </_Dialog>
        </Modal>
      </DialogTrigger>
    </Portal>
  );
}
