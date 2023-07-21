import Link from "next/link";
import Container from "./ui/Container";
import MainNav from "./MainNav";
import getCategories from "@/actions/getCategories";
import NavbarActions from "./NavbarActions";

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative flex items-center h-16 px-4 sm:px-6 lg:px-8">
          <Link href={"/"} className="flex ml-4 lg:ml-0 gap-x-2">
            <p className="mr-2 text-xl font-bold text-neutral-500 shrink-0">
              E-WARUNG
            </p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};
export default Navbar;
