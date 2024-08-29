"use client";

import CreateworkspaceModal from "@/features/workspaces/components/CreateworkspaceModal";
import { useEffect, useState } from "react";

const Modals = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <CreateworkspaceModal />
    </>
  );
};

export default Modals;
