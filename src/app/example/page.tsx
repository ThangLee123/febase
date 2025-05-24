"use client";

import APIComponent from "@/components/example/APIComponent";
import Example from "@/components/example/Example";
import React from "react";

export default function page() {
  return (
    <div>
      <div>
        Normal example: <Example />
      </div>
      <div className="mt-4">
        API example: <APIComponent />
      </div>
    </div>
  );
}
