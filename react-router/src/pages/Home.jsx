import { Link } from "../Link.jsx";

export default function HomePage() {
  return (
    <>
      <h2>Home</h2>
      <p>Esta es una página de ejemplo para crear React Router desde cero</p>
      <Link to='/about'>Ir sobre nosotros</Link>
    </>
  );
}
