import { Metadata } from "next";
import DeletionStatusClient from "./DeletionStatusClient";

export const metadata: Metadata = {
  title: "Data Deletion Status",
  description: "Check the status of your data deletion request.",
  alternates: {
    canonical: "/deletion-status",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function DeletionStatusPage() {
  return <DeletionStatusClient />;
}
