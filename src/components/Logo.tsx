"use client";
import { LogoSvg } from "./LogoSvg";

export function Logo(): JSX.Element {
  return (
    <div className="w-full max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] relative z-1">
      <div className="relative w-full aspect-square">
        <div className="absolute inset-0">
          <LogoSvg pathClassName="logo-svg-1" />
        </div>
        <div className="absolute inset-0 -translate-y-3 translate-x-2 logo-float-2">
          <LogoSvg pathClassName="logo-svg-2" />
        </div>
        <div className="absolute inset-0 -translate-y-4 translate-x-3 logo-float-3">
          <LogoSvg pathClassName="logo-svg-3" />
        </div>
      </div>
    </div>
  );
}
