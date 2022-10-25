import { useRouter } from "next/router";
import NextLink from "next/link";

const NavItemComponent = ({ href, text }: { href: string; text: string }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a className={isActive ? "font-semibold" : "font-normal"}>
        <span className="capsize text-[40px]">{text}</span>
      </a>
    </NextLink>
  );
};

const NavbarComponent = () => {
  return (
    <nav className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
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
