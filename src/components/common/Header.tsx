"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  const vars = {
    initial: { x: "-110%", y: "-50%", opacity: 0 },
    animate: {
      x: "0",
      y: "0",
      opacity: "1",
      transition: {
        duration: 1,
      },
    },
  };

  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    {
      label: "home",
      href: "/",
    },
    {
      label: "digital collectibles",
      href: "#collectibles",
    },
    {
      label: "join the league",
      href: "#join",
    },
    {
      label: "world",
      href: "#world",
    },
    {
      label: "newsletter",
      href: "#newsletter",
    },
  ];

  return (
    <motion.header
      id="header"
      className={`${navOpen ? "active" : ""}`}
      variants={vars}
      initial="initial"
      animate={"animate"}
    >
      <div className="container-fluid">
        <nav className="nav">
          <div className="nav-logo">
            <Link href={"/"}>
              <img src="assets/images/logo.png" alt="Logo" />
            </Link>
          </div>
          <ul className="nav-links">
            {navLinks.map(({ label, href }, index) => {
              return (
                <li key={index}>
                  <Link href={href}>{label}</Link>
                </li>
              );
            })}
          </ul>
          <div className="nav-button">
            <button className="primaryButton">
              <div className="primaryButton-text">
                Exclusive Mint Coming Soon
              </div>
            </button>
            <button
              className="nav-toggle nav-toggle-open"
              onClick={() => setNavOpen(true)}
            >
              <img src="assets/images/icons/menu.svg" alt="" />
            </button>
            <button
              className="nav-toggle nav-toggle-close"
              onClick={() => setNavOpen(false)}
            >
              <img src="assets/images/icons/close.svg" alt="" />
            </button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
