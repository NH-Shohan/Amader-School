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

const teachers = [
  {
    id: 1,
    teacherId: "1234567890",
    name: "John Doe",
    email: "john@doe.com",
    image:
      "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Math", "Geometry"],
    classes: ["1B", "2A", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 2,
    teacherId: "1234567890",
    name: "Jane Doe",
    email: "jane@doe.com",
    image:
      "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Physics", "Chemistry"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 3,
    teacherId: "1234567890",
    name: "Mike Geller",
    email: "mike@geller.com",
    image:
      "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Biology"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 4,
    teacherId: "1234567890",
    name: "Jay French",
    email: "jay@gmail.com",
    image:
      "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["History"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 5,
    teacherId: "1234567890",
    name: "Jane Smith",
    email: "jane@gmail.com",
    image:
      "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Music", "History"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 6,
    teacherId: "1234567890",
    name: "Anna Santiago",
    email: "anna@gmail.com",
    image:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Physics"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 7,
    teacherId: "1234567890",
    name: "Allen Black",
    email: "allen@black.com",
    image:
      "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["English", "Spanish"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 8,
    teacherId: "1234567890",
    name: "Ophelia Castro",
    email: "ophelia@castro.com",
    image:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Math", "Geometry"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 9,
    teacherId: "1234567890",
    name: "Derek Briggs",
    email: "derek@briggs.com",
    image:
      "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Literature", "English"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 10,
    teacherId: "1234567890",
    name: "John Glover",
    email: "john@glover.com",
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Biology"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
];

export const studentsData = [
  {
    id: 1,
    studentId: "1234567890",
    name: "John Doe",
    email: "john@doe.com",
    image:
      "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "1B",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 2,
    studentId: "1234567890",
    name: "Jane Doe",
    email: "jane@doe.com",
    image:
      "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 3,
    studentId: "1234567890",
    name: "Mike Geller",
    email: "mike@geller.com",
    image:
      "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 4,
    studentId: "1234567890",
    name: "Jay French",
    email: "jay@gmail.com",
    image:
      "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 5,
    studentId: "1234567890",
    name: "Jane Smith",
    email: "jane@gmail.com",
    image:
      "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 6,
    studentId: "1234567890",
    name: "Anna Santiago",
    email: "anna@gmail.com",
    image:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 7,
    studentId: "1234567890",
    name: "Allen Black",
    email: "allen@black.com",
    image:
      "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 8,
    studentId: "1234567890",
    name: "Ophelia Castro",
    email: "ophelia@castro.com",
    image:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 9,
    studentId: "1234567890",
    name: "Derek Briggs",
    email: "derek@briggs.com",
    image:
      "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 10,
    studentId: "1234567890",
    name: "John Glover",
    email: "john@glover.com",
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "123 Main St, Anytown, USA",
  },
];

export default function TeachersTable() {
  return (
    <div className="rounded-md ">
      <Table>
        <TableHeader>
          <TableRow className="">
            <TableHead className="w-[250px]">Info</TableHead>
            <TableHead>Teacher ID</TableHead>
            <TableHead>Subjects</TableHead>
            <TableHead>Classes</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Address</TableHead>
            <TableHead className="">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teachers.map((teacher, index) => (
            <TableRow
              key={teacher.id}
              className={index % 2 === 0 ? "bg-muted/50" : ""}
            >
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <img
                    src={teacher.image}
                    alt={`${teacher.name}'s profile`}
                    className="rounded-full h-12 w-12 object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium">{teacher.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {teacher.email}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell>{teacher.id}</TableCell>
              <TableCell>{teacher.subjects}</TableCell>
              <TableCell>{teacher.classes}</TableCell>
              <TableCell>{teacher.phone}</TableCell>
              <TableCell>{teacher.address}</TableCell>
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

const teachers = [
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
  // ... other teachers
];

export default function TeachersTable() {
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
            <TableHead>Teacher ID</TableHead>
            <TableHead>Subjects</TableHead>
            <TableHead>Classes</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teachers.map((teacher, index) => (
            <TableRow
              key={teacher.id}
              className={index % 2 === 0 ? "bg-muted/50" : ""}
            >
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <img
                    src={teacher.image}
                    alt={`${teacher.name}'s profile`}
                    className="rounded-full h-12 w-12 object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium">{teacher.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {teacher.email}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell>{teacher.id}</TableCell>
              <TableCell>{teacher.subjects}</TableCell>
              <TableCell>{teacher.classes}</TableCell>
              <TableCell>{teacher.phone}</TableCell>
              <TableCell>{teacher.address}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    className="bg-purple-400 text-white p-1 rounded-full"
                    variant="ghost"
                    size="icon"
                    onClick={() => setActive(teacher)}
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
