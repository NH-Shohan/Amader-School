import {
  BookOpenText,
  Books,
  CalendarDots,
  ChalkboardTeacher,
  Exam,
  GraduationCap,
  ListChecks,
  Megaphone,
  Notebook,
  NotePencil,
  Person,
  SquaresFour,
  Users,
} from "@phosphor-icons/react";

export const links = [
  {
    label: "dashboard",
    href: "/",
    Icon: <SquaresFour className="w-6 h-6" />,
  },
  {
    label: "Students",
    href: "/",
    Icon: <Users className="w-6 h-6" />,
  },
  {
    label: "Teachers",
    href: "/",
    Icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    label: "Parents",
    href: "/",
    Icon: <Person className="w-6 h-6" />,
  },
  {
    label: "Subjects",
    href: "/",
    Icon: <Books className="w-6 h-6" />,
  },
  {
    label: "Classes",
    href: "/",
    Icon: <ChalkboardTeacher className="w-6 h-6" />,
  },
  {
    label: "Lessons",
    href: "/",
    Icon: <BookOpenText className="w-6 h-6" />,
  },
  {
    label: "Exams",
    href: "/",
    Icon: <NotePencil className="w-6 h-6" />,
  },
  {
    label: "Assignments",
    href: "/",
    Icon: <Notebook className="w-6 h-6" />,
  },
  {
    label: "Results",
    href: "/",
    Icon: <Exam className="w-6 h-6" />,
  },
  {
    label: "Attendence",
    href: "/",
    Icon: <ListChecks className="w-6 h-6" />,
  },
  {
    label: "Events",
    href: "/",
    Icon: <CalendarDots className="w-6 h-6" />,
  },
  {
    label: "Announcments",
    href: "/",
    Icon: <Megaphone className="w-6 h-6" />,
  },
];
