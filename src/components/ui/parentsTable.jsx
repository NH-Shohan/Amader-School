"use client";

import { Pencil, Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const parents = [
  {
    id: 1,
    name: "John Doe",
    students: ["Sarah Brewer"],
    email: "john@doe.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 2,
    name: "Jane Doe",
    students: ["Cecilia Bradley"],
    email: "jane@doe.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 3,
    name: "Mike Geller",
    students: ["Fanny Caldwell"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 4,
    name: "Jay French",
    students: ["Mollie Fitzgerald", "Ian Bryant"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 5,
    name: "Jane Smith",
    students: ["Mable Harvey"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 6,
    name: "Anna Santiago",
    students: ["Joel Lambert"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 7,
    name: "Allen Black",
    students: ["Carrie Tucker", "Lilly Underwood"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 8,
    name: "Ophelia Castro",
    students: ["Alexander Blair"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 9,
    name: "Derek Briggs",
    students: ["Susan Webster", "Maude Stone"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 10,
    name: "John Glover",
    students: ["Stella Scott"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
];

export default function ParentsTable() {
  return (
    <div className="rounded-md ">
      <Table>
        <TableHeader>
          <TableRow className="">
            <TableHead className="w-[250px]">Info</TableHead>
            <TableHead>parent ID</TableHead>
            <TableHead>Student Name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Address</TableHead>
            <TableHead className="">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {parents.map((parent, index) => (
            <TableRow
              key={parent.id}
              className={index % 2 === 0 ? "bg-muted/50" : ""}
            >
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <span className="font-medium">{parent.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {parent.email}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell>{parent.id}</TableCell>
              <TableCell>{parent.students}</TableCell>
              <TableCell>{parent.phone}</TableCell>
              <TableCell>{parent.address}</TableCell>
              <TableCell className="text-right">
                <div className="flex  gap-2">
                  <Button
                    className="bg-purple-400 text-white p-1 rounded-full"
                    variant="ghost"
                    size="icon"
                  >
                    <Eye className="" />
                  </Button>
                  <Button
                    className="bg-blue-500/50  text-white p-1 rounded-full"
                    variant="ghost"
                    size="icon"
                  >
                    <Pencil className="" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

/**
 * 
 * "use client";

import { Pencil, Eye } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const parents = [
  {
    id: "123456789",
    name: "John Doe",
    email: "john@doe.com",
    subjects: "Math, Geometry",
    classes: "1B, 2A, 3C",
    phone: "123456789",
    address: "123 Main St, Anytown, USA",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
  },
  // ... other parents
];

export default function parentsTable() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setActive(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);

  return (
    <div className="rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Info</TableHead>
            <TableHead>parent ID</TableHead>
            <TableHead>Subjects</TableHead>
            <TableHead>Classes</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {parents.map((parent, index) => (
            <TableRow
              key={parent.id}
              className={index % 2 === 0 ? "bg-muted/50" : ""}
            >
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <img
                    src={parent.image}
                    alt={`${parent.name}'s profile`}
                    className="rounded-full h-12 w-12 object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium">{parent.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {parent.email}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell>{parent.id}</TableCell>
              <TableCell>{parent.subjects}</TableCell>
              <TableCell>{parent.classes}</TableCell>
              <TableCell>{parent.phone}</TableCell>
              <TableCell>{parent.address}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    className="bg-purple-400 text-white p-1 rounded-full"
                    variant="ghost"
                    size="icon"
                    onClick={() => setActive(parent)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    className="bg-blue-500/50 text-white p-1 rounded-full"
                    variant="ghost"
                    size="icon"
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-50 flex items-center justify-center"
          >
            <motion.div
              ref={ref}
              layoutId={`card-${active.id}`}
              className="bg-white dark:bg-neutral-900 p-6 rounded-lg w-full max-w-2xl"
            >
              <div className="flex items-start justify-between mb-4">
                <motion.h2
                  layoutId={`name-${active.id}`}
                  className="text-2xl font-bold"
                >
                  {active.name}
                </motion.h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setActive(null)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                  </svg>
                </Button>
              </div>
              <motion.div layoutId={`image-${active.id}`} className="mb-4">
                <img
                  src={active.image}
                  alt={`${active.name}'s profile`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </motion.div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>{active.email}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>{active.phone}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Subjects</h3>
                  <p>{active.subjects}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Classes</h3>
                  <p>{active.classes}</p>
                </div>
                <div className="col-span-2">
                  <h3 className="font-semibold">Address</h3>
                  <p>{active.address}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

 */
