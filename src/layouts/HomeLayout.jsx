import Header from "../components/Header";
import LeftNav from "../components/LeftNav";
import Navbar from "../components/Navbar";
import RightNav from "../components/RightNav";

export default function HomeLayout() {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-4">
        <aside className="col-span-3">
          <LeftNav></LeftNav>
        </aside>
        <main className="col-span-6">main</main>
        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
      <footer></footer>
    </div>
  );
}
