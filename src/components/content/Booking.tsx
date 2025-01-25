"use client";
import React from "react";

export function BookingContent() {
  return (
    <article
      className="text-foreground space-y-4    text-sm
    brb:text-base"
    >
      <h2 className="sr-only">Booking Information</h2>
      <p className="leading-relaxed">
        Desert Petunia was not initially intended for live shows.
        <br />
        However, this could evolve in time depending on inspiration or interest.
        <br />
        <br />
        For booking inquiries:{" "}
        <a href="mailto:booking@desertpetunia.com">
          <span className="font-[500]">booking@desertpetunia.com</span>
        </a>
      </p>
    </article>
  );
}
