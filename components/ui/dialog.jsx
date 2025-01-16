import React from 'react';
import * as DialogPrimitive from "@radix-ui/react-dialog";

const Dialog = ({ children, title, renderTrigger }) => {
  return (
    <DialogPrimitive.Root>
      <div className="w-full flex justify-end">
        <DialogPrimitive.Trigger asChild>
          {renderTrigger()}
        </DialogPrimitive.Trigger>
      </div>
      
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/85 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="min-w-[75%] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-10 py-8 shadow-lg rounded-xl">
          <DialogPrimitive.Title className="sr-only">
            {title}
          </DialogPrimitive.Title>
          {children}
          <DialogPrimitive.Close className="absolute btn rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground top-3 right-4">
            <span className="text-black text-2xl clash-display-bold">X</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

export default Dialog