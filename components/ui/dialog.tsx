"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const DialogContext = React.createContext<{
  onOpenChange?: (open: boolean) => void;
}>({});

interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

function Dialog({ open, onOpenChange, children }: DialogProps) {
  const childrenArray = React.Children.toArray(children);
  const trigger = childrenArray[0];
  const content = childrenArray[1];

  return (
    <DialogContext.Provider value={{ onOpenChange }}>
      {trigger}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-charcoal-50 p-4">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => onOpenChange?.(false)}
          />
          {content}
        </div>
      )}
    </DialogContext.Provider>
  );
}

interface DialogTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

function DialogTrigger({ children, asChild }: DialogTriggerProps) {
  const { onOpenChange } = React.useContext(DialogContext);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: () => onOpenChange?.(true),
    } as any);
  }

  return (
    <button onClick={() => onOpenChange?.(true)} className="inline-flex">
      {children}
    </button>
  );
}

interface DialogContentProps {
  className?: string;
  children: React.ReactNode;
  showCloseButton?: boolean;
  onClose?: () => void;
}

function DialogContent({ className, children, showCloseButton = true, onClose }: DialogContentProps) {
  return (
    <div
      className={cn(
        "relative bg-white rounded-lg border shadow-lg p-6 max-w-lg w-full mx-4",
        className
      )}
    >
      {children}
      {showCloseButton && (
        <button
          className="absolute top-4 right-4 opacity-70 hover:opacity-100"
          onClick={onClose}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          <span className="sr-only">Close</span>
        </button>
      )}
    </div>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-2 text-center sm:text-left ", className)}
      {...props}
    />
  );
}

function DialogTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}

function DialogDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
};
