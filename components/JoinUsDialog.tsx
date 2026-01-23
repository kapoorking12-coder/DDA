"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import EnrollmentForm from "./EnrollmentForm";

interface JoinUsDialogProps {
  trigger?: React.ReactNode;
  triggerClassName?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function JoinUsDialog({ trigger, triggerClassName = "", open: controlledOpen, onOpenChange }: JoinUsDialogProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [demoFormOpen, setDemoFormOpen] = useState(false);
  const [enrollFormOpen, setEnrollFormOpen] = useState(false);

  // Use controlled state if provided, otherwise use internal state
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = (value: boolean) => {
    if (controlledOpen !== undefined) {
      onOpenChange?.(value);
    } else {
      setInternalOpen(value);
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setOpen} >
        <DialogTrigger asChild>
          {trigger ? (
            <div onClick={() => setOpen(true)} className={triggerClassName}>
              {trigger}
            </div>
          ) : (
            <Button>Join Us</Button>
          )}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]" onClose={() => setOpen(false)}>
          <DialogHeader>
            <DialogTitle>Join Delhi Design Academy</DialogTitle>
            <DialogDescription className="py-4">
              Choose an option to get started with your design journey.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <Button onClick={() => { setOpen(false); setDemoFormOpen(true); }}>
              Book a Free Demo Class
            </Button>
            <Button onClick={() => { setOpen(false); setEnrollFormOpen(true); }}>
              Enroll Now
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <EnrollmentForm
        courseName="Free Demo Class"
        trigger={<div />} 
        open={demoFormOpen}
        onOpenChange={setDemoFormOpen}
      />
      <EnrollmentForm
        courseName="General Enrollment"
        trigger={<div />} 
        open={enrollFormOpen}
        onOpenChange={setEnrollFormOpen}
      />
    </>
  );
}