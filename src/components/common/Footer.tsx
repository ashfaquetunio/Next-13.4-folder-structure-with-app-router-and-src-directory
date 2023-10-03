import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerTable = [
    {
      heading: "Marketing",
      href: "/",
      links: [
        {
          label: "All NFTs",
          href: "/",
        },
        {
          label: "Art",
          href: "/",
        },
        {
          label: "Virtual World",
          href: "/",
        },
        {
          label: "Trading Cards",
          href: "/",
        },
      ],
    },
    {
      heading: "Marketing",
      href: "/",
      links: [
        {
          label: "All NFTs",
          href: "/",
        },
        {
          label: "Art",
          href: "/",
        },
        {
          label: "Virtual World",
          href: "/",
        },
        {
          label: "Trading Cards",
          href: "/",
        },
      ],
    },
    {
      heading: "Marketing",
      href: "/",
      links: [
        {
          label: "All NFTs",
          href: "/",
        },
        {
          label: "Art",
          href: "/",
        },
        {
          label: "Virtual World",
          href: "/",
        },
        {
          label: "Trading Cards",
          href: "/",
        },
      ],
    },
  ];
  return (
    <footer id="footer" className="section-padding-block">
      <div className="container">
        <div className="inner">
          <article className="footer-newsletter">
            <h3 className="banner-title">Don&apos;t miss out</h3>
            <p>
              Sign up for the latest beauty news, product samples and coupons
            </p>
            <input
              type="email"
              name="email"
              className="simpleInput"
              placeholder="Enter Your Emailer Address"
            />
            <button className="simpleButton">sign up</button>
            <p>
              This site is intended for US consumers. By signing up, you
              understand and agree that your data will be collected and used
              subject to our <Link className="link-style" href={"/"}>US Privacy Policy</Link> and <Link className="link-style" href={"/"}>Terms of Use</Link>
            </p>
            <div className="footer-icons">
              <Link href={"/"}>
                <img src="assets/images/icons/discord.svg" alt="" />
              </Link>
              <Link href={"/"}>
                <img src="assets/images/icons/ex.svg" alt="" />
              </Link>
            </div>
          </article>
          <nav className="footer-table">
            {footerTable.map(({ heading, href, links }, index) => {
              return (
                <ul key={index}>
                  <li>
                    <Link href={href}>{heading}</Link>
                  </li>
                  {links.map(({ label, href }, index) => {
                    return (
                      <li key={index}>
                        <Link href={href}> {label}</Link>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </nav>
        </div>
        <div className="footer-bottom">
          <p>All Rights reserved -Superheroine Era.</p>
          <Link href={"/"}>Terms & Agreements</Link>
          <Link href={"/"}>Privacy Policy</Link>
          <button>Back to Top</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
