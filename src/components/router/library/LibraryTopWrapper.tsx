import LibraryCategory from "@/components/private/category/LibraryCategory";
import LibraryDropdown from "@/components/private/dropdown/LibraryDropdown";
import React from "react";

export default function LibraryTopWrapper() {
  return (
    <div className="library-top-wrapper flex justify-between items-center">
      <LibraryCategory />
      <LibraryDropdown />
    </div>
  );
}
