import { useRouter } from "next/router";
import NextLink from "next/link";

const NavItemComponent = ({ href, text }: { href: string; text: string }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a className={isActive ? "font-semibold" : "font-normal"}>
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
};

const NavbarComponent = () => {
  return (
    <nav className="flex gap-4">
      <h1>abehidek</h1>
      <div className="flex gap-2">
        <NavItemComponent href="/" text="Home" />
        <NavItemComponent href="/blog" text="Blog" />
        <NavItemComponent href="/snippets" text="Snippets" />
        <NavItemComponent href="/guestbook" text="Guestbook" />
        <NavItemComponent href="/projects" text="Projects" />
        <NavItemComponent href="/uses" text="Uses" />
      </div>
    </nav>
  );
};

export default NavbarComponent;
