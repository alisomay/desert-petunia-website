"use client";
import React from "react";

export function AboutContent() {
  return (
    <article
      className="
    text-foreground 
    space-y-4
    text-sm
    brb:text-base
    "
    >
      <h2 className="sr-only">About Desert Petunia</h2>
      <p className=" leading-relaxed">
        Desert Petunia is a project dedicated to keep the spirit of the first
        interactions I've had with music through computers back in early 90's.
        <br />
        <br />
        Light, playful, curious, setting the mood for emergent natural fun.
        <br />
        <br />
        Dedicated to preserve the "beginner's mind".
        <br />
        <br />
        The "Petunia" in the name is inspired from young Pete's tattoo. For
        updates and latest releases please follow the social media links.
        <br />
        <br />
        All visual entities related to this project is created in collaboration
        with{" "}
        <a href="https://basakunal.design" target="_blank">
          <span className="font-[500]">Başak Ünal</span>
        </a>
        .
        <br />
        <br />
        Font:{" "}
        <a href="https://fontesk.com/etude-noire-font/" target="_blank">
          <span className="font-[500]">Etude Noire</span>
        </a>{" "}
        by{" "}
        <a href="https://www.behance.net/ed67b3fc#" target="_blank">
          <span className="font-[500]">Dimitri Antonov</span>
        </a>{" "}
        <br />
        Licensed under{" "}
        <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">
          Creative Commons Attribution 4.0 International.
        </a>
        <br />
        <br />
        To contact:{" "}
        <a href="mailto:info@desertpetunia.com">
          <span className="font-[500]">info@desertpetunia.com</span>
        </a>
      </p>
    </article>
  );
}
